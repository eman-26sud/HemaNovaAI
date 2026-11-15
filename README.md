from flask import Flask, render_template, request, jsonify
from sklearn.linear_model import LogisticRegression
import numpy as np

app = Flask(__name__)

# Example training data to support a prototype AI risk estimate.
# This is not a medical diagnostic model and is only for demonstration.
X_train = np.array([
    [13.8, 41.0, 88.0, 29.5, 32.0, 32],
    [12.7, 38.5, 86.0, 28.0, 31.5, 45],
    [12.1, 36.4, 82.0, 26.5, 30.5, 38],
    [11.2, 34.5, 78.0, 24.0, 29.0, 51],
    [9.9, 30.0, 70.0, 21.0, 26.5, 62],
    [8.5, 26.5, 64.0, 18.5, 24.0, 70],
    [14.3, 42.0, 90.0, 30.0, 33.0, 24],
    [13.5, 40.0, 87.0, 29.2, 32.5, 35],
    [12.9, 39.0, 85.0, 28.4, 31.7, 44],
    [10.7, 32.0, 73.0, 22.6, 28.5, 58],
    [10.2, 31.0, 72.0, 22.0, 27.8, 64],
    [8.9, 28.0, 68.0, 19.4, 25.0, 73],
], dtype=float)

y_train = np.array([0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1], dtype=int)

model = LogisticRegression(max_iter=500)
model.fit(X_train, y_train)


def calculate_anemia_status(sex, hb, hct, mcv, mch, mchc):
    threshold = 12.0 if sex.lower() == "female" else 13.0
    if hb < threshold - 2.5:
        category = "Severe"
        severity = 3
    elif hb < threshold - 1.2:
        category = "Moderate"
        severity = 2
    elif hb < threshold:
        category = "Mild"
        severity = 1
    else:
        category = "Normal"
        severity = 0

    return {
        "status": category,
        "severity": severity,
        "threshold": threshold,
        "flags": {
            "low_hb": hb < threshold,
            "low_hct": hct < (36 if sex.lower() == "female" else 41),
            "low_mcv": mcv < 80,
            "low_mch": mch < 27,
            "low_mchc": mchc < 32,
        },
    }


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json(silent=True) or {}

    age = float(data.get("age", 0) or 0)
    sex = (data.get("sex") or "male").lower()
    hb = float(data.get("hb", 0) or 0)
    rbc = float(data.get("rbc", 0) or 0)
    hct = float(data.get("hct", 0) or 0)
    mcv = float(data.get("mcv", 0) or 0)
    mch = float(data.get("mch", 0) or 0)
    mchc = float(data.get("mchc", 0) or 0)

    # Keep the prototype transparent and non-diagnostic.
    if hb <= 0 or hct <= 0:
        return jsonify({
            "status": "Incomplete data",
            "severity": 0,
            "risk_score": 0,
            "summary": "Please provide complete CBC values to generate a prototype analysis.",
            "disclaimer": "This project is a prototype and is not medical advice."
        })

    status = calculate_anemia_status(sex, hb, hct, mcv, mch, mchc)
    features = np.array([[hb, hct, mcv, mch, mchc, age]], dtype=float)
    risk_score = float(model.predict_proba(features)[0][1] * 100)

    if status["status"] == "Normal":
        summary = "CBC values appear within a normal range for the selected profile. This is a prototype estimate only."
    elif status["status"] == "Mild":
        summary = "A mild anemia pattern is visible. Consider evaluation and follow-up care for possible iron deficiency or nutritional causes."
    elif status["status"] == "Moderate":
        summary = "A moderate anemia profile is suggested. Clinical review is recommended for further assessment and diagnostic workup."
    else:
        summary = "A severe anemia pattern is suggested by the prototype model. Immediate clinical review is strongly recommended."

    return jsonify({
        "status": status["status"],
        "severity": status["severity"],
        "risk_score": round(risk_score, 1),
        "summary": summary,
        "threshold": status["threshold"],
        "flags": status["flags"],
        "disclaimer": "This project is a prototype and is not medical advice."
    })


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
