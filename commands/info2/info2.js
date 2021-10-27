const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission de faire cette commande.`).catch(console.error);

    message.channel.send(args.join(" "));
}
module.exports.help = {
    name: "info2"
}