module.exports = {
    name: 'ip',
    aliases: ["server","mc","minecraft","java"],
    description: "shows the ip of the minecraft server",
    execute(client, message, args , Discord){
        message.channel.send(`Het ip van de server is: play.luckycraft.nl`);
    }
}