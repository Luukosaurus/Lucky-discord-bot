module.exports = {
    name: 'reactionrole',
    description: "Testing with reaction roles",
    async execute(client, message, args, Discord){
        const eventrole = message.guild.roles.cache.get("932397406610403459");
        const updaterole = message.guild.roles.cache.get("932397516396326992");
        const sneakpeakrole = message.guild.roles.cache.get("932397597342199818");
        const eventemoji = "🎪";
        const updateemoji = "🛠";
        const sneakpeakemoji = "👀";
        if (message.member.permissions.has("MANAGE_ROLES")){
            if(message.channel.id != "932393617727832105"){
                message.channel.send("reactionroles only works in reactionrole channel")
                return;
            }
            await message.channel.bulkDelete(2); 
            let reactionroleembed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Choos your collor")
                .setDescription("Kies een role om hier meldingen van te ontvangen\n\n"
                    + `${eventemoji} om meldingen over events te krijgen\n`
                    + `${updateemoji} om meldingen over updates te krijgen\n`
                    + `${sneakpeakemoji} om meldingen over sneakpeaks te krijgen`)
            let messageEmbed = await message.channel.send({embeds: [reactionroleembed]});
            messageEmbed.react(eventemoji);
            messageEmbed.react(updateemoji);
            messageEmbed.react(sneakpeakemoji);
        } else {
            const youCantAddReactionroleEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Je hebt niet de permisies om reactionroles toe te voegen.")

                message.channel.send({embeds: [youCantAddReactionroleEmbed]});
        }
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == "932393617727832105"){
                try{
                    if (reaction.emoji.name === eventemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventrole)
                    }
                    if (reaction.emoji.name === updateemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(updaterole)
                    }
                    if (reaction.emoji.name === sneakpeakemoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.add(sneakpeakrole)
                        }
                } catch {
                    message.channel.send("It looks like my role perms are insufficient. You can fix this by draging my role higher than the role i need to give")
                }
                
            } else return;
            
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == "932393617727832105"){
                try{
                    if (reaction.emoji.name === eventemoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(eventrole)
                        }
                        if (reaction.emoji.name === updateemoji){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(updaterole)
                        }
                        if (reaction.emoji.name === sneakpeakemoji){
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(sneakpeakrole)
                            }
                } catch{
                    message.channel.send("It looks like my role perms are insufficient. You can fix this by draging my role higher than the role i need to give")
                }
                
            } else {
                return;
            }
        });
    }
}