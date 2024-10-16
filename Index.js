const TelegramBot = require('node-telegram-bot-api');

// أدخل التوكن الخاص بالبوت من @BotFather
const TOKEN = '7891399266:AAEDdHQbEzH42ZAZqxzgrnSnGdU2Lr1L0BI';
const bot = new TelegramBot(TOKEN, { polling: true });

// عند استلام أمر /start من المستخدم
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // إرسال رسالة تحتوي على زر لتشغيل تطبيق ميني تيليجرام
  bot.sendMessage(chatId, "مرحبًا! اضغط على الزر أدناه لتشغيل تطبيق الميني.", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "تشغيل التطبيق",  // النص الذي يظهر على الزر
            web_app: { url: "https://liwaay.vercel.app/" }  // رابط ثابت من Vercel
          }
        ]
      ]
    }
  });
});
