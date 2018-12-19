const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
نحن بعيدون جداً من حيث المسافات والأميال :purple_heart: 
، ولكن يمكن للكلمات أن تؤثر فينا وتحرّك مشاعرنا :first_quarter_moon_with_face: 
، ويمكن للأفكار أن تجلب لنا الابتسامات. :speaking_head: 
حياكم سيرفر Point
                               [ https://discord.gg/xTRSaHM ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
