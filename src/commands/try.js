const slash = require("@discordjs/builders"); //Import slash commands

/**
 * Export the necessary data and functions
 */
module.exports = {
    cmd: new slash.SlashCommandBuilder()
        .setName("try")
        .setDescription("Try the given command")

        .addStringOption(option => 
            option.setName("command")
                .setDescription("Try the given command"))
    ,

    async handle(interaction) {
        await interaction.editReply({ content: "Replied !" });
    }
};