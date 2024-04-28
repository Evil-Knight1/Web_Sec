// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// loader 
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var loader = document.getElementById('loader');
        var content = document.getElementById('main-content');

        // Hide loader
        loader.style.display = 'none';

        // Show main content and fade it in
        content.style.display = 'block';
        setTimeout(function () {
            content.style.opacity = 1;
        }, 10); // Delay just enough to give CSS a chance to kick in
    }, 1000); // Adjust time as needed
});

// cart view
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [
        { id: 1, name: "Different Spices", price: 20, image: "img/home8.png" },
        { id: 2, name: "Nike snikers", price: 80, image: "img/shoes3.png" },
        { id: 3, name: "XBOX controller", price: 60, image: "img/games3.png" }
    ];

    const cartSummary = document.querySelector('.cart-summary');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <span>${item.name} - $${item.price.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(itemElement);
            total += item.price;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    document.querySelector('.cart-icon').addEventListener('click', function () {
        cartSummary.style.display = cartSummary.style.display === 'block' ? 'none' : 'block';
    });

    updateCart();
});

// chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    displayMessage('user', userInput);
    respondToUser(userInput);

    document.getElementById('user-input').value = '';
}

function displayMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add(sender === 'user' ? 'user' : 'bot'); // Add appropriate class
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

function respondToUser(message) {
    const botResponse = getBotResponse(message);
    displayMessage('bot', botResponse);
}

function getBotResponse(userInput) {
    // Simple bot responses
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! What can I help you with?",
        "how are you": "I'm just a bot, but I'm doing well, thank you for asking!",
        "goodbye": "Goodbye! Have a great day!",
        "help": "You can ask me anything!",
        "thanks": "You're welcome!",
        "what's your name": "I'm just a simple chatbot.",
        "who made you": "I was created by a team of developers.",
        "weather": "Sorry, I can't provide real-time weather updates at the moment."
    };

    const botResponse = responses[userInput.toLowerCase()] || "I'm sorry, I didn't understand that.";

    return botResponse;
}

function toggleChatbox() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
}