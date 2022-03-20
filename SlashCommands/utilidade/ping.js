const { MessageEmbed } = require("discord.js")

module.exports =  {
    name: "ping",
    description: "〔⚙ Utilidade〕Veja meu ping.",
    type: "CHAT_INPUT",    
    
    run: async (client, interaction, args) => {

        var ping = client.ws.ping

        const embed = new MessageEmbed()
        .setColor(interaction.member.displayColor)
        .setDescription(`🏓 **|** O meu ping está em \`${ping}ms\`.`);

        interaction.reply({embeds: [embed]})

    }
}
