module.exports = {
    name: 'help',
    description: "List of commands",
    execute(client, message, args, Discord){

        if(args[0])
        {
            if (args[0] == "mod"){
                const helpModEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Lijst met commands voor mods")
                .addFields(
                    { name: 'Kick', value: '!kick (user)', inline: true },
                    { name: 'Ban', value: '!ban (user)', inline: true },
                    { name: '\u200B', value: '\u200B'},
                    { name: 'Mute', value: '!mute (user)', inline: true},
                    { name: 'Unmute', value: '!unmute (user)',inline: true},
                    { name: '\u200B', value: '\u200B'},
                    { name: 'add reaction rolls', value: '!reactionrole', inline: true},
                    { name: 'Clear chat', value: '!clear (amount)',inline: true},
                    // { name: '\u200B', value: '\u200B'},
                    // { name: "Herstart de bot", value: '!reloadbot',inline: true},
                )
                message.channel.send({embeds:[helpModEmbed]});
            }
            if (args[0] == "overig"){
                const helpModEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Lijst met overige commands")
                .addFields(
                    { name: 'Ping', value: '!ping', inline: true },
                    { name: 'Ip', value: '!ip', inline: true },
                    { name: '\u200B', value: '\u200B'},
                    { name: 'Map', value: '!map', inline: true},
                    { name: 'Suggestie', value: '!suggestie (tekst)',inline: true},
                    { name: '\u200B', value: '\u200B'},
                    { name: 'verjaardag toevoegen', value: '!verjaardag add (dag) (maand)', inline: true},
                    { name: 'verjaardag verwijderen', value: '!verjaardag remove',inline: true},
                    // { name: '\u200B', value: '\u200B'},
                    // { name: "Herstart de bot", value: '!reloadbot',inline: true},
                )
                message.channel.send({embeds:[helpModEmbed]});
            }
        } else {
            const helpEmbed = new Discord.MessageEmbed()
            .setColor("#3042B1")
            .setTitle("Lijst met commands")
            .addFields(
                { name: 'Mod commands', value: '!help mod', inline: true },
                { name: 'Overige command', value:"!help overig", inline: true}
            )
            message.channel.send({embeds:[helpEmbed]});
        }


        
    }
}