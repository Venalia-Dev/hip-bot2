const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de faire cette commande.")
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return ("Merci de m'ajoutez la permission `ADMINISTRATOR` pour utilisez cette commande.")
    if(message.author.bot) return;
   

   const user = message.mentions.users.first();
   const reason = args.splice(1).join(' ');
   user ? message.guild.member(user).ban({reason}) : message.channel.send("L'utilisateur n'est pas sur le server !");

   if (user.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas ban le propriétaire du serveur !')
   //if (message.user.roles.highest.comparePositionTo(user.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas ban cette Utilisateur !')

   message.channel.send(`${user}`+ " à été banni. Raison : " + reason)

   let BanEmbeb = new Discord.MessageEmbed()
   .setAuthor('Logs', user.avatarURL({dynamic: true}))
   .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
   .setColor('#ffde02')
   .addField('🔨 Joueur ban', `${user} par: ${message.author} !`)
   .addField('Raison du ban:', reason)

   const chan = message.guild.channels.cache.find(channel => channel.name === 'log-hip')

   chan.send(BanEmbeb)
}

module.exports.help = {
    name: "ban"
}