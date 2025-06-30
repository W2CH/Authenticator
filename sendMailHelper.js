const nodemailer = require("nodemailer");

async function sendEmail(usersEmail, code){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'modeb994@gmail.com',
            pass: 'flnglbgrdrswemqa'
        }
    })
    const mailOptions = {
        to : String(usersEmail),
        subject : 'Verification code',
        text : 'This is the verification code you requested ' + String(code)
    }
    try{
        const info = await transporter.sendMail(mailOptions)
        console.log("Email was sent", info);
    }catch(err){
        console.log(err);
    }
}

module.exports = sendEmail