const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const ytdl = require("ytdl-core");
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("");


var PREFIX = ">";
var token = "";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', async message => {

let args = message.content.slice(PREFIX.length).trim().split(/ +/);
const command = args.shift().toLowerCase(); 



if (!client.commands.has(command)) return;
try {
    client.commands.get(command).execute(message, args);
}catch(error){
    console.error(error);
  }
  // Catch goes here if music command is deleted.
});


client.login(token);