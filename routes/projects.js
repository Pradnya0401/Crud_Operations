const express = require('express')
const project = require('..//models/project')
const router = express.Router()
const Project=require('..//models/project')


router.get('/', async(req,res) =>{
    try{
        const project = await Project.find()
        res.json(project)

    }catch(err){
        res.send('Error' +err)
    }
    
})
router.get('/:id', async(req,res) =>{
    try{
        const project = await Project.findById(req.params.id)
        res.json(project)

    }catch(err){
        res.send('Error' +err)
    }
    
})

router.post('/',async(req,res) =>{
    const project =new Project({
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary
    })
    try{
        const a1 = await project.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }

})
//if we want to change the summary
router.patch('/:id',async(req,res) =>{
    try{
        const alein =await Project.findById(req.param.id)
        project.summary =req.body.summary
        const a1 = await project.save()
        res.json(a1)
    

    }catch(err){
        res.send('Error')
    }

})
router.patch('/:id',async(req,res) =>{
    try{
        const alein =await Project.findById(req.param.id)
        project.summary =req.body.summary
        const a1 = await project.remove()
        res.json(a1)
    

    }catch(err){
        res.send('Error')
    }

})
 
module.exports = router