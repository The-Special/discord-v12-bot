const Discord = require("discord.js");
const config = require('../config.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "PLAYING", name: `Developer By Special`}, status: 'dnd' })
};

/*
name kısmına istediğiniz durumu yazabilirsiniz.

WATCHING = İZLİYOR
PLAYING = OYNUYOR
LISTENING = DİNLİYOR

Status kısımları:
online = çevrimiçi
idle = boşta
dnd = rahatsız etmeyin

*/ 
