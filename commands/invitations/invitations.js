const Discord = require(`discord.js`);


module.exports.run = async (bot, message, args) => {
    const { guild } = message

    guild.fetchInvites().then((invites) => {
        const inviteCounter = {}

        invites.forEach((invite) => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter

            const name = `${username}#${discriminator}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        })

        let replyText = `personne qui ont crée une invitations:`

        for (const invite in inviteCounter) {
            const count = inviteCounter[invite]
            replyText += `\n${invite} est à ${count} invites`
        }
        message.reply(replyText)
    })

}

module.exports.help = {
    name: "invitations"
}