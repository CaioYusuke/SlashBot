const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'botinfo',
    description: '〔⚙ Utilidade〕 Caso queira ver mais informações detalhadas sobre o mim.',
    type: 'CHAT_INPUT',

    run: async(client, interaction, args) => {
        
        var servers = await client.guilds.cache.size
        var servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)
        var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
        var ping = client.ws.ping
      

        const embed = new MessageEmbed()
        .setTitle("<:ayaaya:946889800076644413> Ayara")
        .setThumbnail('https://i.imgur.com/iE2RDHy.png')
        .setDescription(`Olá, ${interaction.member.user} sou Ayara, uma bot desenvolvida em <:Javascript:948607291358343220> [**Javascript**](https://www.javascript.com) usando a biblioteca <:djs:948608933533192192> [**discord.js**](https://discord.js.org) com o objetivo de facilitar a moderação e a utilidade em seu servidor. \n\n\ **Informações do bot**`)
        .setTimestamp()
        .setFooter(`• Autor: ${interaction.member.user.tag}`, interaction.member.user.displayAvatarURL({format: "png"}))
        .setColor('#219100')
        .addFields(
            {
                name: '<:discord_classic:946541764431454248> discord.js',
                value: ' `v13.6.0`',
                inline: true
            },
            {
                name: '<:ram:948597482600943678> Memória ram',
                value: `\`${ram}\``,
                inline: true
            },
            {
                name: '<:host:948604013396504656> Hospedagem',
                value: '<:discloud:948604241801535569> Discloud',
                inline: true
            },
            {
                name: '<:network:948625507409358859> Ping',
                value: `\`${ping}ms\``,
                inline: true
            },
            {
                name: '<:container:948627469374738432> Prefixo',
                value: '`ya`',
                inline: true
            },
            {
                name: '<:servers:946526288351477821> Servers',
                value: `\`${servers}\``,
                inline: true
            },
            {
                name: '<:users:946526636059263017> Usuários',
                value:`\`${servercount}\``,
                inline: true
            },
            
            
            {
            name: '<:Tag:944451041762615326> **Tag**', 
            value:'`Ayara#4293`', 
            inline: true
        },
            {
            name: '<:ID:944450978432843797> **ID**', 
            value: '`878029246793134131`', 
            inline: true
        },
        {
            name: '**<:DesenvolvedordeBots:883166943497040002> Desenvolvedor**', 
            value: '`Caiø#0001`', 
            inline: true
             },
            {
            name: '<a:stars:948626987512123493> **Data de criação**', 
            value: '`19/08/2021`', 
            inline: true
        },
            {
                name: '<:support:944453082429943908> Servidor de suporte', 
                value: '**[🌊 Olimpo dos Leais](https://discord.gg/q46V7Ph4ca)**',
                inline: true
            }
            )
            interaction.reply({content: `${interaction.member.user}`, embeds: [embed]})
        
        }
    }