/*const { MessageEmbed } = require('discord.js')
const { db } = require('quick.db')
module.exports = {
  name: "ban",


  run: async(client, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(`:x: **|** ${message.author} Você precisa da permissão \`BANIR_MEMBROS\` para poder utilizar este comando!`)


        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Sem motivo";


//-----------------------------------------|
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic : true}))   
        .setThumbnail(message.guild.iconURL({dynamic: true}))     
        .setDescription(`Você foi banido de **${message.guild.name}**. \n\n\ **Motivo:** ${reason} \n\n\ **Staff:** ${message.author} `)
        .setColor("#219100")
//envia msg no pv da pessoa----------------|



        if (!args[0]) return message.channel.send(`<:error:883549815621976084> **|** ${message.author} Mencione um usuário ou o ID dele para efetuar o comando.`);

        if(!usu) return message.channel.send(`<:error:883549815621976084> **|** ${message.author} Você não mencionou e nem utilizou um ID válido!`);

        if(!usu.bannable) return message.channel.send(`<:error:883549815621976084> **|** ${message.author} Eu não tenho permissão para banir este membro.`);

        /*const embedban = new MessageEmbed()
        .setTitle('<:ban:938595687828967475> Sinta o peso do martelo!')
        .setDescription(`${usu.user} foi banido com sucesso! `)
        .setColor("#219100")
        .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.react('<:ban:938587109198028822>')*/
        
        

        
/*
        await usu.send({embeds: [embed]});
        await usu.ban({reason: reason});
        
        
        message.channel.send(`<:ban:938587109198028822> **|** ${usu.user} foi banido com sucesso!`);
    }
}*/
/*const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ban",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "user",
            type: 6,
            description: "Mencione o usuário que você quer banir",
            required: true
        },
        {
            name: 'motivo',
            type: 3,
            description: "Diga o motivo deste banimento.",
            required: false
        }
    
    ],

    run: async(client, interaction, args) => {

        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            interaction.reply(`<:tick_Nao:903115700510527510> **|** ${interaction.user} Você precisa da permissão \`BANIR_MEMBROS\` para poder utilizar este comando!`)
        } else {

            var user = await interaction.options.getUser('user') || interaction.guild.members.cache.get(args[0]);
            var motivo = args[1];

            if (!motivo) motivo = "Não especificado.";

            if (user) {
                
                user.ban({ reason: motivo }).then(() => interaction.reply(`<:ban:938587109198028822> **|** \`${user.user.tag}\` foi banido com sucesso!`)).catch(e => {
                    interaction.reply(`<:tick_Nao:903115700510527510> **|** Não foi possível banir o usuário \`${user.user.tag}\`.`)
                

                    
                    })
                    
            }
        }
        
    }
}*/




/*module.exports = {
        name:"ban",
        run: async(client, message, args) => {
                message.reply('Comando em manutenção!!')
        }*/

 