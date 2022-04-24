const { MessageSelectMenu } = require('discord.js');
const { Interaction } = require('discord.js');
const { MessageActionRow } = require('discord.js');
const fs = require('fs');
module.exports = async (client,Discord) => {
    const ticketemoji = "📬";
    const soliemoji = "✉️";
    const guild = client.guilds.cache.get("932313950828253244")
    const ticketchannel = guild.channels.cache.get("932333831502069861")
    ticketchannel.messages.fetch().then(async (messages) => {
        const oldmessage = messages.first()
        if(oldmessage){
            console.log("old ticket")
        } else {
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
                .setDescription("Klik op de 📬 om een ticket aan te maken \nKlik op de ✉️ om een sollicitatie aan te maken ")
            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId("tickets")
                        .setPlaceholder("Kies wat voor een ticket je wilt maken")
                        .setMaxValues(1)
                        .addOptions([
                            {
                                label: "Ticket support",
                                value: "ticket",
                                description: "Maak een support ticket aan",
                                emoji: "📬"
                            },
                            {
                                label: "Sollicitatie",
                                value: "sollicitatie",
                                description: "Maak een sollicitatie aan",
                                emoji: "✉️"
                            }
                        ])
                )
            let messageEmbed = await ticketchannel.send({embeds: [ticketEmbed]});
            messageEmbed.react(ticketemoji);
            messageEmbed.react(soliemoji);
        }
    })
    client.on("messageReactionAdd", async (reaction,user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == "932333831502069861"){
            if (reaction.emoji.name === ticketemoji){
                fs.readFile(`./ticketsafe/ticketcount.json`, "utf8", (err, jsonString) => {
                    if (err) {
                        console.log("File read failed:", err);
                        return;
                    }
                    const ticketvars = JSON.parse(jsonString)
                    if(!ticketvars[user.id]){
                       ticketvars[user.id] = {} 
                    }
                    reaction.users.remove(user.id)
                    if(ticketvars[user.id].tickets > 0){
                       setTimeout(() => {
                            ticketvars[user.id].tickets = 0
                            console.log(ticketvars[user.id].tickets)
                            const ticketstring = JSON.stringify(ticketvars,null,2);
                            fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                                if (err) {console.log(err)};
                            });
                        },1800000);
                    }
                    else if(ticketvars[user.id].tickets == 0 || ticketvars[user.id].tickets == null){
                        ticketvars[user.id].tickets = 1
                        createticket()
                        setTimeout(() => {
                            ticketvars[user.id].tickets = 0 
                            const ticketstring = JSON.stringify(ticketvars,null,2);
                            fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                                if (err) {console.log(err)};
                            }); 
                        },1800000);
                    } 
                    else if(ticketvars[user.id].tickets == 1){
                        ticketvars[user.id].tickets = 2
                        createticket()
                        setTimeout(() => {
                            ticketvars[user.id].tickets = 0
                            const ticketstring = JSON.stringify(ticketvars,null,2);
                            fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                                if (err) {console.log(err)};
                            });
                        },1800000);
                    }
                    
                    const ticketstring = JSON.stringify(ticketvars,null,2);
                    fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                        if (err) {console.log(err)};
                    });
                })
                async function createticket(){
                    
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
                    const logchannel = client.channels.cache.get("933466078145822720")
                    const ticketLogEmbed = new Discord.MessageEmbed()
                    .setColor("#999999")
                    .setTitle("ticketlog")
                    .setDescription(`ticket aangemaakt ${channel} door ${user}`)
                    logchannel.send({embeds:[ticketLogEmbed]})
                }
            }
            if (reaction.emoji.name === soliemoji){
                fs.readFile(`./ticketsafe/ticketcount.json`, "utf8", (err, jsonString) => {
                    if (err) {
                        console.log("File read failed:", err);
                        return;
                    }
                    const ticketvars = JSON.parse(jsonString)
                    if(!ticketvars[user.id]){
                       ticketvars[user.id] = {} 
                    }
                    reaction.users.remove(user.id)
                    if(ticketvars[user.id].sollis > 0){
                       setTimeout(() => {
                            ticketvars[user.id].sollis = 0
                            console.log(ticketvars[user.id].sollis)
                            const ticketstring = JSON.stringify(ticketvars,null,2);
                            fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                                if (err) {console.log(err)};
                            });
                        },1800000);
                    }
                    else if(ticketvars[user.id].sollis == 0 || ticketvars[user.id].sollis == null){
                        ticketvars[user.id].sollis = 1
                        createticket()
                        setTimeout(() => {
                            ticketvars[user.id].sollis = 0 
                            const ticketstring = JSON.stringify(ticketvars,null,2);
                            fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                                if (err) {console.log(err)};
                            }); 
                        },1800000);
                    } 
                    else if(ticketvars[user.id].sollis == 1){
                        ticketvars[user.id].sollis = 2
                        createticket()
                        setTimeout(() => {
                            ticketvars[user.id].sollis = 0
                            const ticketstring = JSON.stringify(ticketvars,null,2);
                            fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                                if (err) {console.log(err)};
                            });
                        },1800000);
                    }
                    
                    const ticketstring = JSON.stringify(ticketvars,null,2);
                    fs.writeFile(`./ticketsafe/ticketcount.json`, ticketstring,function (err) {
                        if (err) {console.log(err)};
                    });
                })
                async function createticket(){
                    
                    const channel = await guild.channels.create(`Sollicitatie: ${user.tag}`)
                    await channel.setParent("954338585530761247")
                    await channel.permissionOverwrites.edit(guild.id,{
                        SEND_MESSAGES: true,
                    })
                    await channel.permissionOverwrites.edit(user,{
                        VIEW_CHANNEL: true
                    })
                    const ticketOpenEmbed = new Discord.MessageEmbed()
                    .setColor("#3042B1")
                    .setTitle("Bedankt voor het aanmaken van een sollicitatie");
                    const ticketMessage = await channel.send({embeds:[ticketOpenEmbed]})
                    try{
                        await ticketMessage.react("🔒")
                        await ticketMessage.react("🚫")
                    } catch (err){
                        throw err;
                    }
                    const logchannel = client.channels.cache.get("933466078145822720")
                    const ticketLogEmbed = new Discord.MessageEmbed()
                    .setColor("#999999")
                    .setTitle("sollicitatielog")
                    .setDescription(`sollicitatie aangemaakt ${channel} door ${user}`)
                    logchannel.send({embeds:[ticketLogEmbed]})
                }
            }
        }
    })
}