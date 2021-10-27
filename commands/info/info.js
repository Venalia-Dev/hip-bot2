const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission de faire cette commande.`).catch(console.error);

    var emsondage = new Discord.MessageEmbed()
    .setAuthor(`Info`, message.guild.iconURL({dynamic: true}))
    .setThumbnail(bot.user.avatarURL({dynamic: true}))
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription(args.join(" "))

    message.channel.send(emsondage);
}
module.exports.help = {
    name: "info"
}