const Discord = require(`discord.js`);
const moment = require(`moment`);

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL({dynamic: true})
    if (sicon) {
        sicon = message.guild.iconURL({dynamic: true})
    } else {
        sicon = bot.user.avatarURL({dynamic: true});
    }
    var Online = message.guild.members.cache.filter(o => o.presence.status === 'online').size
    var Idle = message.guild.members.cache.filter(i => i.presence.status === 'idle').size
    var Dnd = message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size
    var Invisible = message.guild.members.cache.filter(off => off.presence.status === 'offline').size
    var textv = message.guild.channels.cache.filter(channel => channel.type === 'text').size
    var voicev = message.guild.channels.cache.filter(channel => channel.type === 'voice').size

    var VER = {
       "0":"Aucun", 
       "1":"Faible",
       "2":"Moyen",
       "3":"Eleve",
       "4":"Maximum"
       }
       
       var REGION = {
        'use': 'us-east',
        'usw': 'us-west',
        'usc': 'us-central',
        'uss': 'us-south',
        'eu': 'europe',
        'sg': 'singapore',
        'br': 'brazil',
        'hk': 'hongkong',
        'ru': 'russia',
        'sy': 'sydney',
        // au = Australia
        'au': 'sydney',
        'in': 'india',
        'ja': 'japan',
        'jp': 'japan',
       };

    var serverinfo = new Discord.MessageEmbed()
    .setAuthor(`Serveur Info`, message.guild.iconURL({dynamic: true}))
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
    .setTimestamp()
    .setThumbnail(sicon)
    .addField('» Nom du serveur', `**${message.guild.name}**`,true)
    .addField('» ID du serveur', '`' + message.guild.id + '`',true)
    .addField('» Propriétaire', `**${message.guild.ownerID}**`,true)
    .addField('» Location', REGION[message.guild.region],true)
    .addField(`» [${message.guild.memberCount}] Membres total `, `**➥** Humains: **${message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size}** \n **➥** Bots: **${message.guild.members.cache.filter(member => member.user.bot).size}**`,true)
    .addField(`» Channels total (${textv + voicev})`, `➥ Text: **${textv}**\n  ➥ Vocal: **${voicev}**`,true)
    .addField('» Niveau de Verification', `${message.guild.verificationLevel}`,true)
    .addField(`» Date de création`, `${moment.utc(message.guild.createdAt).format("DD/MM/YYYY")} à ${moment.utc(message.guild.createdAt).format("HH")}h${moment.utc(message.guild.createdAt).format("mm")}`,true)
    .setColor('#40a7ed');
message.channel.send(serverinfo);

}

module.exports.help = {
    name: "serverinfo"
}