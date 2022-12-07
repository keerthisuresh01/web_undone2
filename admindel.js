const express = require('express')
const router = express.Router()
const evtModel = require('./models/eventSchema')

router.use(express.urlencoded({
    extended: true })
);

router.post('/',async function(req,res)
{
    try
    {
        const ename = {evtname:req.body.etitle}

        const a1 = await evtModel.findOneAndDelete(ename)
        res.json(a1)
    }
    catch(err)
    {
        res.send("err")
    }
})

module.exports=router