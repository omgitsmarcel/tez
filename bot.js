const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529959588154441730")
setInterval(function() {
channel.send(`Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel Marcel , Marcel** `);
}, 30)
})

client.login(process.env.BOT_TOKEN);