const { MessageEmbed } = require('discord.js')
const moment = require('moment');
moment.locale('pt-BR')

module.exports = {
    name: 'userinfo',
    description: '〔⚙ Utilidade〕 Veja informações sobre a sua conta e a de outro usuário.',
    type: 'CHAT_INPUT',
    options: [{
        name: 'user',
        type: 6,
        description: 'Mencione um usuário.',
        required: false
    }],
    
    run: async(client, interaction, args) => {
        const Target = await interaction.options.getUser('user') || interaction.user


        const Member = interaction.guild.members.cache.get(Target.id)

        try {
            const embed = new MessageEmbed()
            .setTitle(`${Target.tag}`)
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }) ) 
            /*.setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))*/ 
            .setThumbnail(Target.displayAvatarURL({dynamic: true}))
            .setColor("#219100")
            .addFields(
                {
                    name: '**<:discord_classic:946541764431454248> Discord tag**',
                    value: `\`${Target.tag}\``,
                    inline: true,
                },
                {
                    name: '**<:ID:944450978432843797> Discord ID**',
                    value: `\`${Target.id}\``,
                    inline: true,
                },
                
                {
                    name: '📅 **Conta criada em**',
                    value: `${moment(Target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**➠** ${moment(Target.createdAt).startOf('day').fromNow()}`,
                    inline: true
                },
                {
                    name: '🚪**Entrou no servidor em:**',
                    value: `${moment(Member.joinedAt).format('MMMM  Do YYYY , h:mm:ss  a')}\n**➠** ${moment(Member.joinedAt).startOf('day').fromNow()}`,
                    inline: true
                },
            )
         
            .addField('**💼 Cargos**', `${Member.roles.cache.map(r => r).join(' ').replace('@everyone' , '')}`)
            .setFooter(`• Autor: ${interaction.user.tag}`, interaction.user.displayAvatarURL({format: "png"}))
            .setTimestamp()
    
            
    
    
            interaction.reply({embeds: [embed]})


        } catch (error) {
            interaction.reply(`\`ERRO 369\` Para reportar bugs use \`/reportbug [bug]\`\n\ ${error}`)
        }

       
    }
}

/***************************************************************************************/
