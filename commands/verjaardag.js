const fs = require('fs');
module.exports = {
    name: 'verjaardag',
    description: "voegt iemands vierjaardag toe aan het systeem",
    execute(client, message, args , Discord){
        if(args[0])
        {
            if(args[0] === "remove") {
                fs.readFile(`./verjaardagensaves/verjaardagen.json`, "utf8", (err, jsonString) => {
                    if (err) {
                        console.log("File read failed:", err);
                        return;
                    }
                    const verjaardagenvars = JSON.parse(jsonString)
                    verjaardagenvars[message.author.id] = undefined
                    const verjaardagenstring = JSON.stringify(verjaardagenvars,null,2);
                        fs.writeFile(`./verjaardagensaves/verjaardagen.json`, verjaardagenstring,function (err) {
                            if (err) {console.log(err)};
                        });
                })
            } else if (args[0] = "add" &&Number.isInteger(args[1]*args[1]) && Number.isInteger(args[2]*args[2]) ){
                if(0<args[1] && args[1]<=31 && 0<args[2] && args[2]<=12){
                    fs.readFile(`./verjaardagensaves/verjaardagen.json`, "utf8", (err, jsonString) => {
                        if (err) {
                            console.log("File read failed:", err);
                            return;
                        }
                        const verjaardagenvars = JSON.parse(jsonString)
                        verjaardagenvars[message.author.id] = {}
                        verjaardagenvars[message.author.id].dag = args[1]
                        verjaardagenvars[message.author.id].maand = args[2]
                        const verjaardagenstring = JSON.stringify(verjaardagenvars,null,2);
                            fs.writeFile(`./verjaardagensaves/verjaardagen.json`, verjaardagenstring,function (err) {
                                if (err) {console.log(err)};
                            });
                        message.channel.send("Je vierjaardag is toegevoegd op de datum " +args[1] +" "+ args[2] )
                    })
                } else {
                    console.log("foute datum")
                }
            } else {
                console.log("fout commando")
            }
            
        }
    }
}