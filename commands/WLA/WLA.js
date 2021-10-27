const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission de faire cette commande.`).catch(console.error);

    let member = message.mentions.members.first()
    let wla = new Discord.MessageEmbed()
    .setAuthor(`Serveur SynchroRP`, message.guild.iconURL({dynamic: true}))
    .setDescription(`✅ Félicitation ! ${member}, vous avez réussi votre WL et vous êtes désormais éligible pour passer votre entretien oral lorsqu’une session douane ouvrira.`)
    .addField('Tous droits réservés', ' Toutes copies est interdites ©')
    .setThumbnail(member.user.avatarURL({dynamic: true}))
    .setTimestamp()

    message.channel.send(`le message à bien été envoyé`)
 
 
    member.createDM().then(channel => {
        channel.send(wla)
    })

    let wlaa = new Discord.MessageEmbed()
    .setAuthor(`Serveur SynchroRP`, message.guild.iconURL({dynamic: true}))
    .setDescription(`✅ Félicitation ! ${member}, vous avez réussi votre WL et vous êtes désormais éligible pour passer votre entretien oral lorsqu’une session douane ouvrira.`)
    .addField('Tous droits réservés', ' Toutes copies est interdites ©')
    .setThumbnail(member.user.avatarURL({dynamic: true}))
    .setTimestamp()
  
    const chan = member.guild.channels.cache.find(channel => channel.name === '📁・correction')
  
    chan.send(wlaa)
}

module.exports.help = {
    name: "WLA"
}