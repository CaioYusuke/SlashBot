const Discord = require("discord.js"); //npm i discord.js
const client = new Discord.Client({intents: 32767}); 
const config = require("./config.json"); 

client.login(config.token); 

client.once('ready', async () => {

    console.log(" O bot "+client.user.username+" está online!")
    client.user.setStatus('idle');
    client.user.setActivity('prefixo /', { type: 'WATCHING' });

})

module.exports = client;
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");
require("./handler")(client);
const { glob } = require("glob"); //npm i glob
const { promisify } = require("util"); //npm i util

const globPromise = promisify(glob);

client.on("interactionCreate", async (interaction) => {

    if (!interaction.guild) return;
  
    if (interaction.isCommand()) {

        const cmd = client.slashCommands.get(interaction.commandName);

        if (!cmd)
            return;

        const args = [];

        for (let option of interaction.options.data) {

            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }

        cmd.run(client, interaction, args);
    }

    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
        
    }
});
