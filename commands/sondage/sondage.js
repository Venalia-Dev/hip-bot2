const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de faire cette commande.")
if(!message.guild.me.hasPermission("ADMINISTRATOR")) return ("Merci de m'ajoutez la permission `ADMINISTRATOR` pour utilisez cette commande.")

var emsondage = new Discord.MessageEmbed()
.setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
.setColor('RANDOM')
.setTimestamp()
.setDescription(args.join(" "))
.setThumbnail(bot.user.avatarURL({dynamic: true}))
.addField("Répondre à la question ci-dessus !", "avec les réactions  : 🟩 , 🟧 , 🟥")
.addField("Merci d'avance d'avoir participé au sondage !", "Prochain sondage trés bientôt !")
    

const poll = await message.channel.send(emsondage);
await poll.react("🟩");
await poll.react("🟧");
await poll.react("🟥");
}

module.exports.help = {
    name: "sondage"
}