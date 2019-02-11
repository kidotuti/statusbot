const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready! Kido');

});


let statuses = [
    'Message me for help!', 
    'Developed by Kido#9203',
    'You are my everything 💛', 
    'Made with JavaScript and Python',
    'Ibox cho mình đi các bạn 😀' 
    ]; 
    

client.on('ready', () => {
    setInterval(function() {
        let status = statuses[Math.floor(Math.random()*(statuses.length)]; 
        client.user.setPresence({ activity: { name: status }, status: 'idle' }); 
    }, 10000); 
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
