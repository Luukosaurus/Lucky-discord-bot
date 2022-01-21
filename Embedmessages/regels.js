module.exports = async (client,Discord) => {
    const guild = client.guilds.cache.get("932313950828253244")
    const ruleschannel = guild.channels.cache.get("932323246836166686")
    ruleschannel.bulkDelete(1);
    const discordRegelsEmbed = new Discord.MessageEmbed()
        .setColor("#3042B1")
        .setTitle("📜┃regels")
        .setThumbnail(guild.iconURL())
        .addFields({name:"Algemenen regels", value:`Dit zijn de regels waar je je aan moet houden in zowel de Discord server als de Minecraft server.

        -Niet schelden spammen of dergelijken (Dit geldt ook voor spraak kanalen).
        -Niet ongepaste(NSFW) foto's of videos of links verspreiden.
        -Niet adverteren (zoals self promotie of promotie van je server).
        -Niet andermans informatie delen (Dit geldt voor persoons informatie zoals naam of IP en dergelijken).
        -Discriminatie is niet toegestaan.
        -Niet bedrijgen(zowel irl bedreigingen zoals DDOS als ingame).
        -Niet scammen
        -Niet bedelen bij spellers of staff.(Bijvoorbeeld vragen om keys van anderen spelers of rank van staff)
        \u200B`},
        {name:"Minecraft regels", value:`Dit zijn de regels die specifiek gelden voor de Minecraft server.

        -Niet een hack client gebruiken. De uitzonderingen hiervan zijn: Badlion Client, Lunar client, Laby mod, Optifine, Schematics(geen auto build).
        -Niet griefen of stelen.
        -Niet bewust liegen tegen staff.
        -Ongepaste bouweren zijn niet toegestaan(Dit wordt bepaald door staff dus hier is geen discussie over mogelijk)
        -Niet misbruik maken van bugs.
        -Je bent niet welkom op de server met een ongepaste naam of skin.
        -Niet de server proberen te laten crashen of laggen.
        -Ingame spullen mogen niet door worden verkocht voor echt geld
        \u200B`},
        {name:"Discord regels",value:`Dit zijn de regels die specifiek gelden voor de Discord server.
        
        -Niet onnodig staff taggen(tag alleen bij tijdsgebonden situaties).
        -Geen overmaten gebruik van emoji's capslock of GIFs
        -Geen discussies aan gaan met staff.(Maak hier een ticket voor aan)
        \u200B`})
        .setFooter("Overtreden van deze regels kan resulteren in permanente verbaning. De zwaarheid van de straf wordt door staff bepaald en kan flexibel zijn")
        ruleschannel.send({embeds:[discordRegelsEmbed]});
}