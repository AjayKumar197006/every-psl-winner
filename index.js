const express=require("express")
const cors=require("cors")
const db=require("./db.js")

const app=express()
app.use(express.json())
app.use(cors())

app.listen(8000,()=>
{
    console.log("server started")
})

app.get("/get-winners",(req,res)=>
{
    db.getWinners()
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.get("/get-winner/:number",(req,res)=>
{
    const id=req.params.number
    db.getWinner(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.post("/add-data",(req,res)=>
{
    db.addData(req.body.Time,req.body.Year,req.body.Winner,req.body.Runner_Up)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.put("/update-data/:number",(req,res)=>
{
    const id=req.params.number
    db.updateData(req.body.Time,req.body.Year,req.body.Winner,req.body.Runner_Up,id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})
app.delete("/delete-data/:number",(req,res)=>
{
    const id=req.params.number
    db.deleteData(id)
    .then((data)=>
    {
        
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })

})