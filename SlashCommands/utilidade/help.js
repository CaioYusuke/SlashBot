const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: '〔⚙ Utilidade〕Veja os meus comandos!',
    aliases: ['h, hp, hlp'], 
    type: "CHAT_INPUT",

    run: async(client, interaction, args) => {
        
        const embed = new MessageEmbed()
        .setTitle('Comandos')
        .setThumbnail('https://i.imgur.com/iE2RDHy.png')
        .setColor(interaction.member.displayColor)
        .setTimestamp()
        .addFields(
            {name: 'Utilidade', value: '/ping  \n\ /avatar \n\ /serverinfo \n\ /userinfo \n\ /servericon \n\ /banner', inline: true},
            {name: 'Diversão', value: '/kiss \n\ /slap \n\ /hug \n\ /ya cowsay', inline: true},
            {name: 'Bot', value: '/eval \n\ /invite', inline: true},
        )

        interaction.reply({content: `${interaction.user}`, embeds: [embed]})
    }
}
