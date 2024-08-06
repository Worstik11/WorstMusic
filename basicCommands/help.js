const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1213978898128314422/1270183299972599879/sigma-patrick-bateman.gif?ex=66b2c5e1&is=66b17461&hm=bad7b7a815e6ecec53afa8215c1e5828540efe1c1407b9204835d6b8023256fe&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Worstik](https://steamcommunity.com/id/76561198379550457edit/)**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1213978898128314422/1270183299972599879/sigma-patrick-bateman.gif?ex=66b2c5e1&is=66b17461&hm=bad7b7a815e6ecec53afa8215c1e5828540efe1c1407b9204835d6b8023256fe&`);

    const button1 = new ButtonBuilder()
      .setLabel('Steam')
      .setURL('https://steamcommunity.com/id/76561198379550457edit/')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/gYaFuNT7')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://github.com/Worstik11?tab=repositories')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
