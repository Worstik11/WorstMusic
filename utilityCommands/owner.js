const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const steamLink = 'https://steamcommunity.com/id/76561198379550457edit/';
        const discordLink = 'https://discord.gg/SEV5JvcZ';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖;
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

