const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

 module.exports = {
   name: 'avatar',
   description: '〔⚙ Utilidade〕Veja o seu Avatar ou o de outro usuário.', 
   author: 'eu', 
   type: 'CHAT_INPUT',
   options: [
    {
        name: "user",
        type: 6,
        description: "Selecione o usuário em que você quer ver o avatar.",
        required: false
    }

],
    
run: async(client, interaction, args) => {

  const user = await interaction.options.getUser('user') || interaction.user


 const embed = new MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL({dynamic: true}))
  .setImage(user.displayAvatarURL({ size: 1024, format: 'png', dynamic: true}))
  .setTitle(`🖼 Avatar de ${user.username}`)
  .setColor(interaction.member.displayColor)
  .setFooter(`• Autor: ${interaction.member.user.tag}`, interaction.user.displayAvatarURL({format: "png"}))
  .setTimestamp()

const button = new MessageActionRow()
        .addComponents(
            new MessageButton()

         .setStyle('LINK')
         .setEmoji('🔎')
         .setLabel('Abrir imagem no navegador')
         .setURL(user.displayAvatarURL({dynamic: true, size: 1024}))
)

 interaction.reply({embeds: [embed], components: [button] })

 

}

  }
  
