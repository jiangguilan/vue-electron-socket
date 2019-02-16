// const HTTP = require("http");
// const SIO = require("socket.io");
// const Mark = require("./Mark");
// const PORT = 8080;

// let httpServ = HTTP.createServer().listen(PORT, ()=>{
//     console.log(`Socket.io server is listen on ${PORT}`);
// })

// let io = SIO(httpServ);
// // let PTC = require("./PTCParser");

// io.on("connection", (socketSer)=>{
//     socketSer.on(Mark.SEND, (data)=>{
//         // if(!data) return;
//         // try {
//         //     data = JSON.parse(data);
//         // } catch (error) {
//         //     console.log(error)
//         // }
//         // PTC.OnParse(data, socketSer);
//     });

//     socketSer.on("disconnect", ()=>{
//         console.log('disconnect');
//     })
// })

var http = require('http');
var fs = require('fs');
var exec = require('child_process').exec;
var server = http.createServer(function (req, res) {
    console.log('createServer',req)
    // console.log(res)
    // fs.readFile('./index.html',function(error,data){//若根目录有index.html，访问地址，将显示index.html
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.end(data,'utf-8');
    // });
}).listen(8888);//创建http服务
console.log('Server running ');
var io = require('socket.io').listen(server);
io.sockets.on('connection', (socket) => {
    console.log('connection');
    // socket.on('compile', () => {
    //     socket.emit('login', 'ok');
    // });
    socket.on('tolog', (data) => {
        console.log(12)
        console.log(data)
    })
    socket.on("disconnect", ()=>{
        console.log('disconnect');
    })
});