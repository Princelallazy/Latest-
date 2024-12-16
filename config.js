//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2347077816250";
global.sudo = process.env.SUDO || "2347077816250";
global.owner = process.env.OWNER_NUMBER || "2347077816250";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9seFZwSUJHRmNoM3E4NlFqS3UzaXNKTE5zcDkyZlYvV0ZsSyswNFhsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVR2R28yRHB2N25Qc3FuWW9ZbkFZQzNKR09aYUI3V3lHZFdTUmVDNnBqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTlArdmcwU29Qd2RnZzhST1NTZ083WjRTL3hOZzN6NnkzOHhzMkFZV0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ajJXWU0rQjlsMHJTcUg3OUNWVnpDRDRicHVTOC9icEVDRCtkOUp1aHhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBdnNFcks3dzJiNnVkYm9BZnhQT3AzMWdNMmR3Vm9sUTVUTEtBSVU0MU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE5NXN4SXBTVGZXRkVWRzFXVmJMaEhBakF3eG5wYUZBOUZyejVNQ2x5emc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpxWnR0UEh4RHRicSsyVGVZK1VvSGNyUTVTamJ2c0hYNEJ5cWdKdU1IVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickl3UUtiV0JnRHZjUWQ2c3M4NHBlNWhWNXlTSTVVb0ZxT3p0em0xTzhXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImViYzhaejFaUzB0SG9XRStJNU4veUp4ckpWYndIdXB2TVppZU5RZWpFcHpZTkxiQ1hVNEx5aG5EQUo0R2RYbWJ6WEhDWVJ5M1Y0VHBCTldMRkkzRWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJhYXNwRU1iY2h5b2lrSEpTMGhGbTJQUzh5aHZtTDdxN1Z1RWRiTjZKMzhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2RWsxTFYwMFJTV1VKNjE4QVloQjFBIiwicGhvbmVJZCI6IjExYzMwZWJhLWUzM2EtNDk4NS1hNGQ1LWM5YTYzMWM4OGU3ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTDIwWVkvUkx3bWdocjNhSGFxVUwweE9WOU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2VaZ09tcFBBQVFKbG5GSEVnZGUxMElCK013PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlGS0tXWlFGIiwibWUiOnsiaWQiOiIyMzQ3MDc3ODE2MjUwOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlIFJlYWwgVmlzaW9uIE9mIFNoYXJwIEJsYWRlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJek14ZUFGRU5iUWdMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWQ2pHL0Q5TExPbFk3a3RMN0hESGloYjd0eXdVelVjYm93SEk2eGc5WlVVPSIsImFjY291bnRTaWduYXR1cmUiOiJEVThXenc1ekNIQ0k5bjdCZHZ4MlFKc09WaTR2M0QrMWpDWndub1RzOEpMb00xUE94RHpmbHdyRlorTW1lQU5SVkJENVUxYzRtYy83d0hiZ1VRSE9CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRWt5ZE1jcXlGdE9YYk5DS3Z3NDJrNGd1dUpCVmd1Qi9nbGNUTEFEK01SYWJWNjRrTHJ1ZTVrSk1QZzhjL3VQUTE3NnhlUlJ5YVpnSUF1cVFzYnBkZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc3ODE2MjUwOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlFveHZ3L1N5enBXTzVMUyt4d3g0b1crN2NzRk0xSEc2TUJ5T3NZUFdWRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDM1NTA0NX0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
