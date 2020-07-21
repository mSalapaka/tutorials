import http from 'http'
import express from 'express'
import socketIo from 'socket.io'
import socketIoClient from 'socket.io-client'


const app=express()
const server=http.createServer(app)
const io=socketIo(server)

let port =null
if (process.argv.length <=2){
    port='3000'
} else{
    port=process.argv[2]
}
let jsonObj={"name":"Adam","port":port}

io.on('connect',(socket)=>{
    console.log(`A client has connected with id ${socket.id}`)
    socket.on('disconnect',()=>{
        console.log(`Client with id ${socket.id} has disconnected`)
    })
    socket.on('initialize',(data)=>{
        console.log(data)
    })
    socket.on('start',(data)=>{
        console.log(`Received the start Command from Master node with id ${socket.id}`)
    })
    socket.on('stop',(data)=>{
        console.log(`Received the stop Command from Master node with id ${socket.id}`)
    })

    socket.emit('dataFromAgent',jsonObj)
})

server.listen(port,()=>{
    console.log(`AgentNode is listening at port ${port}`)
})