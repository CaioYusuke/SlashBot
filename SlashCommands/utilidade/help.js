const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: '〔⚙ Utilidade〕Veja os meus comandos!',
    aliases: ['h, hp, hlp'], 
    type: "CHAT_INPUT",

    run: async(client, interaction, args) => {
        
        const embed = new MessageEmbed()
        .setTitle('ㅤㅤㅤㅤㅤ**Comandos**')
        .setThumbnail('https://i.imgur.com/iE2RDHy.png')
        .setColor('#219100')
        .setTimestamp()
        .addFields(
            {name: 'Utilidade', value: 'ya ping     \n\ ya afk  \n\ ya avatar     \n\ ya serverinfo \n\ ya userinfo \n\ ya servericon \n\ ya banner', inline: true},
            {name: 'Moderação', value: 'ya ban     \n\ ya mute     \n\ ya unban     ', inline: true},
            {name: 'Diversão', value: 'ya slap \n\ ya kiss \n\ ya hug \n\ ya snake \n\ ya cowsay', inline: true},
            {name: 'Bot', value: 'ya botinfo \n\ ya eval \n\ ya reload \n\ ya reportbug \n\ ya invite', inline: true},
        )

        interaction.reply({content: `${interaction.user}`, embeds: [embed]})
    }
}