const fs = require("fs");
module.exports = async (client,Discord) => {
    newString = "abc"
    const guild = client.guilds.cache.get("932313950828253244")
    const teltijd = 12
    teldone = false
    setInterval(() => {
        const datum = new Date()
        if (teldone){
            teldone = false
        }else if( teltijd == datum.getHours()){
            fs.readFile(`./data/ledencount.txt`, "utf8", async(err, String) => {
                if (err) {
                    console.log("File read failed:", err);
                    return;
                }
                newString = String +guild.memberCount+"\n"
                fs.writeFile(`./data/ledencount.txt`, newString,function (err) {
                    if (err) {console.log(err)};
                });
            })
            teldone = true
        }
    }, 2400000);
}