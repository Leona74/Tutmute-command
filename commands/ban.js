const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    
    if(!bUser) message.channel.send("Can't find user");
    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("BAN_MEMBERS")) return;
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned");
    
    let banEmbed = new Discord.RichEmbed()
    .setDescription('~Ban~')
    .setColor('#f44242')
    .addField("Banend User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "general");
        
    message.guild.member(bUser).ban(bReason);
        
    banChannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}