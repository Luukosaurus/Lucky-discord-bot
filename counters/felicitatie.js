const fs = require("fs");
module.exports = async (client) => {
    const guild = client.guilds.cache.get("932313950828253244")
    var gefeliciteerddone = false;
    const felicitijd = 12
    setInterval(() => {
        const datum = new Date()
        if (gefeliciteerddone){
            console.log("niet nog een keer")
            gefeliciteerddone = false
        }else if( felicitijd == datum.getHours()){
            console.log("test")
            fs.readFile(`./verjaardagensaves/verjaardagen.json`, "utf8", async(err, jsonString) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                const verjaardagenvars = JSON.parse(jsonString)
                var i;
                for (i in verjaardagenvars) {
                    if (verjaardagenvars.hasOwnProperty(i)) {
                        if(verjaardagenvars[i].dag == datum.getDate() && verjaardagenvars[i].maand == datum.getMonth() + 1){
                            try {
                                jarige = guild.members.cache.get(i)
                                const jarigEmbed = new Discord.MessageEmbed()
                                .setColor("#46FF00")
                                .setTitle("Gefeliciteerd ")
                                .setThumbnail(jarige.displayAvatarURL())
                                .setDescription(`gefeliciteerd ${jarige} met je vierjaardag`)
                                .setFooter(`Vergeet niet om hem/haar te feliciteren in de chat`);
                                guild.systemChannel.send({embeds:[jarigEmbed]})
                                gefeliciteerddone = true;
                            } catch {
                                console.log("deleted user")
                            }
                            
                        } else {
                            console.log("niet jarig")
                        }
                    }
                }
            })
        }
    }, 2400000);
}