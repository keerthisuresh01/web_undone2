const express = require('express')
const router = express.Router()
const evtModel = require('./models/eventSchema')

router.use(express.urlencoded({
    extended: true })
);

router.get('/',async function(req,res)
{
    res.sendFile(__dirname+"/admin.html")
    
})

router.post('/',async function(req,res)
{
    try
    {
        const evt = new evtModel(
            {
                evtname:req.body.etitle,
                evtdes:req.body.edesc,
                PperT:req.body.per,
                start:req.body.start,
                end:req.body.end,
                fee:req.body.fee
            }
        )
        const a1 = await evt.save()
        res.json(a1)

    }
    catch(err)
    {
        res.send("err"+err)
    }
})

module.exports = router