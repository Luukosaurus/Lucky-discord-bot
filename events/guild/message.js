const fs = require("fs");
const cansendlist = {}
module.exports = (client, Discord , message) =>{
    const guildid = message.guild.id;
    const guildFile = guildid+".json"
	const logchannel = client.channels.cache.get("933466078145822720")
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
        const c = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command))
        if (c) c.execute(client,message, args , Discord , myGuildPrefixes);
    });
    if(cansendlist[message.author.id]){
        if(!message.author.bot){
            fs.readFile(`./levels/luckylevels.json`, "utf8", (err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                const levels = JSON.parse(jsonString)
                try{
                    try{
                        levels[message.author.id].xp += 1
                    } catch {
                        levels[message.author.id].xp = 1
                    }
                } catch{
                    levels[message.author.id] = {}
                    levels[message.author.id].xp = 1
                }
                const dictstring = JSON.stringify(levels,null,2);
                fs.writeFile(`./levels/luckylevels.json`, dictstring,function (err) {
                    if (err) {console.log(err)};
                });
            })
        }
        cansendlist[message.author.id] = false
        setTimeout(()=> cansendlist[message.author.id] = true, 60000);
    } else {
        setTimeout(()=> {
            if(!cansendlist[message.author.id]){
                cansendlist[message.author.id] = true
            }
        }, 60000);
    }
    
    
    if (message.content.includes("https://") || message.content.includes("http://") || message.content.includes("www.")) {
        if(message.content.includes("nitro")){
			message.delete(1);
			message.channel.send(`${message.author} Het is niet toegestaan om het woord "nitro" te gebruiken in combinatie met een link`)
			const nitroMessageEmbed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("linklog")
                .setDescription(`Message deleted in ${message.channel} of user ${message.author} because chance of nitro \n\n "${message.content}" `) 
                logchannel.send({embeds:[nitroMessageEmbed]})
		}
    }
}