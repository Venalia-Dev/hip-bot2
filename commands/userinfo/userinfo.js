const Discord = require(`discord.js`);
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    const status = {
        online: "<:online:888843541600686140> En ligne",
        idle: "<:idle:888857858962255872> Inactif",
        dnd: "<:dnd:888857861717917716> Ne pas déranger",
        offline: "<:offline:888843528166338631> Hors ligne",
        streaming: "<:streaming:888844822142664774>> en stream"
    }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    //const getPresenceStatus = status => {
        //let presence = ''
     
       // switch(Object.keys(status)[0]) {
        //    case 'desktop': 
           //   presence = 'Ordinateur';
         //     break;
           // case 'mobile':
         //     presence = 'Mobile';
           // case 'web':
           //   presence = 'Internet';
            //  break;
       // }
      // return presence
    // }
    
        let embed = new Discord.MessageEmbed()
            .setColor("#8697CB")
            .setAuthor(member.user.username, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .addField("Nom d'Utilisateur:", `${member.user.tag}`, true)
            .addField("Nickname:", `${member.nickname ? `${member.nickname}` : "Aucun"}`, true)
            .addField("ID:", `${member.user.id}`, true)
            .addField('Bot:', member.user.bot ? '🤖 Oui' : '👤 Non', true)
            .addField("Status:", `${status[member.user.presence.status]}`, true)
            //.addField("Platforme", getPresenceStatus(member.user.presence.clientStatus), true)
            .addField("Compte crée le:", moment(member.user.createdAt).format('DD/MM/YYYY HH:mm:ss'), true)
            .addField("A rejoint le serveur:", moment(member.joinedAt).format('DD/MM/YYYY HH:mm:ss'), true)
            .setFooter(`Information Utilisateur `)
            .setTimestamp()
            message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo"
}