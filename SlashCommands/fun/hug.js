const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'hug',
    description: '〔🎉 Diversão〕Dê um abraço em um usuário!',
    type: 'CHAT_INPUT',
    options: [
        {
            name: "user",
            type: 6,
            description: "Mencione o usuário que você quer abraçar",
            required: true
        }
    
    ],

    run: async(client, interaction, args) => {

        
        var membro_1 = await interaction.options.getUser('user0') || interaction.user 

        var membro_2 = await interaction.options.getUser('user') || interaction.user 

        var user1 = await interaction.options.getUser('user1') || interaction.user

        if(!user1) return interaction.reply('Mencione um usuário para poder abraça-lo.');

        var gif = [
            'https://i.imgur.com/r9aU2xv.gif',
            'https://c.tenor.com/1T1B8HcWalQAAAAC/anime-hug.gif',
            'https://gifimage.net/wp-content/uploads/2020/03/k-on-hug-gif-.gif',
            'https://acegif.com/wp-content/gif/anime-hug-43.gif',
            'https://1.bp.blogspot.com/-g1r38k2FNA0/XUIXyAWlWZI/AAAAAAABk5c/45g1y34_cKM90rR3x8i42ER3Wm6WMETEACKgBGAs/s1600/Sounan+desu+ka+-+Episode+5+-+Asuka+Hugs+Homare.gif',
            'https://c.tenor.com/mmQyXP3JvKwAAAAC/anime-cute.gif'
          
        ]

        var rand = gif[Math.floor(Math.random() * gif.length)];
        

       var membro_1 = interaction.user;
     
            const embed = new MessageEmbed()
            .setTitle('🎈 Parece que alguém está carente 🎈')
            .setColor("#219100")
            .setDescription(`**${membro_1} abraçou ${membro_2}**`)
            .setImage(`${rand}`)
          

            interaction.reply({ embeds: [embed] })
        
            
    }
}

/*if (membro_1 && !membro_2) {

    membro_2 = message.author;
    if (membro_1 === membro_2) membro_2 = message.author;
}*/      

