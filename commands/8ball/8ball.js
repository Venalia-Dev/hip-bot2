const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    const replies = ["Oui", "Non", "Peut-être"];
    const question = args.join(" ");
    const reponse = Math.floor(Math.random() * replies.length);

    var embedball = new Discord.MessageEmbed()
    .setFooter(bot.user.username, bot.user.avatarURL({dynamic: true}))
    .setColor('RANDOM')
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL({dynamic: true}))
    .addField(question, replies[reponse]);

message.channel.send(embedball);
}

module.exports.help = {
    name: "8ball"
}