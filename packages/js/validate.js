//Validation
function validate(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const feed = document.getElementById("feed").value;
     if(name == ""|| email == "" || subject == "" || feed ==""){
        alert("The form is not fully filled!");
        // return false;
     }else{
        alert("nice");
        // return true;
     }
}