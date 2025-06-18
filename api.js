const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())

app.post('/createCode', async(req, res)=>{
    console.log("This is the json that was sent: ", req.body);
})

app.listen(8080, ()=>{
    console.log("server is running on port 8080...");
})