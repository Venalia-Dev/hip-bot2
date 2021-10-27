const Discord = require("discord.js")
const mongoose = require('mongoose');

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync")

const fs = require(`fs`);
const TOKEN = (`ODk3OTU4Mzg3NDYyMDU4MDQ0.YWdO6g.dgUGplLfxGPPMlw1l8pmS1JG-ms`)



const bot = new Discord.Client();
const client = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 3;

// start tous les dossier .js //

function load(dir) {
    fs.readdir(dir, (err, files) => {
      if (err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js")
      if (jsfile.length <= 0) {
        console.log("Je ne trouve pas de commandes.");
        return;
      }
  
      jsfile.forEach((f, i) => {
        delete require.cache[require.resolve(`${dir}${f}`)];
        let props = require(`${dir}${f}`);
        console.log(`${f} charger!`);
        bot.commands.set(props.help.name, props);
      });
    });
  }

  load("./commands/basic/");
  load("./commands/clear/");
  load("./commands/fun/");
  load("./commands/informations/");
  load("./commands/owner/");
  load("./commands/invitations/");
  load("./commands/help/");
  load("./commands/helpstaff/");
  load("./commands/kick/");
  load("./commands/ban/");
  load("./commands/mute/");
  load("./commands/sondage/");
  load("./commands/8ball/");
  load("./commands/economy/");
  load("./commands/addmoney/");
  load("./commands/userinfo/");
  load("./commands/info/");
  load("./commands/info2/");
  load("./commands/WLA/");
  load("./commands/WLR/");

// bvn goodbye //

bot.on("guildMemberAdd", member => {
  console.log("un membre a rejoint");
  //const bvn = bot.channels.cache.get("774442211353559091");
  //const bvn = bot.channels.cache.find(channel => channel.name === 'bienvenue')
  const bvn = member.guild.channels.cache.find(channel => channel.name === '👋│bienvenue')
  bvn.send(`Bienvenue à toi ${member} sur HIP RP`);

  let memberaddEmbeb = new Discord.MessageEmbed()
  .setAuthor('Logs', member.user.avatarURL({dynamic: true}))
  .setFooter(bot.user.username, bot.user.avatarURL())
  .setColor('#268d26')
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .addField('Membre qui vient de rejoindre', `${member} !`)

  const chan = member.guild.channels.cache.find(channel => channel.name === 'log-hip')

  chan.send(memberaddEmbeb)
});

bot.on('guildMemberRemove', member => {
  console.log("un membre est partie");
  //let bvn = member.guild.channels.cache.find(channel => channel.name === 'bienvenue')
  const bvn = member.guild.channels.cache.find(channel => channel.name === '👋│bienvenue')
  bvn.send(`${member} et parti du serveur !`);

  let memberremoveEmbeb = new Discord.MessageEmbed()
  .setAuthor('Logs', member.user.avatarURL({dynamic: true}))
  .setFooter(bot.user.username, bot.user.avatarURL())
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .setColor('#fd0000')
  .addField('Membre qui vient de partir', `${member} !`)

  const chan = member.guild.channels.cache.find(channel => channel.name === 'log-hip')

  chan.send(memberremoveEmbeb)
});

// anti spam et lag du bot //

bot.on("message", async message => {
  if(message.author.bot)return;
  let prefix = 's/'
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Vous devez attendre 3s avant d'envoyer une autre commande !.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);  
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
});


// sistem anti spam //

var old_msg = []

//bot.on('message',(msg) => {

  //try{

    //if (msg.author.id != bot.user.id && old_msg[old_msg.length-1].author.id == msg.author.id && old_msg[old_msg.length-3].author.id == msg.author.id) {

      //var time = msg.createdAt - old_msg[old_msg.length-1].createdAt
      //const member = msg.member;
      //if (time < 6000){
     //   let spamemb = new Discord.MessageEmbed()
     // .setAuthor('Logs', member.user.avatarURL({dynamic: true}))
     // .setFooter(bot.user.username, bot.user.avatarURL())
      //.setColor('#fd0000')
      //.addField('Spam detecter:', `${member} !`)

      // const chan = member.guild.channels.cache.find(channel => channel.name === 'log-hip')

      // chan.send(spamemb)
     // }

   // }else if(old_msg.length > 10) {
    //  old_msg = []
    
    //}
  //}catch(e){
   // console.error(e)
  //}
  //old_msg.push(msg)

  //function timer(msg) {
    //var temp = msg
  //}
//})

bot.on("message", async message => {
  if (message.content.includes("discord.gg") || message.content.includes("discordapp/invite"))
  if (message.member.roles.cache.has("774442633681436733") || message.member.roles.cache.has("852630402085683240")){
    return
  }else{
    message.delete()
    message.reply("tu à le drois de drop de liens petit malins")
  }

})


//activiter du bot

//url:"https://www.twitch.tv/leoplufyt"

bot.on("ready", () => {
  console.log(`Je suis pret j'ai ${bot.users.size} utilisateurs, ${bot.channels.size} channels pour ${bot.guilds.size} serveur`);
  bot.user.setActivity(`Prefix: s/ | dev par leo pluf, versions 1.0.0 en cours de dev !`, { type: "STREAMING",url:"https://www.twitch.tv/leoplufyt"});

  //play.venalia.fr

})
bot.login(TOKEN)
