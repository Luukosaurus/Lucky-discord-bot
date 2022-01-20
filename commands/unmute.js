module.exports = {
    name: 'unmute',
    description: "unmute a user",
    async execute(client, message, args, Discord,myGuildPrefixes){
        const member = message.mentions.users.first();
        if(member){
            const user =  message.guild.members.cache.get(member.id)
            if (message.member.permissions.has("MUTE_MEMBERS")){

                const youUnmutedEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Je unmute " + user.user.username);

                const memberTarget = message.guild.members.cache.get(member.id);
                const muterole= message.member.guild.roles.cache.get("932319434406760448");
                const memberrole= message.member.guild.roles.cache.get("932315352833085530");
                if(muterole&&memberrole){
                    try{
                        await memberTarget.roles.remove(muterole);
                        await memberTarget.roles.add(memberrole);
                        await message.channel.send({embeds:[youUnmutedEmbed]});
                    } catch {
                        message.channel.send("It looks like my role perms are insufficient. You can fix this by draging my role higher than the role i need to give")
                    }
                    
                } else {
                    message.channel.send("You'r missing the roles Muted and/or Member")
                    message.channel.send('dont forget to set the permisions for "Member" and "Muted" and remove al the permisions from @everyone')
                }
            } else {
                const youCantUnmuteEmbed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Je hebt niet de permissies om " + user.user.username + " te unmute")

                message.channel.send({embeds: [youCantUnmuteEmbed]});
            }
        } else {
            const noUsernameEmbed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Je moet een speler aangeven met @spelernaam");

            message.channel.send({embeds: [noUsernameEmbed]});
        }
    }
}