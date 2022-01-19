module.exports = {
    name: 'add',
    description: "add a user to a ticket",
    async execute(client, message, args, Discord,myGuildPrefixes){
        const addeduser = message.mentions.users.first();
        const channel = message.channel
        if(message.channel.parentId == "932610810574934017")
        {
            if(addeduser){
                channel.permissionOverwrites.edit(addeduser,{
                VIEW_CHANNEL: true
                })
            }
        }
    }
}