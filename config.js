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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349067546843";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_30_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDc2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImkxQnF2ejlWVzIweE5rVzlGNVFUeS9XUDBuZi9pSGJXRXFTSFRibHlkVkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2NzU0Njg0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzdBRUI2NkVDMzc1MTcxNEI1NjVGMUE5NjcwNDFBNjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzQ5NDQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlR3Y0Y3THVlU2ZpUEp0bGV3ODdlU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjNkMTZlNGYtZWU2ZC00YjhhLTgzYjctN2NhODcyMTdhMGU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDIyMCxcbiAgICAgIDE3LFxuICAgICAgNTUsXG4gICAgICAxNDUsXG4gICAgICAyMjgsXG4gICAgICAxNixcbiAgICAgIDE3NixcbiAgICAgIDIxNCxcbiAgICAgIDEzMSxcbiAgICAgIDQ5LFxuICAgICAgMjM4LFxuICAgICAgMjM4LFxuICAgICAgODAsXG4gICAgICAyMjgsXG4gICAgICAyNyxcbiAgICAgIDUyLFxuICAgICAgMjA4LFxuICAgICAgMjcsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMjI1LFxuICAgICAgMzcsXG4gICAgICAxODMsXG4gICAgICAxOTMsXG4gICAgICAzNSxcbiAgICAgIDE5NCxcbiAgICAgIDEwOCxcbiAgICAgIDMwLFxuICAgICAgMjEwLFxuICAgICAgMjMyLFxuICAgICAgMTk5LFxuICAgICAgMjQ4LFxuICAgICAgMTE5LFxuICAgICAgMzAsXG4gICAgICAxMTMsXG4gICAgICAzNyxcbiAgICAgIDEyMCxcbiAgICAgIDE4OSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4QVZETFJENlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NzU0Njg0Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDk4NTI4NDgzNTM0ODU6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR05rdDRERUw3TTRia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNicFlwWU9QSEZYY3lsLzF0eFg3N0JzVWhvM0lsOEN3TFQ3SVZoZUE3SFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicjg0WkZOekNnKy85NVNUblU3VXpmNGdOZmZnNElzU2ZIZ1VmWmE3Qzhlc1g4blBjMEVnMnZ5OVJVUnJzRGdZV2owWTFmdDRKdk9QUDVpU1N4UzI1Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHpiaHhmKytTWEErb0RkQXhmeGoxeW5FZFd5cGNoQytXdm0rNy9Sb2x3QzArd3NjTG1FeWhZWnR1R1prYmpKZmJKRXFUbmRKeGlmYXN6bTlUZ0FIaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NzU0Njg0Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTc0OTQ0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdpQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2lDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYkdBYUVaQ216TVgwOE5Td2FGVkZWekt3UmtVTmhFZ1ZQUXNYL3JMNU5OND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDAyNzM1MjI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Benita",


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
