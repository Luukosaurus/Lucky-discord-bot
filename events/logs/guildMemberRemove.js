module.exports = async (client,Discord,member) =>{
    const logchannel = client.channels.cache.get("933466078145822720")
        const leftLogEmbed = new Discord.MessageEmbed()
        .setColor("#999999")
        .setTitle("leftlog")
        .setDescription(`${member} left`)
        logchannel.send({embeds:[leftLogEmbed]})
}