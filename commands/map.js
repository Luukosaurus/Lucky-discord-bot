module.exports = {
    name: 'map',
    description: "shows the link of the map of the minecraft server",
    execute(client, message, args , Discord){
        message.channel.send(`De dynmap link is : https://map.luckycraft.nl/`);
    }
}