module.exports = {
    name: 'shop',
    aliases: ["buy","webshop","rank","ranks","itemshop"],
    description: "shows the shoplink of the minecraft server",
    execute(client, message, args , Discord){
        message.channel.send(`de link naar de shop is: https://shop.luckycraft.nl/`);
    }
}