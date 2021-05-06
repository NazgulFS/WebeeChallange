const express = require('express');
const router = express.Router();
const http = require("http");
// instance http instead to express

const app = express();
// instance http instead to express
const server = http.createServer(app);

const io = require("socket.io")(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});
const sensorController = require('../controllers/sensorController');

router.delete('/delete', sensorController.delete);

/* router.get('/', function(req,res,next) {
    var jsonobj = [{name:"john",score:345},{name:"paul",score:678}]

    io.sockets.on('connection',(socket) => {
        connections.push(socket);
        console.log(' %s sockets is connected', connections.length); // this is not printing
    
        socket.on('disconnect', () => {
           connections.splice(connections.indexOf(socket), 1);
        });
    
        socket.emit('server message', jsonobj);
    
     }); 
}) */

router
    .route('/')
    .get(sensorController.getAllSensors)
    .post(sensorController.createSensor);

router
    .route('/:id')
    .get(sensorController.getSensor)
    .patch(sensorController.updateSensor)
    .delete(sensorController.deleteSensor);

module.exports = router;