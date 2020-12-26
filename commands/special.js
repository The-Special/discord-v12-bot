const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

message.channel.send('Hello World! I`m Special.')
};

exports.config = {
  name: "special",
  guildOnly: true,
  aliases: ["hi","hello","helloworld"],
};