module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("932313950828253244")
    const ruleschannel = guild.channels.cache.get("932323246836166686")
    ruleschannel.bulkDelete(1);
    const discordRegelsEmbed = new Discord.MessageEmbed()
        .setColor("#3042B1")
        .setTitle("Discord regels")
        .setThumbnail(guild.iconURL())
        .setDescription(`📜┃Dit zijn de regels waar je je aan moet houden in de discord server. \n
        -Het is niet toegestaan om te schelden spammen of dergelijken. Dit geldt ook voor spraak kanalen.
        -Het verspreidden van ongepaste(NSFW) foto's of videos is niet toegestaan.
        -Je mag niet adverteren dit geldt voor self promotie of promotie van anderen.
        -Het is niet de bedoeling dat je onnodig staff tagt(tag alleen bij tijdsgebonden situaties)`)
        ruleschannel.send({embeds:[discordRegelsEmbed]});
}