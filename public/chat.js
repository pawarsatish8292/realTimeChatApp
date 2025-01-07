const socket = io('http://localhost:3000');
const messagesList = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

// Fetch messages on load
fetch('/api/messages')
    .then((res) => res.json())
    .then((messages) => {
        messages.forEach((msg) => addMessageToUI(msg));
    });

// Add message to UI
function addMessageToUI(message) {
    const li = document.createElement('li');
    li.textContent = `${message.user}: ${message.content}`;
    messagesList.appendChild(li);
}

// Send message
function sendMessage() {
    const user = usernameInput.value.trim();
    const content = messageInput.value.trim();

    if (user && content) {
        socket.emit('send-message', { user, content }); // Ensure both fields are included
        messageInput.value = '';
    } else {
        console.error("User or content cannot be empty.");
    }
}

// Listen for new messages
socket.on('new-message', (message) => {
    addMessageToUI(message);
});
