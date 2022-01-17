const memberCounter = require("../../counters/member-counter");
const ticket_message = require("../../Ticket_message")
module.exports = (client, Discord) =>{
    console.log("hello world");
    memberCounter(client);
    ticket_message(client,Discord)
}