const { MessageEmbed } = require("discord.js");
const owner = ["474956360891629578"]; 
                
module.exports = {
    name: "eval",
    description: "〔💻 Admin〕 (Comando privado apenas para o desenvolvedor deste bot.)",
    category: "owner",
    usage: "eval <code>",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "text",
            type: 3,
            description: "Digite o texto",
            required: true
        }
    
    ],
                run: async(client, interaction, args) => {
                    //Eval Command(Not to be made public btw!)
                    if (interaction.member.user.id != owner) {
                      return interaction.reply({content: "Apenas o meu criador pode usar este comando!", ephemeral: true})
                    }
                      try {
                        const code = args.join(" ");
                        if (!code) {
                           return interaction.reply("<:ali:883167029241204806>")
                        }
                        
                        var evaled = eval(code);
                
                        if (typeof evaled !== "string")
                          evaled = require("util").inspect(evaled);
                
                          var embed = new MessageEmbed()
                          .setTitle('<:ayaokay:938652611807158294> Finaly!')
                          .addField("Input", `\`\`\`js\n${code}\`\`\``)
                          .addField("Output", `\`\`\`js\n${evaled}\`\`\``)
                          .setColor("#219100")
                
                        interaction.reply({embeds: [embed]});
                      } catch (err) {
                        interaction.reply(`<:ayaque:938651676561260594>\`ERROR\` \`\`\`\n${err}\`\`\``);
                    }
                  }
                }