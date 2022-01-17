const memberCounter = require("../../counters/member-counter");

module.exports = (client) =>{
    console.log("hello world");
    memberCounter(client);
}