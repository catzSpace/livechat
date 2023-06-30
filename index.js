const express = require('express');
const path = require('path');
const app = express();

const socketio = require('socket.io');


app.set('port', process.env.PORT || 3008);
const server = app.listen(app.get('port'));


app.use(express.static('public'));


const io = socketio(server);

io.on('connection', (socket) => {
    console.log('nuevo')

    socket.on('mensaje', (data) => {
        io.sockets.emit('mensajeserver', data);
    })
})



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})