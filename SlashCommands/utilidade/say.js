const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'say',
    description: '〔⚙ Utilidade〕Escreva uma mensagem através do bot.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: "text",
            type: 3,
            description: "Digite o texto",
            required: true
        }
    
    ],

    run: async(client, interaction, args) => {
        try {
            const say = args.join(" ")

        const embed = new MessageEmbed()
        .setDescription(`${say}`)
        .setColor(interaction.member.displayColor)
        .setFooter(`Mensagem enviada por ${interaction.member.user.tag}`)
        
        interaction.channel.send({embeds: [embed]})
            
        } catch (error) {
        
        }
        
    }
}