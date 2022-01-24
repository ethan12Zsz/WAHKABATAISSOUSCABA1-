 
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const token = process.env.TOKEN;
const client = new Discord.Client
 console.log(`I am ready`)

client.on("guildMemberRemove", async member => {
  member.user.send("Tu as quitter le server ! issou RIP ton compte")
  member.user.send("Tu as quitter le server ! issou RIP ton compte")
  member.user.send("Tu as quitter le server ! issou RIP ton compte")
  member.user.send("Tu as quitter le server ! issou RIP ton compte")
  member.user.send("Tu as quitter le server ! issou RIP ton compte")
}); 


const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);




client.login("token");

