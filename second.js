const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();


client.on('message', async (message) => {
    if (message.body === '!ping') {
        await message.reply('pong');
    }
});

client.on('message', async (message) => {
    if (message.body === '!ping') {
        await message.reply('pong');
    }
});
