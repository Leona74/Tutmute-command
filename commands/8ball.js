const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var eBall = Math.floor(Math.random()*(4-1) + 1);
    switch(eBall){
        case 1:
            message.channel.send(':8ball: Yes');
            break;
        case 2:
            message.channel.send(':8ball: No :8ball:');
            break;
        case 3:
            message.channel.send(':8ball: Maybe :8ball:');
            break;
        case 4:
            message.channel.send(':8ball: Ask Again :8ball:');
            break;
    }
}
module.exports.help = {
    name: "8ball"
}