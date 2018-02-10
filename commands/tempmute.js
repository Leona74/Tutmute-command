const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    if(!tomute) return message.reply("Couldn't find user.");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let muteRole = message.guild.roles.find(`name`, "muted");
    //creates a role
    if(!muteRole){
        try{
            muteRole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                console.log(channel.name);
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    
    let muteTime = args[1];
    if(!muteTime) return message.reply("You didn't set a time of mute");
    
    await(tomute.addRole(muteRole.id));
    message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(muteTime))}`);

    setTimeout(function(){
        tomute.removeRole(muteRole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted`);
    }, ms(muteTime));
}
module.exports.help = {
    name: "mute"
}