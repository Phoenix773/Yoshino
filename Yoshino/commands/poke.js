const Discord = require('discord.js');

var poke = [
    'https://media.tenor.com/images/6d227fd93656bd164985aad517a25c3f/tenor.gif',
    'https://i.imgur.com/CYxJyxQ.gif',
    'https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif'
  ]

module.exports = {
    name: 'poke',
    description: "Poke command",
    execute(message, args){
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.author} poked ${member}...`).setColor("#03e8fc")
            .setImage(poke[Math.floor(Math.random() * poke.length)])
            message.channel.send(embed);
          } else {
            message.channel.send("Mention a user to poke!")
        }
    }
}