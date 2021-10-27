const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission de faire cette commande.`).catch(console.error);

    let member = message.mentions.members.first()
    let wlr = new Discord.MessageEmbed()
    .setAuthor(`Serveur SynchroRP`, message.guild.iconURL({dynamic: true}))
    .setDescription(`❌ Bonjour ${member}, nous sommes dans le regret de vous annoncer que votre WL a été refusé. Réessayez plus tard !`)
    .addField('Tous droits réservés', ' Toutes copies est interdites ©')
    .setThumbnail(member.user.avatarURL({dynamic: true}))
    .setTimestamp()

    message.channel.send(`le message à bien été envoyé`)
 
 
    member.createDM().then(channel => {
        channel.send(wlr)
    })

    let wlar = new Discord.MessageEmbed()
    .setAuthor(`Serveur SynchroRP`, message.guild.iconURL({dynamic: true}))
    .setDescription(`❌ Bonjour ${member}, nous sommes dans le regret de vous annoncer que votre WL a été refusé. Réessayez plus tard !`)
    .addField('Tous droits réservés', ' Toutes copies est interdites ©')
    .setThumbnail(member.user.avatarURL({dynamic: true}))
    .setTimestamp()
  
    const chan = member.guild.channels.cache.find(channel => channel.name === '📁・correction')
  
    chan.send(wlar)
}

module.exports.help = {
    name: "WLR"
}