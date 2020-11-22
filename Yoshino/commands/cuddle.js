const Discord = require('discord.js');

var XD2 = [
    'https://media.tenor.com/images/e90e0290b5e9025c790a3f6932477de3/tenor.gif',
    'https://media.tenor.com/images/853bb442dd8eae619c4a524ffad4261c/tenor.gif',
    'https://thumbs.gfycat.com/ShowyObedientCrane-max-1mb.gif'
  ];

module.exports = {
    name: 'cuddle',
    description: "Cuddle command",
    execute(message, args){
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.author} cuddled with ${member}  AWWW!`).setColor("RANDOM")
            .setImage(XD2[Math.floor(Math.random() * XD2.length)])
            message.channel.send(embed);
          } else {
            message.channel.send("Mention a user to cuddle!")
        }
    }
}