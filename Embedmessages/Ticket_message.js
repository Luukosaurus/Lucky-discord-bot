module.exports = async (client,Discord) => {
    const ticketemoji = "📬";
    const guild = client.guilds.cache.get("932313950828253244")
    const ticketchannel = guild.channels.cache.get("932333831502069861")
    ticketchannel.messages.fetch().then(async (messages) => {
        const oldmessage = messages.first()
        if(oldmessage){
            console.log("old ticket")
        } else {
            ticketchannel.bulkDelete(2);
            const ticketInfoEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Ticket regels")
                .setThumbnail(guild.iconURL())
                .setDescription(`📧┃Voor het aanmaken van tickets moet je je aan deze regels houden. \n
                -Niet onnodig meer dan een ticket aan maken.
                -Geen ticket aanmaken verdwenen items(despawn, breken, lava, cactus) een item kan niet verdwijnen door een glitch.
                -Je ticket is niet jou eigendom we kunnen mensen toevoegen en jou verwijderen indien nodig.`)
                ticketchannel.send({embeds:[ticketInfoEmbed]});
            let ticketEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Maak een ticket aan")
                .setDescription("Klik op de emoji om een ticket aan te maken ")
            let messageEmbed = await ticketchannel.send({embeds: [ticketEmbed]});
            messageEmbed.react(ticketemoji);
        }
    })
    
    client.on("messageReactionAdd", async (reaction,user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == "932333831502069861"){
            if (reaction.emoji.name === ticketemoji){
                reaction.users.remove(user.id)
                const channel = await guild.channels.create(`ticket: ${user.tag}`)
                await channel.setParent("932610810574934017")
                await channel.permissionOverwrites.edit(guild.id,{
                    SEND_MESSAGES: true,
                })
                await channel.permissionOverwrites.edit(user,{
                    VIEW_CHANNEL: true
                })
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
            }
        }
    })
}