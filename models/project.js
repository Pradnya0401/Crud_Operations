const mongoose = require('mongoose')

#changes made

const projectSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        type: Image,
        required: true
    },
    summary:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Project',projectSchema)