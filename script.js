/* ═══════════════════════════════════
   RESET & ROOT VARIABLES
═══════════════════════════════════ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-primary:       #ffffff;
  --bg-secondary:     #f7f7f8;
  --bg-sidebar:       #202123;
  --text-primary:     #0d0d0d;
  --text-secondary:   #6e6e80;
  --text-sidebar:     #ececf1;
  --text-sidebar-muted: #8e8ea0;
  --border:           #e5e5e5;
  --border-sidebar:   #4d4d4f;
  --accent:           #10a37f;
  --user-avatar:      #7F77DD;
  --ai-avatar:        #10a37f;
  --input-bg:         #ffffff;
  --input-border:     #d9d9e3;
  --hover-sidebar:    #2a2b32;
  --active-sidebar:   #343541;
  --send-btn:         #0d0d0d;
}

/* Dark mode auto-detect */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary:     #343541;
    --bg-secondary:   #3e3f4b;
    --text-primary:   #ececf1;
    --text-secondary: #8e8ea0;
    --border:         #4d4d4f;
    --input-bg:       #40414f;
    --input-border:   #565869;
    --send-btn:       #ececf1;
  }
}

/* ═══════════════════════════════════
   BASE
═══════════════════════════════════ */
html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
}

.app {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* ═══════════════════════════════════
   SIDEBAR
═══════════════════════════════════ */
.sidebar {
  width: 260px;
  height: 100vh;
  background: var(--bg-sidebar);
  display: flex;
  flex-direction: column;
  padding: 8px;
  flex-shrink: 0;
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  overflow-y: auto;
}

.new-chat-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 8px;
  border: 1px solid var(--border-sidebar);
  background: transparent;
  color: var(--text-sidebar);
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  width: 100%;
  transition: background 0.15s;
  margin-bottom: 4px;
}
.new-chat-btn:hover {
  background: var(--hover-sidebar);
}

.sidebar-section {
  margin-top: 16px;
}

.sidebar-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-sidebar-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0 10px;
  margin-bottom: 4px;
}

.chat-item {
  padding: 9px 12px;
  border-radius: 8px;
  font-size: 13.5px;
  color: var(--text-sidebar);
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background 0.12s;
}
.chat-item:hover  { background: var(--hover-sidebar); }
.chat-item.active { background: var(--active-sidebar); }

.sidebar-bottom {
  margin-top: auto;
  border-top: 1px solid var(--border-sidebar);
  padding-top: 8px;
}

.user-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
}
.user-row:hover { background: var(--hover-sidebar); }

/* ═══════════════════════════════════
   AVATARS
═══════════════════════════════════ */
.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
}
.avatar.user-av { background: var(--user-avatar); color: #fff; }
.avatar.ai-av   { background: var(--ai-avatar);   color: #fff; }

.user-name {
  font-size: 14px;
  color: var(--text-sidebar);
  font-weight: 500;
}

/* ═══════════════════════════════════
   OVERLAY (mobile sidebar backdrop)
═══════════════════════════════════ */
.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
.overlay.show { display: block; }

/* ═══════════════════════════════════
   MAIN AREA
═══════════════════════════════════ */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  min-width: 0;
  background: var(--bg-primary);
}

/* ── Topbar ── */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
  background: var(--bg-primary);
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-btn {
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: background 0.12s;
}
.menu-btn:hover { background: var(--bg-secondary); }

.model-select {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 8px;
  transition: background 0.12s;
}
.model-select:hover { background: var(--bg-secondary); }

.topbar-actions {
  display: flex;
  gap: 6px;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.12s;
}
.icon-btn:hover { background: var(--bg-secondary); }

/* ── Messages ── */
.messages {
  flex: 1;
  overflow-y: auto;
  padding: 28px 0 12px;
  scroll-behavior: smooth;
}

.messages::-webkit-scrollbar       { width: 6px; }
.messages::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

.msg-wrapper {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
}

.msg {
  display: flex;
  gap: 16px;
  padding: 14px 0;
}

.msg:hover {
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 14px 12px;
  margin: 0 -12px;
}

.msg-avatar-wrap { flex-shrink: 0; }

.msg-content {
  flex: 1;
  min-width: 0;
}

.msg-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.msg-text {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.75;
  word-break: break-word;
}

.msg-text code {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  background: var(--bg-secondary);
  padding: 2px 7px;
  border-radius: 5px;
  border: 1px solid var(--border);
  color: #c7254e;
}

.msg-actions {
  display: flex;
  gap: 4px;
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.15s;
  flex-wrap: wrap;
}
.msg:hover .msg-actions { opacity: 1; }

.act-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: none;
  background: transparent;
  border-radius: 6px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.12s;
}
.act-btn:hover {
  background: var(--border);
  color: var(--text-primary);
}

/* ── Typing animation ── */
.typing {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-secondary);
  animation: blink 1.3s infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes blink {
  0%, 80%, 100% { opacity: 0.2; }
  40%           { opacity: 1;   }
}

/* ═══════════════════════════════════
   INPUT SECTION
═══════════════════════════════════ */
.input-section {
  flex-shrink: 0;
  padding: 12px 20px 20px;
  background: var(--bg-primary);
}

.input-inner {
  max-width: 760px;
  margin: 0 auto;
}

.input-box {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 14px;
  padding: 12px 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-box:focus-within {
  border-color: var(--accent);
  box-shadow: 0 2px 16px rgba(16, 163, 127, 0.12);
}

.attach-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.12s, background 0.12s;
}
.attach-btn:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}

textarea.chat-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
  resize: none;
  outline: none;
  min-height: 28px;
  max-height: 180px;
  line-height: 1.65;
  padding: 0;
}
textarea.chat-input::placeholder { color: var(--text-secondary); }

.send-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--send-btn);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: opacity 0.15s, transform 0.1s;
}
.send-btn:hover  { opacity: 0.8; transform: scale(1.05); }
.send-btn:active { transform: scale(0.95); }

.input-hint {
  font-size: 11.5px;
  color: var(--text-secondary);
  text-align: center;
  margin-top: 10px;
}

/* ═══════════════════════════════════
   RESPONSIVE — TABLET
═══════════════════════════════════ */
@media (min-width: 769px) and (max-width: 1100px) {
  .sidebar { width: 220px; }
}

/* ═══════════════════════════════════
   RESPONSIVE — MOBILE
═══════════════════════════════════ */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: translateX(-100%);
  }
  .sidebar.open {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.3);
  }

  .menu-btn  { display: flex; }
  .topbar    { padding: 10px 14px; }
  .input-section { padding: 10px 12px 16px; }
  .msg-wrapper   { padding: 0 12px; }
  .msg           { gap: 10px; }
  .msg-text      { font-size: 14px; }
}

@media (max-width: 480px) {
  .model-select span { display: none; }
  .msg-name { font-size: 13px; }
  .avatar   { width: 28px; height: 28px; font-size: 11px; }
}
