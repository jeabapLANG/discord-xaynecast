const error = require("../error/Command.js"); //Import error

/**
 * Class representing a discord slash command
 */
class Command {
    /**
     * Construct the discord command class instance with the given command declaration
     * @param {Object} data Command declaration used to create a command
     */
    constructor(data) {
        if(!(data.hasOwnProperty("command"))) { //If the command property is not defined
            throw new error.CommandMissingArgumentError("command"); //Throw command argument missing
        }
        if(!(data.hasOwnProperty("handle"))) { //If the handle property is not defined
            throw new error.CommandMissingArgumentError("handle"); //Throw handle argument missing
        }
        if(!(data.command.constructor.name == "SlashCommandBuilder")) { //If the command property is not of type slash command
            throw new error.CommandInvalidArgumentTypeError("command", "SlashCommandBuilder"); //Throw command argument invalid type
        }
        if(!(typeof data.handle === "function")) { //If the handle property is not of type function
            throw new error.CommandInvalidArgumentTypeError("handle", "function", typeof data.handle); //Throw handle 
        }

        this._declaration = data.command; //Set the slash command declaration
        this._handle = data.handle; //Set the slash command handler
    }

    /**
     * Handle the given interaction
     * @param {} interaction Interaction to handle
     */
    async handle(interaction) {
        await this._handle(interaction)
    }
}

/**
 * Export the necessary functions and classes
 */
 module.exports = {
     Command: Command //Export the Command class
};