const environment = require("dotenv"); //Import environment
const bot = require("./utils/bot/Bot.js"); //Import bot client

environment.config(); //Configure the environment depending on .env file defined or not

function worker() {
    const client = new bot.Bot(process.env["TOKEN"], process.env["INTENTS"]); //Create the discord bot client

    client.setup(); //Setup the discord bot client
    client.run(); //Run the discord bot client
}

worker(); //Start the worker task