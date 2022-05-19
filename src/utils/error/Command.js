/**
 * Class representing a missing argument error
 * @extends {Error}
 */
class CommandMissingArgumentError extends Error {
    /**
     * Construct the missing argument error class with the given missing argument
     * @param {string} argument Argument missing
     */
    constructor(argument) {
        super(`Expected '${argument}' argument but missing`); //Initialize the Error class
    }
}

/**
 * Class representing an invalid argument type
 * @extends {Error}
 */
class CommandInvalidArgumentTypeError extends Error {
    /**
     * Construct the missing argument error class with the given argument with type expected and type received
     * @param {string} argument Argument
     * @param {string} expected Expected type for argument
     * @param {string} received Received type for argument
     */
    constructor(argument, expected, received) {
        super(`Expected '${expected}' type for argument '${argument}' not '${received}'`); //Initialize the Error class
    }
}

/**
 * Export the necessary functions and classes
 */
 module.exports = {
    CommandMissingArgumentError: CommandMissingArgumentError, //Export the CommandMissingArgumentError class
    CommandInvalidArgumentTypeError: CommandInvalidArgumentTypeError //Export the CommandInvalidArgumentTypeError class
};