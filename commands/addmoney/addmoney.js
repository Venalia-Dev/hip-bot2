const db = require('quick.db')
const Discord = require('discord.js');
const economy = new db.table("Economy")

module.exports.run = async (client, message, args) => {
    //let Owner = '305798261346926594'
    //if (message.author.id !== Owner) return;

    let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    economy.add(`monney_${message.guild.id}_${user.id}`, args[1])

    return message.channel.send(`Vous avez donné **${args[1]} Pièces à ${user}**`)
   

}
module.exports.help = {
    name: "addmoney"
}