module.exports = {
    name: 'warn',
    description: 'test',
    type: 'CHAT_INPUT',
    options: [{
        name: 'user',
        description: 'Mencione um usuário',
        type: 6,
        required: true,
       },
       {
           name: 'reason',
           description: 'Diga o motivo desta punição.',
           type: 'STRING',
           required: false

       }
],

    run: async(client, interaction, args) => {
if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: `<:tick_Nao:903115700510527510> **|** ${interaction.user} Você precisa da permissão \`BANIR_MEMBROS\` para poder utilizar este comando!` , ephemeral: true });
        
        	var user = interaction.options.getUser('user') || interaction.user
        
            if(user.id == interaction.user.id) return interaction.reply({content: `Você não pode se avisar!`, ephemeral: true});
            if(user.id == interaction.guild.me.id) return interaction.reply({content: `Você não pode me avisar!`, ephemeral: true});
            if(user.id == interaction.guild.ownerId) return  interaction.reply({content: `Você não pode avisar o dono do server!`, ephemeral: true});

        var staff = interaction.member.user
        var guild = interaction.guild.name

        var reason = args.join(" ") && interaction.options.getString('reason')
        if (!reason) reason = "Não especificado.";

        interaction.reply(`<:ban:938587109198028822> **|** ${interaction.user} o infrator foi avisado com sucesso.`)

        user.send(`⚠️ **|** Você foi avisado em **${guild}** pelo staff: ${staff}. \n\ **Motivo:** ${reason}`)
    }
}