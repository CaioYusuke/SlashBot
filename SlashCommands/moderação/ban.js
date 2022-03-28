const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban',
    description: '〔⚔ Moderação〕Este comando bane um usuário.',
    options: [{
        name: 'user',
        type: 'USER',
        description: 'Mencione um usuário.',
        required: true,
    },
      /* {
           name: 'reason',
           description: 'insira o motivo desde banimento.',
           type: 'STRING',
           required: true
       }*/
             ],
    run: async (client, interaction, options) => {
        const user = interaction.options.getUser('user') 
    
        if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: `❌ **|** ${interaction.user} Você precisa da permissão \`BANIR_MEMBROS\` para poder utilizar este comando!` , ephemeral: true });
        
            if(user.id == interaction.guild.me.id) return interaction.reply({content: `❌ **|** Você não pode me banir.`, ephemeral: true})
            if(user.id == interaction.user.id) return interaction.reply({content: `❌ **|** Você não pode banir você mesmo.`, ephemeral: true})
            if(user.id == interaction.guild.ownerId) return  interaction.reply({content: `❌ **|** Você não pode banir o dono do server.`, ephemeral: true});
        
        if(!interaction.guild.me.permissions.has("BAN_MEMBERS")) return interaction.reply({content: `❌ **|** Não possuo perimissão para isto.`, ephemeral: true});
        
        if (!user) return interaction.reply('`ERRO 369` \n\ Não encontrei este usuário.');
        
    interaction.guild.members.ban(user);

    interaction.reply({ content: `🏹 **|** **${user.tag}** foi banido com sucesso!`, ephemeral: false });
  
        var userEmbed = new MessageEmbed()

    .setColor('#2e8d15')

    .setDescription(`${user}, você foi banido do servidor **${interaction.guild.name}** por não seguir as regras.

    Banido pelo staff: ${interaction.user}
	
`)

    .setThumbnail(`${interaction.guild.iconURL({ dynamic: true })}`)

    .setTimestamp();
        
        /*var reason = args.join(" ") && interaction.options.getString('reason')
        if (!reason) reason = "Não especificado.";*/

        user.send({ embeds: [userEmbed], ephemeral: true, content: `${user}` });

    }
}
