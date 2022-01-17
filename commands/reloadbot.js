const guildCreate = require("../events/client/guildCreate");
module.exports = {
    name: 'reloadbot',
    description: "realoads the bot",
    execute(client, message , args , Discord){
        if (message.member.permissions.has("ADMINISTRATOR")){
            guild = message.channel.guild
            guildCreate(client,Discord,guild);
            message.channel.send("Bot reloaded")
        } else {
            message.channel.send("you dont have permisions to reload the bot")
        }
    }
    
}