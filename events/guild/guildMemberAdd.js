const fs = require("fs");
module.exports = (client, Discord , guildMember) =>{
    let welcomerole = guildMember.guild.roles.cache.get("932315352833085530");
    if(welcomerole){
        guildMember.roles.add(welcomerole);
    }else{
        guildMember.guild.systemChannel.send(`It looks like you dont have a member role. You need to add a role called "member" for your welcome mesage to work`)
    }
    const user =  guildMember.guild.members.cache.get(guildMember.user.id)
    const welcomeEmbed = new Discord.MessageEmbed()
                .setColor("#3042B1")
                .setTitle("Welkom ")
                .setThumbnail(guildMember.displayAvatarURL())
                .setDescription(`Welkom bij de server ${user}`)
                .setFooter("Vergeet niet om de regels te lezen");
    channel = guildMember.guild.systemChannel
    channel.send({embeds:[welcomeEmbed]});
}