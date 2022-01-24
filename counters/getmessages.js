module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("932313950828253244")
    var chatids = ["932313950828253247","934057468089204796","932315193235632138"]
    guild.channels.cache.forEach(channel => {
        if(channel.parentId == "932610810574934017"){
            channel.messages.fetch()
        }
    });
    for(i in chatids){
        chat = guild.channels.cache.get(chatids[i])
        chat.messages.fetch()
    }
}