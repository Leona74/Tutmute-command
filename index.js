const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client();
const prefix = 'b.';

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands");
        return;
    }

    jsfile.forEach((f,i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props); 
    });
});



bot.on("ready", async () => {
    bot.user.setActivity("use b.help see commands");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    if(cmd === `${prefix}help`){
        let commandEmbed = new Discord.RichEmbed()
        .setColor("#7b0ec9")
        .setDescription('Command List')
        .addBlankField()
        .addField("Info: ", '**b.info** (Posts basic bot info)')
        .addField("Server Info: ", '**b.server** (Posts basic server info)')
        .addField("Ban: ", '**b.ban** (Only can be used by a user with admin powers *MUST ADD A REASON AFTER THE @user*)')
        .addField("Kick: ", '**b.kick** (Only can be used by a user with mod powers *MUST ADD A REASON AFTER THE @user*')
        .addBlankField()
        .addField("Hello", '**b.hello** (Posts Hello!)')
        .addField("Gmhus", '**b.gmhus** (gmhus)');


        return message.author.sendMessage(commandEmbed);
        return message.channel.send("debug");
    }

    if (oldMember.voiceChannelID !== newMember.voiceChannelID) {
        console.log("debug");
    }
})
bot.login('NDA5MDI4OTAzMDM0ODE0NDc0.DV019w.LzXiW6ivvZ78HdrmB6KaV9MWxpM');