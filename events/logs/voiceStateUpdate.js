const fs = require("fs");
module.exports = (client,Discord,oldMember, newMember) =>{
    const newUserChannel = newMember.channel
    const oldUserChannel = oldMember.channel
    const logchannel = client.channels.cache.get("933466078145822720")
    const userid = oldMember.member.id
    const user = client.users.cache.get(userid)
    if(oldMember.selfMute != newMember.selfMute) return;
    if(oldMember.selfDeaf != newMember.selfDeaf) return;
    if(oldMember.selfVideo != newMember.selfVideo) return;
    if(oldMember.streaming != newMember.streaming) return;
    if(oldMember.suppress != newMember.suppress) return;
    if(oldMember.serverMute != newMember.serverMute) return;
    if(oldMember.serverDeaf != newMember.serverDeaf) return;
    if(oldUserChannel && !newUserChannel)
    {
        const leftVoiceEmbed = new Discord.MessageEmbed()
                .setColor("#FF3600")
                //.setAuthor({ name: message.member.user.username , iconURL: message.member.displayAvatarURL()})
                .setTitle("VoiceLog")
                .setDescription(`${user} left a voice channel`)
        logchannel.send({embeds:[leftVoiceEmbed]})
    } else if(newUserChannel && !oldUserChannel) {
        const joinedVoiceEmbed = new Discord.MessageEmbed()
                .setColor("#13CE00")
                //.setAuthor({ name: message.member.user.username , iconURL: message.member.displayAvatarURL()})
                .setTitle("VoiceLog")
                .setDescription(`${user} joined a voice channel`)
        logchannel.send({embeds:[joinedVoiceEmbed]})
    } else if(newUserChannel && oldUserChannel) {
        const changedVoiceEmbed = new Discord.MessageEmbed()
                .setColor("#FFF700")
                //.setAuthor({ name: message.member.user.username , iconURL: message.member.displayAvatarURL()})
                .setTitle("VoiceLog")
                .setDescription(`${user} changed a voice channel`)
        logchannel.send({embeds:[changedVoiceEmbed]})
    }
}