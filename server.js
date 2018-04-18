const Discord = require ("discord.js");

const TOKEN = "NDM0MTI0NzQ2ODIxNDY4MTYw.DbedHg.JusQksZk_OQLnTZgRtoKp7FpekM"
const PREFIX = "/"

function doMagic8BallVoodoo() {
    var rand = ['zphoebus@hotmail.com:phreak9969', 'nealmu@gmail.com:raya99', 'red.double.blade@gmail.com:pizzaman123', 'joshua.alan.baker@gmail.com:theone', 'swoog@ymail.com:sonicheroes12', 'earthyelves@gmail.com:tambo3', 'swoog@ymail.com:sonicheroes12', 'ericcerpa01@hotmail.com:eric090401', 'ihaveaname:shadow19149', 'Hazagorski@yahoo.com:4662jack'];

    return rand[Math.floor(Math.random()*rand.length)];
};

var bot = new Discord.Client();

bot.on("ready",function() {
    console.log("READY");
    bot.user.setGame("/help | by skullymax");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user))return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "generate":
            msg.author.sendMessage(doMagic8BallVoodoo());
            message.channel.sendMessage("**Generating...**");
            break;
        default:
            message.channel.sendMessage("Invalid command. Use /help for commands")
    }
});

bot.login(TOKEN);
