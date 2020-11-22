const Discord = require('discord.js');

var hugcmd = [
    'https://i.imgur.com/CZydgXw.gif',
    'https://i.imgur.com/9LSJuWM.gif',
    'https://i.imgur.com/LFHntTL.gif',
    'https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif',
    'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif'
];

module.exports = {
    name: 'hug',
    description: "Hug command",
    execute(message, args){
        if (message.mentions.members.size == 1) {
            let member = message.mentions.members.first()
            let embed = new Discord.MessageEmbed()
            .setDescription(`${message.author} gave ${member} a big hug!`).setColor("#03e8fc")
            .setImage(hugcmd[Math.floor(Math.random() * hugcmd.length)])
            message.channel.send(embed);
        } else {
            message.channel.send("Mention a user to hug!")
        }
    }
}