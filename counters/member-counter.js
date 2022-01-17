const fs = require("fs");
module.exports = async (client) => {
    const guild = client.guilds.cache.get("932313950828253244")
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get("932333564270366720")
        channel.setName(`👥｜${memberCount.toLocaleString()} leden`)
    }, 60000);
}