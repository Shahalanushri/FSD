//1.importing the express
const express = require('express')
const employeeModel =require("./model")
const cors = require('cors')

//2.initialization 
const app = new express()

//middleware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

//3.api creation
app.get('/',(req,res)=>{
    res.send("the message from API")
})

//trial api
app.get('/trial',(req,res)=>{
    res.send("This is trial message")
})
//trial api
app.post('/triall',(req,res)=>{
    res.send("This is trial message using post method")
})
//api for adding data
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("Data added")
})

//aoi for adding view
app.get('/view',async(req,res)=>{
    var data=await employeeModel.find()
    res.send(data)
    console.log(data)
})
//api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})

//api for update data
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data updated")
})





//4.set port
app.listen(3005,()=>{
    console.log("port 3005 is running")
})
