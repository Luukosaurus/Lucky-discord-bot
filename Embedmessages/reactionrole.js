module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("932313950828253244")
    const channel = guild.channels.cache.get("932393617727832105")
    const eventrole = guild.roles.cache.get("932397406610403459");
    const updaterole = guild.roles.cache.get("932397516396326992");
    const sneakpeakrole = guild.roles.cache.get("932397597342199818");
    const eventemoji = "🎪";
    const updateemoji = "🛠";
    const sneakpeakemoji = "👀";
    channel.messages.fetch().then(async (messages) => {
        const oldmessage = messages.first()
        if(oldmessage)
        {
            console.log("old")
        } else {
            console.log(oldmessage)
            await channel.bulkDelete(1); 
            let reactionroleembed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setDescription("Kies een role om hier meldingen van te ontvangen\n\n"
                    + `${eventemoji} om meldingen over events te krijgen\n`
                    + `${updateemoji} om meldingen over updates te krijgen\n`
                    + `${sneakpeakemoji} om meldingen over sneakpeaks te krijgen`)
            let messageEmbed = await channel.send({embeds: [reactionroleembed]});
            messageEmbed.react(eventemoji);
            messageEmbed.react(updateemoji);
            messageEmbed.react(sneakpeakemoji);
        }
        
    })
        client.on('messageReactionAdd', async (reaction, user) => {
            // if (reaction.message.partial) await reaction.message.fetch();
            // if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == "932393617727832105"){
                try{
                    if (reaction.emoji.name === eventemoji){
                        reaction.message.guild.members.cache.get(user.id).roles.add(eventrole)
                    }
                    if (reaction.emoji.name === updateemoji){
                        reaction.message.guild.members.cache.get(user.id).roles.add(updaterole)
                    }
                    if (reaction.emoji.name === sneakpeakemoji){
                        reaction.message.guild.members.cache.get(user.id).roles.add(sneakpeakrole)
                    }
                } catch {
                    channel.send("It looks like my role perms are insufficient. You can fix this by draging my role higher than the role i need to give")
                }
            } else return;
            
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            // if (reaction.message.partial) await reaction.message.fetch();
            // if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == "932393617727832105"){
                try{
                    if (reaction.emoji.name === eventemoji){
                        reaction.message.guild.members.cache.get(user.id).roles.remove(eventrole)
                    }
                    if (reaction.emoji.name === updateemoji){
                        reaction.message.guild.members.cache.get(user.id).roles.remove(updaterole)
                    }
                    if (reaction.emoji.name === sneakpeakemoji){
                        reaction.message.guild.members.cache.get(user.id).roles.remove(sneakpeakrole)
                    }
                } catch{
                    channel.send("It looks like my role perms are insufficient. You can fix this by draging my role higher than the role i need to give")
                }
            } else {
                return;
            }
        });
    
}