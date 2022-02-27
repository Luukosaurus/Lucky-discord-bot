module.exports = {
    name: 'ip',
    aliases: ["server","mc","minecraft","java","bedrock"],
    description: "shows the ip of the minecraft server",
    execute(client, message, args , Discord){
        message.channel.send(`Het ip van de server is: play.luckycraft.nl`);
        message.channel.send(`Bedrock ip is: bedrock.luckycraft.nl`);
        message.channel.send(`Bedrock poort is: 31250`);
    }
}