const fs = require('fs');
module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("932313950828253244")
    const lockemoji = "🔒"
    const closeemoji = "🚫"
    client.on("messageReactionAdd", async (reaction,user) => {
        const channel = reaction.message.channel
        const ticketOwner = guild.members.cache.get(user.id)
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        //console.log(ticketOwner)
        // if(ticketOwner.roles.cache.get("932316115240091730") || ticketOwner.roles.cache.get("932318004975390742") || ticketOwner.roles.cache.get("932318093206765578") || ticketOwner.roles.cache.get("933380061707513856") ){
            if (!reaction.message.guild) return;
            if (reaction.message.channel.parent.id == "932610810574934017" || reaction.message.channel.parent.id == "954338585530761247"){
                if (reaction.emoji.name === closeemoji){
                    channel.send("kanaal wordt verwijdert")
                    function deleteIfCan(){
                        if(guild.channels.cache.get(channel.id) !== undefined){
                            channel.delete()
                            //transcriptchannel.send({embeds:[transEmbed]})
                        }
                    }
                    const logchannel = client.channels.cache.get("933466078145822720")
                    const transcriptchannel = client.channels.cache.get("938562479418667050")
                    const ticketLogEmbed = new Discord.MessageEmbed()
                    .setColor("#999999")
                    .setTitle("ticketlog")
                    .setDescription(`${channel.name} gesloten door ${user}`)
                    logchannel.send({embeds:[ticketLogEmbed]})
                    var text = "berichten \n"
                    await channel.messages.fetch().then(messages => {
                        messages = messages.reverse()
                        messages.forEach(message => {
                            const timestamp = message.createdTimestamp
                            const d = new Date(timestamp);
                            const date = "date:" + d.getDay() + "-" + d.getMonth()  + "-" + d.getUTCFullYear()  + " time:" + d.getHours() + "-" + d.getMinutes();
                            text += `${date} user:${message.author}: ${message.content.toString()} \n`
                        })
                    })
                    const transEmbed = new Discord.MessageEmbed()
                    .setColor("#999999")
                    .setTitle(channel.name)
                    .setDescription(text)
                    setTimeout(()=> deleteIfCan(), 10000);
                }
                if(ticketOwner.roles.cache.get("932316115240091730") || ticketOwner.roles.cache.get("932318004975390742") || ticketOwner.roles.cache.get("932318093206765578") || ticketOwner.roles.cache.get("933380061707513856") ){
                    if (reaction.emoji.name === lockemoji){
                        reaction.users.remove(user.id)
                        if(!channel.permissionsFor(channel.guild.roles.everyone).has("SEND_MESSAGES")){
                            channel.permissionOverwrites.edit(channel.guild.roles.everyone,{SEND_MESSAGES: true})
                            channel.send("kanaal is niet meer op slot")
                        } else {
                            channel.permissionOverwrites.edit(channel.guild.roles.everyone,{SEND_MESSAGES: false})
                            channel.send("kanaal is op slot")
                        }
                    }
                }
            }
        //}
        
    })
}