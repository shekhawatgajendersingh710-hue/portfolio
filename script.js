
// 1. Light/Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// 2. Project Search and Filter
const searchInput = document.getElementById('project-search');
const projectCards = document.querySelectorAll('.project-card');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    projectCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const tech = card.getAttribute('data-tech').toLowerCase();
        
        if (title.includes(searchTerm) || tech.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3. API-Based Chatbot Integration
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const apiError = document.getElementById('api-error');

// DO NOT hardcode your actual API key here before uploading to GitHub! 
const API_URL = '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';
const API_KEY = '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';

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
    msgDiv.innerText = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    appendMessage(userText, 'user');
    chatInput.value = '';
    apiError.style.display = 'none';

    try {
        // Example implementation for API
        /*
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are an AI assistant for Gajender Singh Shekhawat's portfolio. You know he is a second-year student at JECRC University, highly interested in programming, and has completed projects in Python, web development, and Cursor AI." },
                    { role: "user", content: userText }
                ]
            })
        });

        if (!response.ok) throw new Error('API Request Failed');
        
        const data = await response.json();
        const botReply = data.choices[0].message.content;
        appendMessage(botReply, 'bot');
        */
        
        // Placeholder response for UI testing
        setTimeout(() => {
            appendMessage("This is a placeholder response. To enable real answers, connect your API endpoint in script.js as taught in class.", 'bot');
        }, 500);

    } catch (error) {
        console.error(error);
        apiError.style.display = 'block';
    }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
