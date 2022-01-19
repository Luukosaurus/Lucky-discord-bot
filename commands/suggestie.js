module.exports = {
    name: 'suggestie',
    description: "make a suggestion in a channel",
    async execute(client, message, args, Discord,myGuildPrefixes){
        if(args.length == 0) return;
        const suggestchannel = message.guild.channels.cache.get("933410174910205952")
        const suggestEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setAuthor({ name: message.member.user.username , iconURL: message.member.displayAvatarURL()})
                .setTitle("Suggestie")
                .setDescription(args.join(" "))
        const suggestion = await suggestchannel.send({embeds:[suggestEmbed]})
        await suggestion.react("✅")
        await suggestion.react("❌")
    }
}