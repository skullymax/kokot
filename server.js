const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setGame('/help or /invite | By skullymax');
  console.log(`Kitilen initilized.`);
});

function doMagic8BallVoodoo() {
    var rand = ['zphoebus@hotmail.com:phreak9969', 'nealmu@gmail.com:raya99', 'red.double.blade@gmail.com:pizzaman123', 'joshua.alan.baker@gmail.com:theone', 'swoog@ymail.com:sonicheroes12', 'earthyelves@gmail.com:tambo3', 'swoog@ymail.com:sonicheroes12', 'ericcerpa01@hotmail.com:eric090401', 'ihaveaname:shadow19149', 'Hazagorski@yahoo.com:4662jack'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

  if (command === "") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    msg.channel.sendMessage(total).catch(console.error);
  }

  if (command === "help") {
    msg.channel.sendMessage(":calling: It seems you have requested help. Check your DMs.");
    msg.author.sendMessage("**Commands** /invite, /generate, /join")
  }

  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "generate") {
    msg.reply("**Generating...**")
    msg.author.sendMessage(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=434814153107177484&scope=bot&permissions=66137103")
  }

  if (command === "join") {
    msg.reply("https://discord.gg/jUv95")
  }

});

bot.login(config.token);
