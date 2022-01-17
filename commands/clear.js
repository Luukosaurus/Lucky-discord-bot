module.exports = {
    name: 'clear',
    description: "clear a amount of messages",
    async execute(client, message, args , Discord){
        if (message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.reply(`try again stupid1`);
            if(isNaN(args[0])) return message.reply(`try again stupid2`);
            if(args[0] > 100) return message.reply(`try again stupid3`);
            if(args[0] < 1) return message.reply(`try again stupid4`);
            //await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            await message.channel.bulkDelete(+args[0]);
            //})
        } else {
            const youCantClearEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Je hebt niet de permissies om berichten te verwijderen")

                message.channel.send({embeds: [youCantClearEmbed]});
        }
    }
}