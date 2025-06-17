window.onload = function(){
    document.getElementById("verify-email-view").hidden = true;
    document.getElementById("welcome-view").hidden = true;
}

addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("get-email").addEventListener("click", async ()=>{
        var userEmail = document.getElementById("user-email").value;
        if(!validEmail(userEmail)){
            console.log("This is a INVALID email.");
            return
        }
        // TODO: append "@gmail.com" to user email if the user did not include it.
        if(!userEmail.includes("@gmail.com")){
            userEmail = userEmail + "@gmail.com"
        }
        console.log(userEmail);

        try{
            const response = await fetch('http://localhost:8080/createCode',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email : userEmail
                })
            });
        }catch(err){
            console.log(err);
        }
    })
})

// TODO: Come back to this at some point and check if there are any more validations needed to add or remove.
function validEmail(userEmail){
    // TODO: Check that every character is either a number a letter from the alphabet or a period.
    for(let i = 0; i < userEmail.length; i++){
        if((userEmail.charCodeAt(i) < 97 || userEmail.charCodeAt(i) > 122) && (userEmail.charCodeAt(i) < 48 || userEmail.charCodeAt(i) > 57)
            && userEmail.charCodeAt(i) !== 46 && userEmail.charCodeAt(i) !== 64){
            console.log("1Here!")
            return false;
        }
    }
    return true;
}