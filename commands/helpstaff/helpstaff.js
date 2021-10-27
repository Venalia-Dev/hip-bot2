const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    var staff = new Discord.MessageEmbed()
    .setAuthor(`Commandes Staff`, bot.user.avatarURL({dynamic: true}))
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
    .setThumbnail(bot.user.avatarURL({dynamic: true}))
    .setTimestamp()
    .addField('.hban','Permet de ban une personne.')
    .addField('.hkick','Permet de  kick une personne.')
    .addField('.hmute','Permet de mute un joueur.')
    .addField('.hclear','Permet de clear un channel.')
    .addField('.hsondage','Permet de faire un sondage.')
    .addField(".huserinfo", "permet de voir les informations d'un membre")
    .addField('Tous droits réservés', ' Toutes copies est interdites ©')
    .setColor('#d61910');
message.channel.send(staff);
}

module.exports.help = {
    name: "helpstaff"
}