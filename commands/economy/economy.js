const db = require('quick.db')
const Discord = require('discord.js');
const economy = new db.table("Economy")

module.exports.run = async (client, message, args) => {
    let user = message.mentions.members.first() || message.author;

    let argent = economy.fetch(`monney_${message.guild.id}_${user.id}`)
    if (argent === null) argent = 0

    return message.channel.send(`Vous avez **${argent} Pièces**`)
}
module.exports.help = {
    name: "economy"
}
