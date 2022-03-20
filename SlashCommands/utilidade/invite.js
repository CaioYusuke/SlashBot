const { MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')

module.exports = {
    name: 'invite',
    description: '〔⚙ Utilidade〕Me convide para o seu servidor!',
    type: 'CHAT_INPUT',

    run: async(client, interaction, args) => {
        const embed = new MessageEmbed()
        .setTitle('Me adicione!')
        .setThumbnail('https://i.imgur.com/iE2RDHy.png')
       .setDescription(`Olá, eu me chamo Ayara e sou um bot focado em moderação e utilidade. Para me adicionar clique no botão abaixo:`)*
        .setColor(interaction.member.displayColor)

        const row = new MessageActionRow()
        .addComponents(
         new MessageButton()
        .setURL('https://discord.com/api/oauth2/authorize?client_id=878029246793134131&permissions=8&scope=applications.commands%20bot')
        .setStyle('LINK')
        .setLabel('Adicionar')
        .setEmoji('<:adicionar:883550432079794226>')

       
        )
       .addComponents(
        new MessageButton() 
        .setLabel('Servidor de Suporte')
        .setURL('https://discord.gg/q46V7Ph4ca')
        .setEmoji('<:servers:946526288351477821>')
        .setStyle('LINK')
       )
         interaction.reply({embeds: [embed], components: [row]})
    }
}
