module.exports = async (client,Discord,message) =>{
    const logchannel = client.channels.cache.get("933466078145822720")
    if(!message.author.bot){
        if(message.attachments.toJSON()[0] != null){
            const deleteMessageEmbed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("chatlog")
                .setDescription(`Message deleted in ${message.channel} of user ${message.author}\n\n "${message.content}" `)
                .setImage(message.attachments.toJSON()[0]["url"]) 
                logchannel.send({embeds:[deleteMessageEmbed]})
        } else {
            const deleteMessageEmbed = await new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("chatlog")
                .setDescription(`Message deleted in ${message.channel} of user ${message.author}\n\n "${message.content}" `) 
                logchannel.send({embeds:[deleteMessageEmbed]})
        }
        
        if(message.attachments.toJSON()[1] != null){
            i = 0
            logchannel.send("there are multiple images attached")
            message.attachments.forEach(attachment => {
            // do something with the attachment
            const url = attachment.url;
            i++
            logchannel.send("picture" + i)
            logchannel.send(url)
            });
        }
    }
}