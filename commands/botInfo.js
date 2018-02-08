const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bIcon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("BluhBot Info")
    .setColor("#7b0ec9")
    .setThumbnail(bIcon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Commands", 'Use b.help to get the command list');

    return message.channel.send(botembed);
}
module.exports.help  = {
    name: "info"
}