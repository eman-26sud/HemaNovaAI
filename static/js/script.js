:root {
  --bg: #020912;
  --bg-soft: #081725;
  --panel: rgba(12, 21, 31, 0.9);
  --panel-strong: #0b1723;
  --surface: #0f2235;
  --surface-alt: #142c40;
  --line: rgba(148, 178, 191, 0.22);
  --text: #edf6ff;
  --muted: #a3b7c4;
  --primary: #2ba7ff;
  --primary-strong: #1d8fe6;
  --teal: #44d7c9;
  --success: #7ce5a3;
  --warning: #ffc857;
  --danger: #ff6b6b;
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top, rgba(33, 92, 146, 0.22), transparent 35%),
    linear-gradient(180deg, #020912 0%, #010b14 100%);
  color: var(--text);
  font-family: "Inter", sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 10px;
  border-bottom: 1px solid var(--line);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #76d0ff);
  color: #021018;
  font-weight: 800;
}

.brand-text {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.brand-text small {
  color: var(--muted);
  font-size: 0.72rem;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
}

.main-nav {
  display: flex;
  gap: 22px;
  color: var(--muted);
  font-size: 0.95rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  padding: 56px 10px 30px;
}

.eyebrow {
  margin: 0 0 18px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  color: var(--teal);
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.2rem, 4vw, 4.2rem);
  line-height: 1.08;
  margin: 0 0 20px;
  letter-spacing: -0.06em;
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
  max-width: 640px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin: 28px 0 30px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: 14px;
  padding: 0 22px;
  font-weight: 600;
  border: 1px solid var(--line);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: 0 18px 30px rgba(38, 138, 225, 0.25);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.mini-stats {
  list-style: none;
  display: flex;
  gap: 28px;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.mini-stats li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--muted);
}

.mini-stats strong {
  font-size: 1.6rem;
  color: var(--text);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.device-frame {
  position: relative;
  width: min(100%, 440px);
  min-height: 550px;
  border-radius: 28px;
  border: 1px solid rgba(172, 218, 255, 0.18);
  background: linear-gradient(180deg, rgba(6, 18, 29, 0.97), rgba(2, 11, 17, 0.9));
  box-shadow: var(--shadow);
  padding: 18px 14px 20px;
  overflow: hidden;
}

.frame-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.9rem;
  padding: 8px 8px 18px;
}

.status-pill {
  color: var(--primary);
}

.signal {
  letter-spacing: 0.1em;
}

.panel-card {
  background: rgba(11, 17, 24, 0.9);
  border: 1px solid rgba(153, 180, 194, 0.2);
  border-radius: 20px;
  padding: 18px 18px 20px;
  min-height: 440px;
}

.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.icon-stack {
  display: flex;
  gap: 10px;
  color: var(--muted);
  font-size: 1.2rem;
}

.menu-btn {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
}

.panel-body h2 {
  margin: 0 0 18px;
  font-size: 2rem;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.metric-box {
  padding: 14px 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.metric-box span {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 6px;
}

.metric-box strong {
  font-size: 1.05rem;
}

.risk-box {
  margin-top: 18px;
  border-radius: 14px;
  padding: 12px 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(43, 167, 255, 0.08);
}

.risk-box span {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  margin-bottom: 6px;
}

.risk-box strong {
  font-size: 1.1rem;
}

.risk-moderate {
  background: rgba(255, 200, 87, 0.08);
  border-color: rgba(255, 200, 87, 0.28);
}

.info-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 30px 10px 8px;
}

.info-strip article,
.feature-card,
.results-card,
.cbc-form,
.about-content {
  background: rgba(10, 20, 28, 0.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.info-strip article {
  padding: 22px 20px;
}

.label {
  color: var(--teal);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.info-strip h3 {
  margin: 10px 0 0;
  font-size: 1.25rem;
}

.analysis-section {
  padding: 50px 10px 20px;
}

.section-heading {
  margin-bottom: 26px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.analysis-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  align-items: start;
}

.cbc-form {
  padding: 26px;
}

.field-row {
  display: grid;
  gap: 18px;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 18px;
}

label {
  display: block;
}

label span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

input,
select {
  width: 100%;
  min-height: 46px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 0 14px;
  outline: none;
}

input:focus,
select:focus {
  border-color: rgba(77, 170, 255, 0.8);
  box-shadow: 0 0 0 3px rgba(43, 167, 255, 0.12);
}

.full-width {
  width: 100%;
  margin-top: 10px;
}

.results-panel {
  min-height: 100%;
}

.results-card {
  padding: 24px 22px;
}

.status-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 18px rgba(43, 167, 255, 0.8);
}

.results-card h3 {
  font-size: clamp(1.8rem, 2.4vw, 2.5rem);
  margin: 18px 0 18px;
}

.risk-meter {
  width: 100%;
  height: 12px;
  background: rgba(255,255,255,0.06);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.04);
}

.risk-fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--success), var(--warning), var(--danger));
  transition: width 0.35s ease;
}

.risk-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  color: var(--muted);
}

.risk-row strong {
  color: var(--text);
  font-size: 1.25rem;
}

.summary-text {
  color: var(--muted);
  line-height: 1.7;
  margin: 20px 0 0;
}

.disclaimer-box {
  margin-top: 18px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.9rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 24px 10px 20px;
}

.feature-card {
  padding: 24px 22px;
}

.feature-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(43, 167, 255, 0.12);
  color: var(--primary);
  font-size: 1.35rem;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.feature-card p,
.about-content p {
  color: var(--muted);
  line-height: 1.8;
  margin: 0;
}

.about-section {
  padding: 60px 10px 0;
}

.left-aligned {
  text-align: left;
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  padding: 28px;
  margin-top: 20px;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: flex-start;
  justify-content: flex-start;
}

.about-badges span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

@media (max-width: 900px) {
  .hero,
  .analysis-grid,
  .about-content,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .main-nav {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 20px, 1200px);
  }

  .two-col,
  .info-strip {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 36px;
  }

  .hero-copy h1 {
    font-size: 2.6rem;
  }

  .cbc-form {
    padding: 18px;
  }
}
