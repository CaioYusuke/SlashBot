const discord = require("discord.js");
const mapping = {
  " ": "   ",
  0: ":zero:",
  1: ":one:",
  2: ":two:",
  3: ":three:",
  4: ":four:",
  5: ":five:",
  6: ":six:",
  7: ":seven:",
  8: ":eight:",
  9: ":nine:",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:",
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach((c) => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

module.exports = {
  name: "emojify",
  aliases: [],
  category: "Fun",
  usage: "emojify <text>",
  description: "〔🎉 Diversão〕Digite uma mensagem em forma de emoji.",
  botPerms: ["MANAGE_MESSAGES"],
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
    console.log(`Comando letras usado por ${interaction.member.user.tag} do server ${interaction.guild}`)
    if (args.length < 1) {
      interaction.reply("Você deve fornecer algum texto para emojificar!");
    }

    interaction.reply(
      args
        .join(" ")
        .split("")
        .map((c) => mapping[c] || c)
        .join("")
    );
  },
};