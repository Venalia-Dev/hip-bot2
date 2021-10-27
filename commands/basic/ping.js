const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    let botping = new Date() - message.createdAt;
    let ping = Math.floor(botping) + `ms`;
 
    message.reply(`**:ping_pong: Pong** ${ping} !`);
    console.log(`ping a été demandé ! ${message.guild.name} !`);
}

module.exports.help = {
    name: "ping"
}