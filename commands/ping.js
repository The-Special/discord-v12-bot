const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('Pong!')
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};