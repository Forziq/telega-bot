const TelegramBot = require("node-telegram-bot-api");
const { Configuration, OpenAIApi } = require("openai");
const token = "6090942940:AAFAZgEoCa3Y27f1dCQuxk-zX24pZ2V55Y4";
const bot = new TelegramBot(token, {polling: true});
const OPENAI_API_KEY = "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"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});