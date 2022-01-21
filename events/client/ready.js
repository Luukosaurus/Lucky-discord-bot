const memberCounter = require("../../counters/member-counter");
const reactionrole = require("../../reactionrole");
const ticket_message = require("../../Ticket_message")
module.exports = (client, Discord) =>{
    console.log("hello world");
    memberCounter(client);
    ticket_message(client,Discord)
    reactionrole(client,Discord)
}