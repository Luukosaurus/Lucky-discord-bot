const fs = require("fs");
module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("932313950828253244")
    client.on("message", (message) => {
        // console.log(message)
        if(message.author.bot) return;
        if(message.channel.id == "967876294056501348"){
            if(message.content == "<a:Kawaii:942183705273839666>"){
                let reply = message.reply({ content:`Goed gedaan ${message.author}`, ephemeral: true})
                .then(msg => {
                    setTimeout(() =>{
                        msg.delete();
                    },2000)
                })
            } else {
                let reply = message.reply({ content:`Dit is niet de goede emoji ${message.author}!\nHij wordt nu verwijdert`, ephemeral: true})
                .then(reply => {
                    setTimeout(() =>{
                        reply.delete();
                        message.delete(1000)
                    },2000/*aantal miliseconde dat het duurt voordat fout bericht wordt verwijdert*/)
                })
            }
        }
    })
}