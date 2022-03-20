     const axios = require('axios');
      const { Client, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
      
      
      module.exports = {
          name: "banner",
          description: '〔⚙ Utilidade〕 Veja o banner de um usuário!',
          author: 'Miyu Sasaki#9049 e Caiø#0001',
          type: 'CHAT_INPUT',
          options: [
            {
                name: "user",
                type: 6,
                description: "Selecione o usuário em que você quer ver o Banner.",
                required: false
            }
        
        ],
         
          /**
           * @param { Client } client
           * @param { CommandInteraction } interaction
           * @param { String[] } args
           */
      
          run: async(client, interaction, args) => {
            
            const user = await interaction.options.getUser('user') || interaction.user
      if (!user) return interaction.reply('Mencione um usúario.');
      
      
      axios
          .get(`https://discord.com/api/users/${user.id}`, {
          headers: {
              Authorization: `Bot ${client.token}`,
          },
      })
      .then((res) => {
          const { banner } = res.data;
      
          if(banner) {
              const extension = banner.startsWith("a_") ? '.gif?size=4096' : '.png?size=4096'; 
              const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;
      
              const bannerimg = new MessageEmbed()
              .setTitle(`🖼️ Banner de ${user.username}`)
              .setImage(`${url}`)
              .setColor(interaction.member.displayColor)
              .setFooter(`• Autor: ${interaction.member.user.tag}`, interaction.user.displayAvatarURL({format: "png"}));
              
      
              const button = new MessageActionRow()
              .addComponents(
                  new MessageButton()
      
               .setStyle('LINK')
               .setEmoji('🔎')
               .setLabel('Abrir imagem no navegador')
               .setURL(`${url}`)
      )
    
              interaction.reply({embeds: [bannerimg], components: [button]})
              }else {
                  const embeddanger = new MessageEmbed()
                  .setDescription(`${interaction.user} este usuário não possui um banner no perfil!`)
                  .setColor('#219100')
                  interaction.reply({embeds: [embeddanger], ephemeral: true })
              }
            }) 
          }
          }
