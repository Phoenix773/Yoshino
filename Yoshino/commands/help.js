const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "Help command",
    execute(message, args){
        let embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setDescription("`Command list 1: >kiss, >pat, >cuddle, >poke, >hug, >slap.`").setColor("#03e8fc")
        message.channel.send(embed);
    }
}