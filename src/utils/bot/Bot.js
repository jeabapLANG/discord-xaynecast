const discord = require("discord.js"); //Import discord
const api = require("./Api.js"); //Import api
const command = require("./Command.js") //Import command
const event = require("./Event.js"); //Import event
const manager = require("./Manager.js"); //Import loader

/**
 * Class representing a discord bot
 */
 class Bot {
    /**
     * Construct the discord bot class instance with the given token and intents
     * @param {string} token Discord token used to run the bot
     * @param {number} intents Discord intents defining client default permissions
     */
    constructor(token, intents) {
        this._token = token; //Set the discord client token
        this._client = new discord.Client({ intents: intents }); //Create the discord client instance

        this._commands = new manager.Manager("commands", command.Command); //Create the commands loader
        //this._events = new manager.Manager("events", event.Event); //Create the events loader
    }

    /**
     * Setup the discord bot
     */
    setup() {
        this._commands.loadAll(); //Load the commands
    }

    /**
     * Run the discord bot
     */
    run() {
        this._client.login(this._token); //Login the discord client
    }

    /**
     * Stop the discord bot
     */
    stop() {
        this._client.destroy(); //Destroy the discord client
    }
}

/**
 * Export the necessary functions and classes
 */
 module.exports = {
    Bot: Bot //Export the Bot class
};