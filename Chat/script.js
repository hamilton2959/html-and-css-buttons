const socket = io();

const form = document.getElementById("chatForm");
const input = document.getElementById("message");
const messages = document.getElementById("messages");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (input.value) {

        socket.emit("chat message", input.value);

        input.value = "";

    }

});

socket.on("chat message", function (msg) {

    const li = document.createElement("li");

    li.textContent = msg;

    messages.appendChild(li);

    messages.scrollTop = messages.scrollHeight;

});