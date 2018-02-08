const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setColor('#7b0ec9')
    .setThumbnail(sIcon)
    .addField("Server Name", message.guild.name)
    .addField("Created on", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverEmbed);
}
module.exports.help  = {
    name: "server"
}