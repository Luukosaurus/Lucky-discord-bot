module.exports = async (client,Discord) => {
    const ticketemoji = "📬";
    const guild = client.guilds.cache.get("932313950828253244")
    const ticketchannel = guild.channels.cache.get("932333831502069861")
    ticketchannel.bulkDelete(1);
    let ticketEmbed = new Discord.MessageEmbed()
        .setColor("#3042B1")
        .setTitle("Maak een ticket aan")
        .setDescription("Klik op de emoji om een ticket aan te maken ")
    let messageEmbed = await ticketchannel.send({embeds: [ticketEmbed]});
    messageEmbed.react(ticketemoji);
    client.on("messageReactionAdd", async (reaction,user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == "932333831502069861"){
            if (reaction.emoji.name === ticketemoji){
                reaction.users.remove(user.id)
                const channel = await guild.channels.create(`ticket: ${user.tag}`)
                channel.setParent("932610810574934017")
                channel.permissionOverwrites.edit(guild.id,{
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                })
                channel.permissionOverwrites.edit(user,{
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                })
                const ticketOwner = user
                const ticketOpenEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Bedankt voor het contacteren van support stel hier je vraag ");
                const ticketMessage = await channel.send({embeds:[ticketOpenEmbed]})
                try{
                    await ticketMessage.react("🔒")
                    await ticketMessage.react("🚫")
                } catch (err){
                    throw err;
                }
                const collector = ticketMessage.createReactionCollector((reaction,user)=> 
                  guild.members.cache.find((member)=> member.id === user.id).hasPermission("ADMINISTRATOR"),
                  {dispose: true }
                );
                //console.log(guild.members.cache.find((member)=> member.id === user.id))
                collector.on('collect', (reaction,user) => {
                    if (!user.bot){
                        const member = guild.members.cache.get(user.id)
                        if (member.permissions.has("MANAGE_CHANNELS")){
                            switch (reaction.emoji.name){
                                case "🔒":
                                    channel.permissionOverwrites.edit(ticketOwner,{SEND_MESSAGES: false})
                                    break;
                                case "🚫":
                                    channel.send("kanaal wordt verwijdert")
                                    function deleteIfCan(){
                                        if(guild.channels.cache.get(channel.id) !== undefined){
                                            channel.delete()
                                        }
                                    }
                                    setTimeout(()=> deleteIfCan(), 10000);
                                    break;
                            }
                        }
                        
                    }
                })
            }
        }
    })
}