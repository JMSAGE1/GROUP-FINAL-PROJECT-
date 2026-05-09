/* ══ TOKENS ══ */
:root {
  --bg:           #f4f0eb;
  --surface:      #fffefb;
  --border:       #e0d9d0;
  --border-hover: #c9bfb4;

  --text:         #2c2420;
  --text-mid:     #6b5d56;
  --text-muted:   #a89a92;

  /* Header */
  --header-bg:    #2c2420;
  --header-text:  #f4f0eb;

  /* Tab palette */
  --tab-all:      #b05c3a;
  --tab-nature:   #4a7a52;
  --tab-sunsets:  #c28a3a;
  --tab-people:   #7a5272;
  --tab-city:     #3a5e7a;

  /* Card strip colours */
  --strip-nature:  #4a7a52;
  --strip-sunsets: #c28a3a;
  --strip-people:  #7a5272;
  --strip-city:    #3a5e7a;
  --strip-default: #a09080;

  --font: 'Outfit', system-ui, sans-serif;
  --r-sm: 6px;
  --r-md: 10px;
  --r-lg: 14px;
  --r-pill: 999px;
}

/* ══ RESET ══ */
*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

/* ══ HEADER ══ */
.header {
  background: var(--header-bg);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.header-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--header-text);
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.header-icon-wrap:hover { opacity: 1; }
.header-icon { font-size: 18px; }

.header-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--header-text);
  letter-spacing: 0.4px;
  text-align: center;
  flex: 1;
}

/* ══ CONTAINER ══ */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 28px 24px 64px;
}

/* ══ SEARCH ══ */
.search-wrapper {
  position: relative;
  margin-bottom: 22px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: var(--text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 11px 16px 11px 42px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  font-family: var(--font);
  font-size: 14px;
  font-weight: 300;
  color: var(--text);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input::placeholder { color: var(--text-muted); }

.search-input:focus {
  outline: none;
  border-color: var(--tab-all);
  box-shadow: 0 0 0 3px rgba(176,92,58,0.1);
}

/* ══ TABS ══ */
.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tab {
  padding: 7px 18px;
  border: none;
  border-radius: var(--r-pill);
  font-family: var(--font);
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  color: #fff;
  opacity: 0.55;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  letter-spacing: 0.2px;
}

.tab:hover           { opacity: 0.85; transform: translateY(-1px); }
.tab.active          { opacity: 1; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,0.18); }

.tab-all     { background: var(--tab-all); }
.tab-nature  { background: var(--tab-nature); }
.tab-sunsets { background: var(--tab-sunsets); }
.tab-people  { background: var(--tab-people); }
.tab-city    { background: var(--tab-city); }

/* ══ RESULT COUNT ══ */
.result-count {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 20px;
  min-height: 18px;
  letter-spacing: 0.3px;
}

/* ══ GALLERY ══ */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

/* ══ GALLERY CARD ══ */
.gallery-item {
  background: var(--surface);
  border-radius: var(--r-md);
  overflow: hidden;
  border: 1.5px solid var(--border);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
  animation: cardIn 0.35s ease both;
  position: relative;
}

/* Coloured top strip per category */
.gallery-item::before {
  content: '';
  display: block;
  height: 3px;
  background: var(--strip-default);
}

.gallery-item[data-category="nature"]::before      { background: var(--strip-nature); }
.gallery-item[data-category="sunsets"]::before     { background: var(--strip-sunsets); }
.gallery-item[data-category="people"]::before      { background: var(--strip-people); }
.gallery-item[data-category="city lights"]::before { background: var(--strip-city); }

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(44,36,32,0.13);
  border-color: var(--border-hover);
}

.gallery-item img {
  width: 100%;
  height: 185px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover img { transform: scale(1.03); }

.gallery-item-info {
  padding: 11px 13px 13px;
}

.gallery-item-caption {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gallery-item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gallery-item-badge {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 2px 9px;
  border-radius: var(--r-pill);
}

.badge-nature  { background: #dff0e2; color: #2d5e35; }
.badge-sunsets { background: #faebd4; color: #7a4e10; }
.badge-people  { background: #eedff5; color: #5a2a6a; }
.badge-city    { background: #d8eaf5; color: #1a3e5a; }

.gallery-item-num {
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 400;
}

/* Card entrance animation */
@keyframes cardIn {
  from { opacity:0; transform:translateY(16px); }
  to   { opacity:1; transform:translateY(0); }
}

.gallery-item:nth-child(1) { animation-delay:0.04s; }
.gallery-item:nth-child(2) { animation-delay:0.08s; }
.gallery-item:nth-child(3) { animation-delay:0.12s; }
.gallery-item:nth-child(4) { animation-delay:0.16s; }
.gallery-item:nth-child(5) { animation-delay:0.20s; }
.gallery-item:nth-child(6) { animation-delay:0.24s; }
.gallery-item:nth-child(n+7) { animation-delay:0.28s; }

/* ══ EMPTY STATE ══ */
.empty-state {
  text-align: center;
  padding: 56px 20px;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.empty-icon { font-size: 44px; opacity: 0.3; margin-bottom: 12px; }

.empty-text {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-muted);
}

/* ══ ADD IMAGE FORM ══ */
.form-card {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--r-lg);
  padding: 28px 28px 24px;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

/* Terracotta top accent */
.form-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--tab-all), var(--tab-sunsets), var(--tab-people));
}

.form-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 20px;
  padding-top: 2px;
}

.form-group { margin-bottom: 15px; }

.form-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 10px 13px;
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: var(--r-sm);
  font-family: var(--font);
  font-size: 13px;
  font-weight: 300;
  color: var(--text);
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
}

.form-input::placeholder { color: var(--text-muted); }

.form-input:focus {
  outline: none;
  border-color: var(--tab-all);
  background: var(--surface);
  box-shadow: 0 0 0 3px rgba(176,92,58,0.08);
}

.form-select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='%23a89a92' stroke-width='1.4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 13px center;
  padding-right: 36px;
}

.form-btn {
  width: 100%;
  padding: 12px;
  background: var(--header-bg);
  color: var(--header-text);
  border: none;
  border-radius: var(--r-sm);
  font-family: var(--font);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
  margin-top: 6px;
  transition: background 0.2s, transform 0.15s;
}

.form-btn:hover  { background: #4a3c36; transform: translateY(-1px); }
.form-btn:active { transform: translateY(0); }

.form-msg {
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  min-height: 18px;
  font-weight: 400;
}

.form-msg.success { color: var(--tab-nature); }
.form-msg.error   { color: #b04030; }

/* ══ RESPONSIVE ══ */
@media (max-width: 600px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    gap: 10px;
  }

  .gallery-item img { height: 140px; }

  .tabs { gap: 6px; }
  .tab  { padding: 6px 14px; font-size: 12px; }

  .container { padding: 20px 16px 48px; }

  .form-card { padding: 22px 18px 18px; }
}
