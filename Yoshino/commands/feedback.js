

const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'feedback',
    description: "Feedback command",
    execute(message, args){
        var feedbackmsg = message.content.substr(">feedback ".length);
            let embed = new Discord.MessageEmbed()
            .setTitle(message.author.name)
            .setDescription(feedbackmsg).setColor("#03e8fc")
            client.guilds.cache.get('761081803892588555').channels.cache.get('779246269418962964').send(embed)
            //client.guilds.cache.find("id","761081803892588555").channels.find("name","bot-feedback").message.channel.send(embed)
    }
}