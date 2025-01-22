// Enhanced bot replies with AI history specific content
const botReplies = [
    // AI History specific responses
    { 
        keywords: ["history", "background", "begin", "start"], 
        response: "The history of AI began in the 1950s. The term 'artificial intelligence' was coined in 1956 at Dartmouth College. Would you like to know more about early AI development or modern advances?" 
    },
    {
        keywords: ["dartmouth", "conference", "1956"],
        response: "The 1956 Dartmouth Conference was crucial for AI. Led by John McCarthy, it brought together pioneers like Marvin Minsky and Allen Newell. This is where the term 'artificial intelligence' was first used officially."
    },
    {
        keywords: ["winter", "ai winter"],
        response: "The AI winter refers to periods (particularly in the 1970s and 1980s) when AI funding and interest decreased due to unmet expectations and technological limitations. Would you like to know what ended the AI winter?"
    },
    {
        keywords: ["modern", "current", "today", "now"],
        response: "Modern AI has seen incredible advances thanks to deep learning, big data, and improved computing power. Key developments include language models, computer vision, and autonomous systems. What specific aspect interests you?"
    },
    {
        keywords: ["pioneer", "mccarthy", "minsky", "newell"],
        response: "Key AI pioneers include John McCarthy (who invented LISP), Marvin Minsky (neural networks), and Allen Newell (cognitive architecture). Would you like to learn more about any of these pioneers?"
    },
    // General chat responses
    {
        keywords: ["hello", "hi", "hey"],
        response: "Hello! I'm here to help you learn about AI history. What would you like to know?"
    },
    {
        keywords: ["help", "question", "learn"],
        response: "I can tell you about AI's history from the 1950s to today, including key events, pioneers, and developments. What interests you most?"
    },
    {
        keywords: ["thank", "thanks"],
        response: "You're welcome! Feel free to ask more questions about AI history!"
    }
];

// Enhanced message handling with typing animation
class ChatBot {
    constructor() {
        this.chatBox = document.querySelector('.chat-box');
        this.userInput = document.querySelector('.chat-input');
        this.sendButton = document.querySelector('.send-button');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleMessage();
            }
        });
    }

    handleMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;

        // Display user message
        this.displayMessage(message, 'user-message');
        this.userInput.value = '';

        // Get and display bot response with typing animation
        const response = this.getBotResponse(message);
        this.simulateTyping(response);
    }

    displayMessage(message, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = className;
        messageDiv.textContent = message;
        this.chatBox.appendChild(messageDiv);
        this.scrollToBottom();
    }

    simulateTyping(message) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message typing';
        typingDiv.textContent = '...';
        this.chatBox.appendChild(typingDiv);
        this.scrollToBottom();

        // Calculate delay based on message length (faster for shorter messages)
        const baseDelay = Math.min(message.length * 30, 1500);

        setTimeout(() => {
            this.chatBox.removeChild(typingDiv);
            this.displayMessage(message, 'bot-message');
        }, baseDelay);
    }

    getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        // Find matching response
        for (const reply of botReplies) {
            if (reply.keywords.some(keyword => userMessage.includes(keyword))) {
                return reply.response;
            }
        }

        // Default response with suggestion
        return "I'm not sure about that specific aspect of AI history. Would you like to learn about the early days of AI, modern developments, or key pioneers instead?";
    }

    scrollToBottom() {
        this.chatBox.scrollTop = this.chatBox.scrollHeight;
    }
}

// Initialize chatbot when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatBot();
    
    // Add some CSS for typing animation
    const style = document.createElement('style');
    style.textContent = `
        .typing {
            display: flex;
            align-items: center;
            gap: 2px;
            animation: pulse 1s infinite;
        }
        @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
        }
    `;
    document.head.appendChild(style);
});