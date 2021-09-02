const express = require('express')
const { addListener } = require('../models/film')
const router = express.Router()

const Film= require('../models/film')

router.get('/', async(req,res)=>{
    try{
            const film=  await Film.find()
            res.json(film)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/:id', async(req,res)=>{
    try{
            const film=  await Film.findById(req.params.id)
            res.json(film)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/',async(req,res)=>{
    const film= new Film({
        name:req.body.name,
        image:req.body.image,
        summary:req.body.summary

    })
    try{
        const a1=await film.save()
        res.json(a1)


    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const film= await Film.findById(req.params.id)
        film.image = req.body.image
        const a1 = await film.save()
        res.json(a1)
    }catch{
        res.send('Error');

    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const film= await Film.findByIdAndDelete(req.params.id)
        film.image = req.body.image
        const a1 = await film.delete()
        res.json(a1)
    }catch(e){
        res.status(500).send(e);

    }
})

module.exports=router