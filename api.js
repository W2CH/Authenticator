const express = require("express");
const cors = require("cors");
const db = require("./driver")
const app = express();
const nodemailer = require("nodemailer");
const sendEmailHelper = require("./sendMailHelper");
app.use(express.json());

// Cors is basically a law that the browser follows where it notices someone trying to make a fetch call to a server
// from a different domain, so the browser asks the domain if this outside fetch is allowed to interact with it. There is code
// that a server can have that basically says, "if domain carlos.com is fetching me, I will go talk to him".
app.use(cors())

app.post('/auth/request', async(req, res)=>{
    //TODO: Get the email the user passed in.
    const email = req.body.email;

    // TODO: Generate Code
    const code = Math.floor(100000 + Math.random() * 900000);

    // TODO: Define the TTL for each code
    const currentDate = new Date();

    // This basically gets the current time and adds 2min.
    const expirationTime = new Date(currentDate.getTime() + 60000 * 2);

    // TODO: Store code and email to the database
    try{
        await db.query(
            'INSERT INTO active_codes (code, email, expires_at) VALUES (?,?,?)',
            [code, email, expirationTime]
        )
    }catch(err){
        console.log(err);
        res.status(500);
    }

    // TODO: Send email to users email.
    sendEmailHelper(email, code);
    res.status(200);
})

app.listen(8080, ()=>{
    console.log("server is running on port 8080...");
})