const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kiss',
    description: '〔🎉 Diversão〕Beije um usuário!',
    type: 'CHAT_INPUT',
    options: [
        {
            name: "user",
            type: 6,
            description: "Mencione o usuário que você quer beijar",
            required: true
        }
    
    ],

    run: async(client, interaction, args) => {

        var membro_1 = await interaction.options.getUser('user0') || interaction.user

        var membro_2 = await interaction.options.getUser('user') || interaction.user 

        var user1 = await interaction.options.getUser('user1') || interaction.user 

        if(!user1) return interaction.reply('Mencione um usuário para poder beija-lo.');

        var gif = [
            'https://acegif.com/wp-content/uploads/anime-kiss-30.gif',
            'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-49.gif',
            'https://utinuti.files.wordpress.com/2017/04/kuzunohonkai-episode9-omake-7.gif',
            'https://pa1.narvii.com/6397/8e86bf24f9291ebee28a90fe70ec9f6e7d176dc7_hq.gif',
            'https://i.pinimg.com/originals/ce/aa/04/ceaa049aa76fe84aa06dbbf42c7c2f1c.gif',
            'https://i.pinimg.com/originals/36/6e/5d/366e5d80c6c4b43eda0e0126500eb2f4.gif'
          
        ]

        var rand = gif[Math.floor(Math.random() * gif.length)];
        

        var membro_1 = interaction.user;
     
            const embed = new MessageEmbed()
            .setTitle('❤ O amor está fluindo ❤')
            .setColor("#219100")
            .setDescription(`**${membro_1} beijou ${membro_2}**`)
            .setImage(`${rand}`)
          

            interaction.reply({ embeds: [embed] })
        
    }
}
