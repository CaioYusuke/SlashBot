const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: 'servericon',
    description: '〔⚙ Utilidade〕Veja o ícone de um servidor!',
    author: 'Caiø#0001',
    type: 'CHAT_INPUT',

    run: async(client, interaction, args) => {
    
        var guildname = interaction.guild.name

        const embed = new MessageEmbed()
        .setTitle(`Ícone de ${guildname}`)
        .setColor(interaction.member.displayColor)
        .setImage(interaction.guild.iconURL({dynamic: true, size: 1024}))
        .setFooter(`• Autor: ${interaction.member.user.tag}`, interaction.user.displayAvatarURL({format: "png"}))
        .setTimestamp()

        const button = new MessageActionRow()
        .addComponents(
            new MessageButton()

         .setStyle('LINK')
         .setEmoji('🔎')
         .setLabel('Abrir imagem no navegador')
         .setURL(interaction.guild.iconURL({dynamic: true, size: 1024}))
)

        interaction.reply({embeds: [embed], components: [button]})
    }
}