// import  Express 
var express = require("express")
require("./connection")
var cors=require("cors")
var empModel=require("./model/employee")

// Initialize
var app = express();

//middleware
app.use(express.json());
app.use(cors())

//API
app.get('/', (req, res) => {
    res.send("message for trail")
})
app.get('/welcome', (req, res) => {
    res.send("message for trail")
})

//CURD Operations
//add data api
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save();
        res.send({message:"Data added"})
    } catch (error) {
        console.log(error)
        
    }
})

//view data api
app.get("/view", async (req, res) => {
    try {
        const result = await empModel.find();
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

//delete data api
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send(({message: 'deleted successfully'}))
    } catch (error) {
        
        console.log(error)
        
    }
})

//update data api
app.put("/update/:id", async (req, res) => {
    try {
        var data=await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(({ message: 'updated successfully' ,data}))
    } catch (error) {

        console.log(error);

    }
})


//Port
app.listen(3005, () => {
    console.log("port is up")
});