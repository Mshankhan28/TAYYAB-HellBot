// ✅ MegaTron Bot Stylish Configuration – by shankhansk ❦ ✓

const ownerNumber = require('./Owner/owner'); // 🔗 Example: ['923092818209']

const config = {
  // 👑 Owner Info
  ownerNumber,                          // 🔹 Array of Owner shankhansk
  ownerName: '𓆩 shankhansk❦︎𓆪',              // 🔹 Displayed in Greetings
  botName: '🤖 𝗠𝗘𝗚𝗔𝐓𝐑𝐎𝐍 𝑩𝑶𝑻 ⚡',           // 🔹 Bot Display Name
  signature: '> shankhansk❦ ✓',               // 🔹 Footer on Bot shan
  youtube: 'https://www.youtube.com/@SHAN-KHAN-SK-MODS', // 🔹 Optional YouTube

  // ⚙️ Feature Toggles
  autoTyping: false,        // ⌨️ Fake Typing
  autoReact: false,         // 💖 Auto Emoji Reaction
  autoStatusView: false,    // 👁️ Auto-View Status
  public: true,             // 🌍 Public or Private Mode
  antiLink: false,          // 🚫 Delete Links in Groups
  antiBug: false,           // 🛡️ Prevent Malicious Crashes
  greetings: true,          // 🙋 Welcome/Farewell Messages
  readmore: false,          // 📜 Readmore in Long Replies
  ANTIDELETE: true          // 🗑️ Anti-Delete Messages
};

// ✅ Register owner(s) globally in WhatsApp JID format
global.owner = (
  Array.isArray(ownerNumber) ? ownerNumber : [ownerNumber]
).map(num => num.replace(/\D/g, '') + '@s.whatsapp.net');

// ⚙️ Export Settings Loader
function loadSettings() {
  return config;
}

module.exports = { loadSettings };
