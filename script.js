document.getElementById("send-btn").addEventListener("click", sendMessage);

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Expanded list of bot replies with subjects
const botReplies = [
    // Greetings and general questions
    { keywords: ["hello", "hi", "hey"], response: "Hello! How can I assist you with school subjects or other questions today?" },
    { keywords: ["how are you"], response: "I'm here and ready to help you with your studies! What do you need assistance with?" },

    // Mathematics
    { keywords: ["algebra", "equation"], response: "Algebra involves solving equations with unknown variables. Do you need help solving a specific equation?" },
    { keywords: ["calculus", "derivative"], response: "Calculus studies rates of change. Derivatives, for example, help find the slope of a function at a given point." },
    { keywords: ["geometry", "triangle"], response: "Geometry deals with shapes, sizes, and properties of space. For triangles, remember: the sum of the angles is always 180°. Related terms to explore: congruence, Pythagoras' theorem." },
    { keywords: ["logarithm"], response: "Logarithms are the inverse of exponents. For example, log₂(8) = 3 because 2³ = 8. Explore related concepts like exponential growth and natural logarithms." },
    { keywords: ["pi"], response: "Pi (π) is approximately 3.14159 and represents the ratio of a circle's circumference to its diameter. You might also be interested in topics like circular motion or trigonometric functions." },

    // Physics
    { keywords: ["force", "motion"], response: "In physics, force is described by Newton's Second Law: F = ma (force equals mass times acceleration). Consider exploring related concepts like friction, gravity, and momentum." },
    { keywords: ["energy"], response: "Energy can be kinetic, potential, or thermal, among others. It's a fundamental concept in physics. How about learning about energy conservation?" },
    { keywords: ["light", "optics"], response: "Light behaves both as a particle and a wave. Optics studies its properties like reflection and refraction. You might enjoy diving into the electromagnetic spectrum." },
    { keywords: ["electricity", "voltage"], response: "Electricity involves the flow of charges. Voltage is the potential difference that drives this flow. Explore concepts like circuits and resistance!" },

    // Chemistry
    { keywords: ["atom", "element"], response: "Atoms are the basic units of matter, and elements are pure substances made of one type of atom. Learn more about isotopes and molecular structures!" },
    { keywords: ["reaction"], response: "Chemical reactions involve rearranging atoms to form new substances. Need help balancing equations? Look into reaction rates and catalysts too!" },
    { keywords: ["acid", "base"], response: "Acids donate protons (H⁺), and bases accept them. pH measures how acidic or basic a solution is. Have you heard of neutralization reactions?" },
    { keywords: ["mole", "stoichiometry"], response: "A mole represents 6.022×10²³ particles. Stoichiometry helps calculate reactants and products in reactions. Consider studying limiting reagents." },

    // Literature
    { keywords: ["poetry"], response: "Poetry expresses emotions and ideas through rhythm, meter, and imagery. Do you have a specific poem in mind? You might also like analyzing metaphors and similes." },
    { keywords: ["Shakespeare"], response: "William Shakespeare is known for works like 'Romeo and Juliet' and 'Hamlet.' Which play or sonnet would you like to discuss? Themes of love and tragedy are fascinating too." },
    { keywords: ["symbolism"], response: "Symbolism in literature uses symbols to represent ideas or qualities. It's common in poetry and novels. Why not explore motifs and allegory?" },

    // History
    { keywords: ["world war"], response: "World War I lasted from 1914-1918, and World War II from 1939-1945. Do you need help with events or causes? You might also find it interesting to explore Cold War dynamics." },
    { keywords: ["renaissance"], response: "The Renaissance was a cultural movement in Europe (14th-17th century) known for art, science, and humanism. Dive into the works of Leonardo da Vinci or Galileo!" },
    { keywords: ["revolution"], response: "Revolutions often bring societal change. Are you referring to the Industrial, American, or French Revolution? Explore economic impacts and key figures." },

    // Biology
    { keywords: ["cell", "organism"], response: "Cells are the basic units of life. Organisms can be single-celled (bacteria) or multicellular (humans). Learn about cell organelles like the nucleus and mitochondria!" },
    { keywords: ["photosynthesis"], response: "Photosynthesis is how plants convert sunlight into energy, producing oxygen and glucose. Study its stages: light reactions and the Calvin cycle." },
    { keywords: ["genetics", "dna"], response: "Genetics studies heredity. DNA carries genetic information essential for life. Explore related topics like genes and mutations." },

    // Computer Science
    { keywords: ["algorithm"], response: "An algorithm is a step-by-step process for solving a problem or performing a task. Try exploring topics like sorting and searching algorithms!" },
    { keywords: ["programming"], response: "Programming involves writing code to create software. Do you need help with a specific language or concept? Look into object-oriented programming." },
    { keywords: ["ai", "artificial intelligence"], response: "AI enables machines to mimic human intelligence, like learning, reasoning, and problem-solving. Dive into machine learning and neural networks!" },

    // Fun facts and off-topic
    { keywords: ["joke"], response: "Why don't programmers like nature? It has too many bugs! Explore tech humor for more laughs!" },
    { keywords: ["fact"], response: "Did you know? The Great Wall of China is not visible from space with the naked eye. Fascinated by myths and realities?" },
    { keywords: ["space"], response: "Space is vast and mysterious. Did you know there are more stars in the universe than grains of sand on Earth? Look into black holes and galaxies!" },

    // Personal questions
    { keywords: ["who are you"], response: "I'm a chatbot designed to help with school subjects and general knowledge. How can I assist you? Consider asking about technology or fun facts!" },
    { keywords: ["purpose"], response: "My purpose is to assist students and learners with questions on various topics! Explore new subjects or ask about trivia!" },

    // Default response
    { keywords: [], response: "I'm not sure I understand. Could you clarify or ask something else?" }
];

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    displayMessage(userMessage, "user-message");
    userInput.value = "";

    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
        displayMessage(botResponse, "bot-message");
    }, 500); // Simulate typing delay
}

function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    // Find a matching response
    for (const reply of botReplies) {
        if (reply.keywords.some(keyword => userMessage.includes(keyword))) {
            return reply.response;
        }
    }

    // Default response if no match found
    return "I'm sorry, I couldn't understand your question. Can you rephrase it or ask about something else?";
}
