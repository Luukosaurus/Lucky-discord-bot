module.exports = {
    name: 'kick',
    description: "kick a user",
    async execute(client, message, args, Discord){
        const member = message.mentions.users.first();
        if(member){
            const user =  message.guild.members.cache.get(member.id)
            if (message.member.permissions.has("KICK_MEMBERS")){
                try{
                    const memberTarget = message.guild.members.cache.get(member.id);
                    await memberTarget.kick();
                    const youKickedEmbed = new Discord.MessageEmbed()
                    .setColor("#3042B1")
                    .setTitle("Je kickde " + user.user.username);

                    await message.channel.send({embeds:[youKickedEmbed]})
                    const logchannel = client.channels.cache.get("933466078145822720")
                    const kickedLogEmbed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("kicklog")
                    .setDescription(`${message.author} kicked ${member}`)
                    logchannel.send({embeds:[kickedLogEmbed]})
                } catch {
                    const youCantKickStafEmbed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Je kan niet staf kicken")

                    message.channel.send({embeds:[youCantKickStafEmbed]});
                }
                
            } else {
                const youCantKickEmbed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Je hebt niet de permissies om " + user.user.username + "te kicken")

                message.channel.send({embeds: [youCantKickEmbed]});
            }
        } else {
            const noUsernameEmbed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Je moet een speler aangeven met @spelernaam");

            message.channel.send({embeds: [noUsernameEmbed]});
        }

        
    }
}