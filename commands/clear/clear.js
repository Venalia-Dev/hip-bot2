const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {

    const member = message.member;

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission de faire cette commande.`).catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`je n'est pas la perm !`).catch(console.error);

    if(!args[0]) return message.channel.send(`tu dois mettre un numéros entre 1 et 100 ou plus ^^`);

    if(isNaN(args[0])) return message.channel.send(`tu dois mettre un numéros !`);

    message.channel.bulkDelete(args[0]);

    message.channel.send(`J'ai supprimé ${args[0]} message(s)`);

    console.log(`clear a été demandé ! ${message.guild.name} !`);
    let ClearEmbeb = new Discord.MessageEmbed()
    .setAuthor('Logs', member.user.avatarURL({dynamic: true}))
    .setFooter(client.user.username, client.user.avatarURL({dynamic: true}))
    .setColor('#7f70f7')
    .addField('🗑 clear effectuée par: ', `${message.author} !`)
    .addField('Nombres de message(s) supprimé:', `${args[0]}`)
 
    const chan = message.guild.channels.cache.find(channel => channel.name === 'log-hip')
 
    chan.send(ClearEmbeb)
};

module.exports.help = {
    name: "clear"
}