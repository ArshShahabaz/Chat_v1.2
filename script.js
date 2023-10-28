document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");
    const logoutButton = document.getElementById("logout-button");

    // This example uses a simple array to store messages. In a real application, you would use a database.
    const messages = [];

    sendButton.addEventListener("click", () => {
        const message = messageInput.value;
        if (message.trim() !== "") {
            // In a real application, you would save the message to a database.
            messages.push(message);
            displayMessage(message);
            messageInput.value = "";
        }
    });

    function displayMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    }

    logoutButton.addEventListener("click", () => {
        // Handle user logout here.
    });
});
