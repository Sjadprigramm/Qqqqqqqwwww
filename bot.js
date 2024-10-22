// bot.js

const TelegramBot = require('node-telegram-bot-api');

// استبدل بالتوكن الخاص بك
const token = '7224259888:AAHAIKRi54b_f76qtiDNMN3wjpNqousB6rM';

// إنشاء بوت
const bot = new TelegramBot(token, { polling: true });

// الاستماع لرسالة بدء البوت
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcomeMessage = 'مرحباً بك في بوت تيليجرام! كيف يمكنني مساعدتك اليوم؟';

    // إعداد الأزرار
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'زر 1', callback_data: 'button1' },
                    { text: 'زر 2', callback_data: 'button2' }
                ],
                [
                    { text: 'زر 3', callback_data: 'button3' },
                    { text: 'زر 4', callback_data: 'button4' }
                ]
            ]
        }
    };

    // إرسال رسالة الترحيب مع الأزرار
    bot.sendMessage(chatId, welcomeMessage, options);
});

// الاستماع للأزرار المضغوطة
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const callbackData = query.data;

    let responseMessage;

    switch (callbackData) {
        case 'button1':
            responseMessage = 'لقد ضغطت على زر 1!';
            break;
        case 'button2':
            responseMessage = 'لقد ضغطت على زر 2!';
            break;
        case 'button3':
            responseMessage = 'لقد ضغطت على زر 3!';
            break;
        case 'button4':
            responseMessage = 'لقد ضغطت على زر 4!';
            break;
        default:
            responseMessage = 'لا يوجد رد على هذا الزر.';
    }

    // إرسال رد على الزر المضغوط
    bot.sendMessage(chatId, responseMessage);
});