const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    var res = new Discord.MessageEmbed()
    .setAuthor(`Commandes bot`, bot.user.avatarURL({dynamic: true}))
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
    .setThumbnail(bot.user.avatarURL({dynamic: true}))
    .setTimestamp()
    .addField(`.havatar`,`Permet de voir l'avatar d'une personne`)
    .addField('.hserverinfo','Permet de voir les informations du serveur.')
    .addField('.hping','Permet de voir ton ping.')
    .addField(`.hinvitations`,`Permet de voir le nombre d'invitations sur le serveur.`)
    .addField('.h8ball','Permet de faire un 8ball')
    .addField('Béta 1.0.0 en cours de dev, dev par :', 'léo pluf !')
    .addField('Tous droits réservés', ' Toutes copies est interdites ©')
    .setColor('#d61910');
message.channel.send(res);
}

module.exports.help = {
    name: "help"
}