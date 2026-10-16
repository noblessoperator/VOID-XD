const settings = {
  // ════════════════════════════════════════════════════
  //    🥷 CONFIGURATION DE TON BOT — REMPLIS ICI
  // ════════════════════════════════════════════════════

  packname: '𝗩𝗢𝗜𝗗 𝗫𝗗',          // Nom du pack sticker
  author: '𝗩𝗢𝗜𝗗 𝗖𝗧𝗢',               // Ton nom
  botName: "𝗩𝗢𝗜𝗗 𝗫𝗗 ",           // Nom du bot affiché
  botOwner: '𝗩𝗢𝗜𝗗 𝗫𝗗',             // Ton vrai nom
  menuOwner: 'ѵօíժ cԵօ',
  developer: 'ѵօíժ cԵօ',

  // ⚠️ Ton numéro WhatsApp SANS le + (ex: 224621000000)
  ownerNumber: process.env.OWNER_NUMBER || '50937597924',

  giphyApiKey: process.env.GIPHY_API_KEY || '',
  commandMode: "public",               // "public" ou "private"
  maxStoreMessages: 20,
  storeWriteInterval: 10000,
  description: "Bot WhatsApp multifonctions.",
  version: "2.0.0",
  commandCount: 148,

  // Ton lien GitHub (optionnel)
  updateZipUrl: "https://github.com/mohamedsoumahv99-bot/VARNOX-XD-V2/archive/refs/heads/main.zip",

  // URL du panneau — auto-détection Render / Railway / Vercel / fallback
  pairApiUrl: process.env.RENDER_EXTERNAL_URL
    ? process.env.RENDER_EXTERNAL_URL
    : process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.PANEL_URL
    || "https://varnox-xd-v2.onrender.com",
};

module.exports = settings;
