const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_21_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjl4aVBCVTFwbXlIRWZnWGx5NnJMeFF1MWJod3RyMGdvbjFueUZnR2g0QUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzUwNTAzMTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyRkVFMTcwOTJERDM0MUM1QzZCRDg2RUIwRUJBQTE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjcwMjg3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1SUNnNGV1YVJiQ3NKdzNoYnFGWWF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiMjkyNzJiLTNlZjMtNGM3Mi1iY2IwLTg4MWMxNGU1YzQ4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyMzcsXG4gICAgICA1NyxcbiAgICAgIDc3LFxuICAgICAgNTQsXG4gICAgICAxNDAsXG4gICAgICA0MSxcbiAgICAgIDE3NyxcbiAgICAgIDE4LFxuICAgICAgNjgsXG4gICAgICAxNCxcbiAgICAgIDE5NyxcbiAgICAgIDEwMyxcbiAgICAgIDU4LFxuICAgICAgMTAzLFxuICAgICAgMCxcbiAgICAgIDI0MyxcbiAgICAgIDIxLFxuICAgICAgMTQ5LFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDM2LFxuICAgICAgMTY2LFxuICAgICAgOTksXG4gICAgICAxMDgsXG4gICAgICA4OCxcbiAgICAgIDcxLFxuICAgICAgMTQ0LFxuICAgICAgMTI4LFxuICAgICAgMTEsXG4gICAgICAxNTEsXG4gICAgICAxODAsXG4gICAgICA2OCxcbiAgICAgIDE1OSxcbiAgICAgIDMsXG4gICAgICAxNzIsXG4gICAgICAyNDAsXG4gICAgICAxNjksXG4gICAgICA2OCxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdCUkZKVEZOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTA1MDMxMjo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9MRCAgS0lORyBCSU5UVSBCQkhcIixcbiAgICBcImxpZFwiOiBcIjE5MjEzNTgzMTc5Nzg1NDo5M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWGZyKzRHRUpQbG03b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1RZFJQTkxDczF0U0gwZm5heUZVUUg3VFc2Z0lvNXBUQlNpeENWNkV6MDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibmNPMk1NN2hQUGl1RVFlWFAyMlYzeUxvblpXZUNvalZnaFhpZ0Q2cmFPRUVpTElYd0psczU2MjNDMk8zdXRqUmFmSUh5ZWpLR0pqVDJnV0pSeVNFQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidlU4eHRiZ0QvNjlvNk80Sks1K1lZT3FKWTdBc2R6VGp5M2RnRm5zR0VUdXVmcGNZdzFrdXJTM1RnYm1KNmlNZHV4bXhwVk5hanZ1Z3J6MlZkakRQQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzUwNTAzMTI6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjcwMjg3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJBOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkE5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiajRPVXI1cUZkR3Q5YnZtVktPc2V6dWRVZ1BlZEhFSWlWbllqNjRXTEFUUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQyMDgxNzY1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI2OTEzMTQ5NDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
