const Discord = require('discord.js');

var XD = [
    'https://i.imgur.com/IaXjAqx.gif', 
    'https://i.imgur.com/OE7lSSY.gif',
    'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif',
    'https://media1.tenor.com/images/b8d0152fbe9ecc061f9ad7ff74533396/tenor.gif'
  ];

module.exports = {
    name: 'kiss',
    description: "Kiss command",
    execute(message, args){
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let embed = new Discord.MessageEmbed()
        .setDescription(`${message.author} gave ${member} a kiss`).setColor("#03e8fc")
        .setImage(XD[Math.floor(Math.random() * XD.length)])
        message.channel.send(embed);
             } else {
            message.channel.send("Mention a user to kiss!")
        }
    }
}