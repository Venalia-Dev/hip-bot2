const Discord = require(`discord.js`);
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Vous n'avez pas la permission de faire cette commande.")
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return ("Merci de m'ajoutez la permission `ADMINISTRATOR` pour utilisez cette commande.")

    let user = message.guild.member(message.mentions.users.first());
    if(!user) return message.channel.send("Merci de mentionner un utilisateur")
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muteds');
    let joueurs = message.guild.roles.cache.find(r => r.name === 'joueur');
    let muteTime = (args[1] || '60s');

    if (!muteRole) {
        muteRole = await guild.roles.create({
          data: {
            name: 'muteds',
            color: '#000',
            permissions: []
            } 
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.updateOverwrite(muteRole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              CONNECT: false
          });
        });
    }

    //let joueur = message.guild.roles.cache.get("777496385893040148")

    await user.roles.add(muteRole.id);
    await user.roles.remove(joueurs.id);
    message.channel.send(`${user} à bien été rendu muet pendant ${ms(ms(muteTime))}.`);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
        user.roles.add(joueurs.id);
        message.channel.send(`${user} et plus mute`)
    }, ms(muteTime));

    let ClearMute = new Discord.MessageEmbed()
    .setAuthor('🔇 Logs')
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
    .setColor('#631f2b')
    .addField('Mute effectuée par: ', `${message.author} !`)
    .addField('Joueur Mute : ', `${user}`)
    .addField('à étais mute(s):', `${ms(ms(muteTime))}`)
 
    const chan = message.guild.channels.cache.find(channel => channel.name === 'log-venalia')
 
    chan.send(ClearMute)
};

module.exports.help = {
    name: "mute"
}