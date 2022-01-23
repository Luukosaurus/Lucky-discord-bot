const felicitatie = require("../../counters/felicitatie");
const memberCounter = require("../../counters/member-counter");
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
}