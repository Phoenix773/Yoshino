const Discord = require('discord.js');

var slap = [
    'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
    'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
    'https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif'
  ];

module.exports = {
    name: 'slap',
    description: "Slap command",
    execute(message, args){
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.author} slaped ${member} in the face!`).setColor("#03e8fc")
            .setImage(slap[Math.floor(Math.random() * slap.length)])
            message.channel.send(embed);
        } else {
            message.channel.send("Mention a user to slap!")
        }
    }
}