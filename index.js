const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS","GUILD_MESSAGE_REACTIONS","GUILD_PRESENCES","GUILD_INTEGRATIONS"] }, {partials: ["MESSAGE", "CHANNEL" , "REACTION"]});

// const fs = require('fs');

// const memberCounter =  require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events - new Discord.Collection();

["command_handler", "event_handler"].forEach(handler =>{
    require(`./handlers/${handler}`)(client ,Discord);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);
 
//     client.commands.set(command.name, command);
// }


// client.once("ready", () =>{
//     console.log("hello world");
//     memberCounter(client);
// })


// client.on('message', message =>{
//     if(!message.content.startsWith(prefix) || message.author.bot) return;
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
//     const c = client.commands.get(command)
//     if (c != undefined){
//         c.execute(message, args , Discord , client);
//     }
// })


// client.on('guildMemberAdd', guildMember =>{
//     let welcomerole = guildMember.guild.roles.cache.find(role => role.name === "Member");
//     guildMember.roles.add(welcomerole);
//     guildMember.guild.channels.cache.get("929828175943450644").send(`welcome <@${guildMember.user.id}>`);
// })

//last line
client.login(process.env.TOKEN);
//old login tokken
//client.login('OTI5NTU0NzI4NjA4NzMxMTQ2.YdpBTQ.CkV75AiyXhbLwaBa3ZL5ATb4nTI');