const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready! Kido');

});
    


client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'Ibox cho mình đi các bạn 😀 ; Message me for help 💛',
            type: "STREAMING",
            url: "https://www.twitch.tv/kidoooooooooooo"
        }
    });
});

 

client.on('message', message => {

    if (message.content === 'help') {

       message.reply('Bạn cần gì nào? Tư vấn tình cảm? Giải tỏa cô đơn? Tìm người yêu? Tìm fwb, ons? Ibox trực tiếp mình nhé :D')

       }

});

client.on('message', message => {

    if (message.content === 'Help') {

       message.reply('Bạn cần gì nào? Tư vấn tình cảm? Giải tỏa cô đơn? Tìm người yêu? Tìm fwb, ons? Ibox trực tiếp mình nhé :D')

       }
});


client.on('message', message => {

    if (message.content === 'HELP') {

       message.reply('Bạn cần gì nào? Tư vấn tình cảm? Giải tỏa cô đơn? Tìm người yêu? Tìm fwb, ons? Ibox trực tiếp mình nhé :D')

       }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
