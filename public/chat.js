const socket = io()

let message = document.querySelector('#message');
let username = document.querySelector('#username');
let btn = document.querySelector('#send');
let output = document.querySelector('.message_output');
let actions = document.querySelector('.actions');


btn.addEventListener('click', () => {
    socket.emit('mensaje', {
        username: username.value,
        message: message.value
    });
});


socket.on('mensajeserver', (data) => {
    output.innerHTML += `<p>${data.username}</p>  <p>${data.message}</p>`
})