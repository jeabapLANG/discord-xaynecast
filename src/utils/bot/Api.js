const rest = require("@discordjs/rest"); //Import discord rest api
const routes = require("discord-api-types/v9"); //Import discord routes api

/**
 * Class representing a discord api
 */
class Api {
    /**
     * Construct the discord api class instance with the given client id and token
     * @param {number} id Discord client id used to run the api
     * @param {string} token Discord client token
     */
    constructor(id, token) {
        this._id = id; //Set the api client id
        this._token = token; //Set the api token
        this._api = new rest.REST({ version: "9" }).setToken(this._token); //Create the api link
    }

    /**
     * Deploy the slash commands to the given guild
     * @param {number} guildId Guild id to deploy the slash commands
     * @param {Array<string>} slashCommands Slash commands to deploy to the guild
     */
    async deployInGuild(guildId, slashCommands) {
        await this._api.put(routes.Routes.applicationGuildCommands(this._id, guildId), { body: slashCommands }); //Deploy the slash commands passed on the given guild
    }

    /**
     * Deploy the slash commands to all the registered guilds
     * @param {Array<string>} slashCommands Slash commands pushed to the api
     */
    async deploy(slashCommands) {
        await this._api.put(routes.Routes.applicationCommands(this._id), { body: slashCommands }); //Deploy the slash commands passed on all the bot guilds
    }
}

/**
 * Export the necessary functions and classes
 */
module.exports = {
    Api: Api //Export the Api class
};