const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://hizliresim.com/lWsGyX"
            },
			    "thumbnail": {
				 "url": "https://hizliresim.com/lWsGyX"
			},
            title: "Davet Menüsü",
            description: "[Davet Linkim](https://discord.com/oauth2/authorize?client_id=826461207166320680&scope=bot&permissions=40) \n[Destek Sunucusu](https://discord.gg/BD2FRT3AYJ)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "NeoBot"
            }
          }
        });
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
