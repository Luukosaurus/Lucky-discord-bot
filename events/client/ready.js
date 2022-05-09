const chain = require("../../counters/chain");
const felicitatie = require("../../counters/felicitatie");
const getmessages = require("../../counters/getmessages");
const ledencounter = require("../../counters/ledencounter");
const memberCounter = require("../../counters/member-counter");
const Ticketmanager = require("../../counters/ticketmanager");
const reactionrole = require("../../Embedmessages/reactionrole");
const regels = require("../../Embedmessages/regels");
const ticket_message = require("../../Embedmessages/Ticket_message")
module.exports = (client, Discord) =>{
    console.log("hello world");
    memberCounter(client);
    ticket_message(client,Discord)
    reactionrole(client,Discord)
    regels(client,Discord)
    felicitatie(client,Discord)
    getmessages(client,Discord)
    Ticketmanager(client,Discord)
    ledencounter(client,Discord)
    chain(client,Discord)
}