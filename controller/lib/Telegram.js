const { axiosInstance } = require("./axios")
function sendMessage(messageObj, messageText) {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}
function handleMessage(messageObj) {
    // Verificamos si messageObj está definido y es un objeto
    var messageText;
    if (!messageObj || typeof messageObj !== 'object') {
        return;
    }
    try {
        messageText = messageObj.text || "";
    } catch (error) {
        console.log(error)
        return;
    }

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1);

        switch (command) {
            case "start":
                return sendMessage(
                    messageObj,
                    "Hi I'm Bando's first bot ^w^ how can I help you?"
                );
            case "help":
                return sendMessage(
                    messageObj,
                    `Commands:
                    /start (Starts the bot service)
                    /help  (Displays information)
                    /proximamente`
                )
            default:
                return sendMessage(messageObj, 'Sorry, I don\'t know that command. Use "/help" to get command list.');
        }
    } else {
        return sendMessage(messageObj, messageText);
    }
}
module.exports = { handleMessage };