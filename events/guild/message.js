const fs = require("fs");
module.exports = (client, Discord , message) =>{
    const guildid = message.guild.id;
    const guildFile = guildid+".json"
    fs.readFile(`./server_data/${guildFile}`, "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        const thisGuildInfo = JSON.parse(jsonString)
        const myGuildPrefixes = thisGuildInfo.prefixes
        const prefix = myGuildPrefixes.commander;
        if(!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        const c = client.commands.get(command)
        if (c) c.execute(client,message, args , Discord , myGuildPrefixes);
    });
}