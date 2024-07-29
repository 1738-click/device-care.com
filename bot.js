document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        const userMsg = userInput.value.trim();
        if (userMsg !== '') {
            appendUserMessage(userMsg);
            respondToUser(userMsg);
            userInput.value = '';
        }
    });

    function appendBotMessage(message) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('chat-msg', 'bot');
        msgElement.textContent = message;
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendUserMessage(message) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('chat-msg', 'user');
        msgElement.textContent = message;
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function respondToUser(message) {
        // Simple responses for demonstration
        switch (message.toLowerCase()) {
            case 'hi':
            case 'hello':
                appendBotMessage('Hello there!')
                                 ( 'Wasup')
                break;
            case 'who created you':
            case 'who made you':
                appendBotMessage('I was created by 1738, Do you want to know more about 1738?')
                                 ( 'I was created by 1738, Wanna know More?')
                break;
                case 'yes':
                        appendBotMessage( 'Ohh sorry seems like he shares a private life,No infomation of him was found!')
                        break;
                case 'no':
                        appendBotMessage( 'Ok, Is there anything I can help you with?')
                        break;
            case 'how are you?':
            case 'how are you':
                appendBotMessage('I\'m doing great, thanks for asking!');
                break;
            default:
                appendBotMessage('I\'m sorry, I don\'t understand that.');
        }
    }
});