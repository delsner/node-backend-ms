import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import IOServer from 'socket.io';
import routes from './routes';
import config from './config';

// create express server
const app = express();

// enable cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// add routes
app.use('/api', routes);

// configure server
const server = http.createServer(app);

// add socket server
const io = IOServer(server);
io.on('connection', (socket) => {
    console.log('new client connected');
    socket.emit('news', {
        hello: 'world'
    });
    socket.on('event', (data) => {
        console.log(data);
    });
});

// start server
server.listen(config.server.port, () => {
    const {
        address,
        port
    } = server.address();

    console.log(`Example app listening at http://${address}:${port}`);
});

// make io globally available to dispatch events
/*
    use like this:
    global.io.emit('channel', {
        data: data
    });
 */
global.io = io;

// globally catch server exceptions
process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
});

