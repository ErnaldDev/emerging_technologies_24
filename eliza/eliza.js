// responsses to user input taken from notes
const responses = [
    { pattern: /hello|hi|hey/i, responses: ["Hello! How are you feeling today?", "Hi there! What’s on your mind?", "Hey! How can I help you?"] },
    { pattern: /you remind me of (.*)/i, responses: ["Why do you think I remind you of $1?", "What makes you think of $1 when talking to me?", "Is it a good feeling to be reminded of $1?"] },
    { pattern: /(.*)mother|father|family|parent(.*)/i, responses: ["Tell me more about your family.", "How does that make you feel about your family?", "What role does your family play in your thoughts?"] },
    { pattern: /I need (.+)/i, responses: ["Why do you need $1?", "Would getting $1 really help you?", "What if you didn’t need $1?"] },
    { pattern: /I am (.+)/i, responses: ["Why do you think you are $1?", "How long have you felt that way?", "What made you feel like $1?"] },
    { pattern: /I feel (.+)/i, responses: ["Why do you feel $1?", "Does feeling $1 happen often?", "How does that feeling affect you?"] },
    { pattern: /(.*)sorry|apologize(.*)/i, responses: ["No need to apologize.", "Apologies aren't necessary. Why do you feel that way?", "It’s okay to feel that way."] },
    { pattern: /bye|goodbye|exit/i, responses: ["Goodbye! Take care.", "Thank you for sharing. Goodbye!", "Bye! I’m here if you need to talk again."] },
    { pattern: /(.*)/i, responses: ["Can you tell me more?", "Why do you say that?", "How does that make you feel?", "What do you mean by that?", "Interesting... go on."] }
];


//this is the reflection dictionary which was taken from notes which makes conversations more interactive with the pronouns
const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am"
};



document.addEventListener('DOMContentLoaded', () => {
    // Get the elements from the DOM
        const userInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');
        const chatLog = document.getElementById('chat-log');

    
    // Function to add a message to the chat log
    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'message user-message' : 'message eliza-message';
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        //this is used to scroll to the bottom of the chat log
        chatLog.scrollTop = chatLog.scrollHeight; 
    }

 //function to send message
function sendMessage(){
    const message = userInput.value.trim();
    if (message) {
        addMessage('user', "You: " + message);
        const elizaResponse = respond(message);
        addMessage('eliza', "Eliza: " + elizaResponse);
        userInput.value = '';
    }
}

//event lister for send button
sendButton.addEventListener('click', sendMessage);

//event listener for enter key
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

});


//this function is used to reflect the pronouns in the conversation
function reflect(input) {
    return input.split(' ').map(word => reflections[word] || word).join(' ');
}

function respond(userInput) {
    // Iterate over the responses
    for (let item of responses) {
        // Check if the user input matches the pattern
        const match = userInput.match(item.pattern);
        // If there is a match, return a random response
        if (match) {
            const response = item.responses[Math.floor(Math.random() * item.responses.length)];
            return response.replace(/\$(\d+)/g, (_, number) => match[parseInt(number)]);


        }
    }

         
    

    

    // default response if no patterns matchs
    return "I'm not sure I understand. Can you elaborate?";
}





