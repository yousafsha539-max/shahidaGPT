// ═══════════════════════════════════
//  ELEMENTS
// ═══════════════════════════════════
const menuBtn    = document.getElementById('menuBtn');
const sidebar    = document.getElementById('sidebar');
const overlay    = document.getElementById('overlay');
const chatInput  = document.getElementById('chatInput');
const sendBtn    = document.getElementById('sendBtn');
const messages   = document.getElementById('messages');
const msgWrapper = document.getElementById('msgWrapper');
const newChatBtn = document.getElementById('newChatBtn');
const typingMsg  = document.getElementById('typingMsg');

// ═══════════════════════════════════
//  SIDEBAR TOGGLE (Mobile)
// ═══════════════════════════════════
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}

// ═══════════════════════════════════
//  CHAT ITEM SELECTION
// ═══════════════════════════════════
document.querySelectorAll('.chat-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Mobile par sidebar band karo
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  });
});

// ═══════════════════════════════════
//  TEXTAREA AUTO-RESIZE
// ═══════════════════════════════════
chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 180) + 'px';
});

// ═══════════════════════════════════
//  SEND ON ENTER (Shift+Enter = new line)
// ═══════════════════════════════════
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

sendBtn.addEventListener('click', sendMessage);

// ═══════════════════════════════════
//  SEND MESSAGE FUNCTION
// ═══════════════════════════════════
function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // User message banana
  const userMsg = createUserMessage(text);
  msgWrapper.insertBefore(userMsg, typingMsg);

  // Input saaf karo
  chatInput.value = '';
  chatInput.style.height = 'auto';

  // Neeche scroll karo
  scrollToBottom();

  // Typing indicator dikhao
  typingMsg.style.display = 'flex';
  scrollToBottom();
}

// ═══════════════════════════════════
//  CREATE USER MESSAGE ELEMENT
// ═══════════════════════════════════
function createUserMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'msg';
  msg.innerHTML = `
    <div class="msg-avatar-wrap">
      <div class="avatar user-av">AK</div>
    </div>
    <div class="msg-content">
      <div class="msg-name">Ali Khan</div>
      <div class="msg-text">${escapeHTML(text)}</div>
      <div class="msg-actions">
        <button class="act-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/>
          </svg>
          Edit
        </button>
      </div>
    </div>
  `;
  return msg;
}

// ═══════════════════════════════════
//  NEW CHAT BUTTON
// ═══════════════════════════════════
newChatBtn.addEventListener('click', () => {
  // Purane messages remove karo (typing indicator chod kar)
  const allMsgs = msgWrapper.querySelectorAll('.msg:not(#typingMsg)');
  allMsgs.forEach(m => m.remove());

  // Typing indicator chupao
  typingMsg.style.display = 'none';

  // Input focus karo
  chatInput.focus();

  // Mobile sidebar band karo
  if (window.innerWidth <= 768) {
    closeSidebar();
  }
});

// ═══════════════════════════════════
//  SCROLL TO BOTTOM
// ═══════════════════════════════════
function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

// ═══════════════════════════════════
//  HTML ESCAPE (XSS se bachao)
// ═══════════════════════════════════
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ═══════════════════════════════════
//  WINDOW RESIZE — sidebar handle
// ═══════════════════════════════════
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
});
