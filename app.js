const express = require('express')
const socket = require('socket.io')
const http = require('http')
const path = require('path')
const app = express()

app.get('/' , (req , res)=>{
    res.send("hello")
})

app.listen(3000)
