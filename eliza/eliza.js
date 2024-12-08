// responsses to user input taken from notes
const responses = {
    'hello|hi|hey': [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ],
    'you remind me of (.*)': [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?"
    ],
    '(.*) mother|father|family|parent(.*)': [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    '(.*) I need (.*)': [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?"
    ],
    '(.*) I am (.*)': [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    '(.*) I feel (.*)': [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ],
    '(.*) (sorry|apologize)(.*)': [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way."
    ],
    'bye|goodbye|exit': [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again."
    ],
    '(.*)': [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on."
    ],
};


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
        const userInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');
        const chatLog = document.getElementById('chat-log');

    
    // Function to add a message to the chat log
    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'message user-message' : 'message eliza-message';
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

  //send button event listener
  sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
addMessage('user', message);
const elizaResponse = respond(message);
addMessage('eliza', elizaResponse);
userInput.value = '';
    }
    });
});


//this function is used to get the response from the user input and replace the pronouns with the reflection dictionary
function reflect(input) {
    return input.split(' ').map(word => reflections[word] || word).join(' ');
}

function respond(userInput) {
    // Iterate over the responses
    for (let pattern in responses) {
        // Create a case-insensitive regex pattern
        let regex = new RegExp(pattern, 'i'); 
        // Match the user input against the pattern
        let match = userInput.match(regex); 

        if (match) {
            // selects a random response from the array of responses
            let response = responses[pattern][Math.floor(Math.random() * responses[pattern].length)];
            
            // reaflects the user input if the response contains placeholders
            if (match.length > 1) {
                let reflectedGroups = match.slice(1).map(group => reflect(group));
                return response.replace(/{(\d+)}/g, (_, index) => reflectedGroups[index] || '');
            }
// returns the response if there are no placeholders
            return response; 
        }
    }

    

    // Default response if no patterns matchs
    return "I'm not sure I understand. Can you elaborate?";
}





