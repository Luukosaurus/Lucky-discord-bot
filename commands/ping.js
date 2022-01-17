module.exports = {
    name: 'ping',
    description: "The bot will respond with pong",
    execute(client, message, args , Discord){
        message.channel.send(`pong!`);
    }
}