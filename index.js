// Get the necessary elements
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWidget = document.getElementById('chatbot-widget');
const chatbotClose = document.getElementById('chatbot-close');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot widget visibility
chatbotIcon.addEventListener('click', () => {
    chatbotWidget.style.display = 'block';
});

chatbotClose.addEventListener('click', () => {
    chatbotWidget.style.display = 'none';
});

// Send user message
function sendUserMessage() {
    const messageText = userInput.value.trim();
    if (messageText !== '') {
        appendMessage(messageText, 'user-message');
        userInput.value = '';
        scrollToBottom();
        // Handle user message (e.g., send to server, process response)
        // ...
        // Example bot response
        setTimeout(() => {
            const botResponse = 'This is a sample response from the bot.';
            appendMessage(botResponse, 'bot-message');
            scrollToBottom();
        }, 1000);
    }
}

sendButton.addEventListener('click', sendUserMessage);

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendUserMessage();
    }
});

// Append a message to the chatbot messages container
function appendMessage(message, className){
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
}

// Scroll to the bottom of the chatbot messages container
function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Initially hide the chatbot widget
chatbotWidget.style.display = 'none';


/***********************************our service******************************************* */