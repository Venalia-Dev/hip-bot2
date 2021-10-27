const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;

    var avatarembed = new Discord.MessageEmbed() //definir l'embed
        .setAuthor(`${user.tag}`, user.avatarURL({dynamic: true})) //Texte au dessus de la desc
        .setDescription(`[**> Voici L'avatar de ${user.tag} <**](${user.avatarURL({dynamic: true})})`) //petite desc au dessus de l'image
        .setImage(user.avatarURL({dynamic: true})) //image
        .setFooter(`> Demande par ${message.author.username} <`, message.author.displayAvatarURL({dynamic: true})) //petit texte de fin
        .setColor(`RANDOM`) //ajouter une couleur
        .setTimestamp(); //ajouter la date de l'embed
    message.reply(avatarembed) //envoyer l'embed (message.reply = mention de l'executeur de la commande+message)/(message.channel.send = envoyer le message dans le channel ou la commande a été executé sans la mention)
}

module.exports.help = {
    name: "avatar"
};