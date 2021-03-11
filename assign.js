//Comment for resolving github issues, must rmove after resolution

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb:///projectDBex'

const assign = express()


mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection


con.on('open', () => {
    consoe.log('connected..')
})

assign.use(express.json())
const projectRouter =require('./routes/projects')
assign.use('/project', projectRouter)


assign.listen(9000, () => {
    console.log('server started')
})