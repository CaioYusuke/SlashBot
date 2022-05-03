const Discord = module.require('discord.js')
const  ms  = require("ms") // npm i ms
const { MessageEmbed } = require("discord.js")

module.exports =  {
    name: "castigo",
    description: '[⚔ Moderação] Mute um infrator.',
    type: 'CHAT_INPUT',
    options: [{
        name: 'infrator',
        description: 'Mencione ou coloque o ID do usuário aqui.',
        type: 6,
        required: true
    },
    {
        name: 'tempo',
        description: 'Insira o tempo do castigo.',
        type: 'STRING',
        required: true
    },
    {
        name: 'motivo',
        description: 'Insira o motivo desta punição.',
        type: 'STRING',
        required: true
        
    }
    
    ],

    run: async(client, interaction, args) => {

        if (!interaction.member.permissions.has("KICK_MEMBERS")) {
           interaction.reply({ content: `<:tick_Nao:903115700510527510> **|** ${interaction.user} Você precisa da permissão \`KICKAR_MEMBROS\` para poder utilizar este comando!` , ephemeral: true })
        } else {

        var usuario = interaction.options.getUser('infrator') || interaction.user || interaction.guild.members.cache.get(args[0]);
        var tempo = args[1];
        var guild = interaction.member.guild
        var staff = interaction.user
        var reason = args.join(" ") && interaction.options.getString('motivo')
        if (!reason) reason = "Não especificado.";
        

           var membro = interaction.guild.members.cache.get(usuario.id);
            const duracao = ms(tempo);
            membro.timeout(duracao, reason).then( () => {
                interaction.reply({ content: `<:ban:938587109198028822> **|** O infrator **${membro.user.tag}** foi mutado por **${tempo}** com sucesso!. \n\**Motivo:** ${reason}` })
                usuario.send(`⚠ **|** Você foi *Mutado* em **${guild}** pelo staff: ${staff}. \n\ **Motivo:** ${reason}`)
            })
    }

    }
}
