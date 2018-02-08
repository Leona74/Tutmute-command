const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!kUser) message.channel.send("Can't find user");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return;
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked");
    let kickEmbed = new Discord.RichEmbed()
    .setDescription('~Kick~')
    .setColor('#f44242')
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "general");
        
    message.guild.member(kUser).kick(kReason);

    return message.channel.send(kickEmbed);
}

module.exports.help  = {
    name: "kick"
}