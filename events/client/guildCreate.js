const { error } = require('console');
const fs = require('fs');
module.exports = (client,Discord, guild) =>{
    const guildid = guild.id;
    const guildFile = guildid+".json"

    fs.readFile(`./server_data/template.json`, "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        const templateinfo = JSON.parse(jsonString)
        const dictstring = JSON.stringify(templateinfo,null,2);
            fs.writeFile(`./server_data/${guildFile}`, dictstring,function (err) {
                if (err) {console.log(err)};
            });
    })
    
}