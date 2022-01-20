module.exports = {
    name: 'ban',
    description: "ban a user",
    async execute(client, message, args, Discord){
        const member = message.mentions.users.first();
        if(member){
            const user =  message.guild.members.cache.get(member.id)
            if (message.member.permissions.has("BAN_MEMBERS")){
                
                try{
                    const memberTarget = message.guild.members.cache.get(member.id);
                    await memberTarget.ban();
                    const youBannedEmbed = new Discord.MessageEmbed()
                    .setColor("#3042B1")
                    .setTitle("Je verbande " + user.user.username);

                    await message.channel.send({embeds: [youBannedEmbed]});
                } catch {
                    const youCantBanStafEmbed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Je kan niet staf verbannen")

                    message.channel.send({embeds:[youCantBanStafEmbed]});
                }
                
            } else {
                const youCantBanEmbed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Je hebt niet de permissies om " + user.user.username + " te verbannen")

                message.channel.send({embeds:[youCantBanEmbed]});
            }
        } else {
            const noUsernameEmbed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Je moet een speler aangeven met @spelernaam");

            message.channel.send({embeds: [noUsernameEmbed]});
        }
        
    }
}