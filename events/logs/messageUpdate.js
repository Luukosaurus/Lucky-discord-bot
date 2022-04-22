module.exports = async (client,Discord,message,newmessage) =>{
    const logchannel = client.channels.cache.get("933466078145822720")
    if(message.author.bot) return;
    if(message.content.length > 1000 || newmessage.content.length > 1000 ) return;
    const changeMessageEmbed = new Discord.MessageEmbed()
        .setColor("#FFF700")
        .setTitle("chatlog")
        .setDescription(`Message changed in ${message.channel} of user ${message.author}\n old message \n"${message.content}" \n\n new message \n "${newmessage.content}"`) 
        logchannel.send({embeds:[changeMessageEmbed]})
}