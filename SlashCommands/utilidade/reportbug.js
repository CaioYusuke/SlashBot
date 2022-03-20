const { MessageEmbed } = require('discord.js')

module.exports = {
name:"reportbug",
description: '〔🐞 Reporte〕Reporte um bug que está ocorrendo com o bot.',
type: 'CHAT_INPUT',
options: [
    {
        name: "text",
        type: 3,
        description: "Digite o bug",
        required: true
    }

],
run: async (client, interaction, args) => {

var user = client.users.cache.get("474956360891629578")

const reporte = args.join(" ")
if(!reporte) return interaction.reply(`${interaction.user}\n\ \`/reportbug [bug]\``) 

const chnembed = new MessageEmbed()
.setDescription('Bug reportado com sucesso!')
.setColor('#219100')

interaction.reply(`<:bug:883550358012588063> **|** ${interaction.user} Bug reportado com sucesso!`)

const embed = new MessageEmbed()
.setThumbnail(interaction.guild.iconURL({dynamic: true}))
.setTitle("Novo reporte!")
.addField("Autor da mensagem", `\` ${interaction.member.user.tag} \` \` ${interaction.member.user.id} \``)
.addField("<:bug:883550358012588063> Bug Reportado", `\`\`\`${reporte}\`\`\``)
.setFooter(`Reportado em ${interaction.guild.name}`)
.setColor('#219100')
user.send({embeds: [embed]})
}}