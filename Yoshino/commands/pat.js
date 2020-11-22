const Discord = require('discord.js');

var PAT = [
    'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
    'https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif',
    'https://i.imgur.com/UWbKpx8.gif', 
    'https://i.imgur.com/4ssddEQ.gif'
  ];

module.exports = {
    name: 'pat',
    description: "Pat command",
    execute(message, args){
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.author} gave ${member} a pat on the head.`).setColor("#03e8fc")
            .setImage(PAT[Math.floor(Math.random() * PAT.length)])
            message.channel.send(embed);
             } else {
            message.channel.send("Mention a user to pat!")
        }
    }
}