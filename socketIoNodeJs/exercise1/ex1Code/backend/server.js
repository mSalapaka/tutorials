import http from 'http'
import express from 'express'
import socketIo from 'socket.io'
import socketIoClient from 'socket.io-client'

const port ='3010'
const app=express()
const server=http.createServer(app)
const io=socketIo(server)
const url1='http://localhost:3000'
const url2='http://localhost:3001'
const dataFor3000={
    neighbors:[{'ip': 'http//localhost:3001'}]
}

const agent3000=socketIoClient(url1)

/* Wiring for agent 3001 */
agent3000.on('connect',()=>{
    console.log(`Connected to Agent 3000 with id ${agent3000.id}`)
}
)
agent3000.on('dataFromAgent',(data)=>{
    console.log(data)
})

agent3000.emit('initialize',dataFor3000)
agent3000.emit('start',{})
agent3000.emit('stop',{})

/* Wiring for agent 3001 */
const dataFor3001={
    neighbors:[{'ip': 'http//localhost:3000'}]
}

const agent3001=socketIoClient(url2)
agent3001.on('connect',()=>{
    console.log(`Connected to Agent 3001 with id ${agent3001.id}`)
}
)
agent3001.on('dataFromAgent',(data)=>{
    console.log(data)
})

agent3001.emit('initialize',dataFor3001)
agent3001.emit('start',{})
agent3001.emit('stop',{})

server.listen(port,()=>{
    console.log(`MasterNode is listening at port ${port}`)
})