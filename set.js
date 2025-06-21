




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFZdThaeDVHYXk3VFpqOVJKUDhINkMrR3M4ZS9RTzF5aUFIM214M1VuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzl5Q2FJVE5ITjVsL00wMWt6MkNjTDlEVjFiQmluN2w2bHRJbEZoYVluTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTldhN0Q1NFBwR0pTbXk3MlpiY2Q2WUJ2OVRRR2xnUllicUljNFZ1RTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzeHlDbFY4YkVlSGY4SmpiSEc5cGN0dWxnRmdEaE9qVnhwR25RZk8waUZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQR0RrUnk5TDNWbTlTK0QwQUJwaXAyV0hJOE5DOXpNSlRtZmRzRUgvbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllURjhxazBxc1hpN2pPWW9oNFdrR256S3h4d3o5MHFUUWZqZll4M3hwMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05JSVlIVUJJMlJzTHZRSGZVV0M0RjB2dldpN1ZSYzcrY0JDdFNSc0JVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0lyMFBpQWUxNGRmYmFURkJHMDcvNzJJME1FQitsSHNVcExZcWpuNTVSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx4T1Z0S1F5dW0ySGZ2L1NQb2F6SkZuSDM1THpvOHRBd25Jd1l0QlF5c2UxK2RMdXFiTW9LL0YybDZEeHdTaElMbHJHemlja3dwYm15UUp5QjFyQ0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiS3dQTmNDOE41WjBsUlYwdXdkYm5BMld6amFMV3ZhTDJVK2NqdHpERmRpND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTg0MzYzODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkIyNTVFM0VBRkNGNzNFRjUwQkU3NDUzNkIzNjU2QUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDUzMDE3MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE4NDM2Mzg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU4OUU4RjAwMEU3RUJERjhDNDJEMzk2ODY2NDFDNDdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA1MzAxNzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlNWS1c2TVhFIiwibWUiOnsiaWQiOiIyNjM3MTg0MzYzODk6MjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNzI4NjQwNzA2MTUyMjc6MjVAbGlkIiwibmFtZSI6IkRlaXR5IE11ZGUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtTXhuUVE2ZkRid2dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imp1QkRZRnVickMxMjlDd0hqczdyVzZqMC9ZMHdhWmpuS2V5emdEMGRDRXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlIrM01NbUdNbkM0eDZMVE1BbHhSQUpZdDFlclNCZldCRU41Qzd5Vm13SWQvRUpxSk9IN1VkOGhUMGlkeVNRT2FSK1dRTncxN0N5UjEyaDlhVEFGeEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKaEVEZEg1WUlRaC9CV1VpU0hWM3FGYTU2bG1JSDU1QW9uc0VJeVhIQU81Vmd6NVJCTzdVWjVBOGxjdGtoMFpoU3kyUGZuWkQzbUdlajdOaHF5VzFCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxODQzNjM4OToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZN2dRMkJibTZ3dGR2UXNCNDdPNjF1bzlQMk5NR21ZNXluc3M0QTlIUWhNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1MzAxNjgsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKdS8ifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "263718436389",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Rollings",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Deity Mude',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  CHATBOT : process.env.CHATBOT || "yes",
                  AUTO_BIO : process.env.AUTO_BIO || "yes",
                  AUTO_REACT : process.env.AUTO_REACT || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
