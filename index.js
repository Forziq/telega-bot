const TelegramBot = require("node-telegram-bot-api");
const openai = require("openai");
const token = "6090942940:AAFAZgEoCa3Y27f1dCQuxk-zX24pZ2V55Y4";
const bot = new TelegramBot(token, {polling: true});

openai.prompt(
  {
    model: "text-davinci-002",
    prompt: "What is the meaning of life?"
  },
  function(error, result) {
    console.log(result.text);
  }
);