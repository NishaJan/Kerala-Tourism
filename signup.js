
    function validate(){
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
    var fname = document.getElementById("fname").value;
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    var fnameformat = /^([a-zA-Z]{2,15}$)/
    var phformat =/^\(?([1-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    var emailformat=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    var pwdformat=/^^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    e=document.getElementById("txt");
    length = document.getElementById("pwd").value.length;
   
    if(fnameformat.test(fname)){
        document.getElementById("fnameerror").innerHTML=" ";
    }else{
        document.getElementById("fnameerror").innerHTML="** Invalid First Name"
        return false;
    }
    if(phformat.test(phno)){
        document.getElementById("Pherror").innerHTML=" ";
    }else{
        document.getElementById("Pherror").innerHTML="** Invalid Phone Number"
        return false;
    }
    if(emailformat.test(email)){
        document.getElementById("emailerror").innerHTML=" ";
    }else{
        document.getElementById("emailerror").innerHTML="** Invalid email"
        return false;
    }
    if(pwdformat.test(pwd) && (length>8)){
        document.getElementById("pwderror").innerHTML=" ";
        
        e.innerHTML = "Strong";
        e.style.color="black";
        e.style.border = "1px solid green";
        e.style.backgroundColor ="#00FF00";
    }else if(length<5){ 
        document.getElementById("pwderror").innerHTML="** Must contain at least one number,one uppercase,one lowercase and one special character, minimum 8 characters";
        e.innerHTML = "Poor" ;
        e.style.color = "black";
        e.style.border = "1px solid red";
        e.style.backgroundColor ="red";
        return false;
    }else{
        document.getElementById("pwderror").innerHTML="** Short password,Must contain at least one number,one uppercase,one lowercase and one special character";
        e.innerHTML = "Medium";
        e.style.color = "black";
        e.style.border = "1px solid orange";
        e.style.backgroundColor ="orange"
        return false;
    }

    if(pwd==cpwd){
        document.getElementById("pwderror").innerHTML=" ";
        console.log(pwd)
    }else{    
        document.getElementById("cpwderror").innerHTML=" ** Password doesnot match";
        return false; 
    }
} 
 // e=document.getElementById("txt");
    // length = document.getElementById("pwd").value.length;
    // function pwdstr(){
    // if(length==0){
    //     e.innerHTML =" ";
    //     document.getElementById("pwd").style.border= " ";
    // }else if(length<5){
    //     e.innerHTML = "Poor" ;
    //     e.style.color = "red";
    //     document.getElementById("pwd").style.border = "1px solid red";
    // }else if(length<9){
    //     e.innerHTML = "Medium";
    //     e.style.color = "orange";
    //     document.getElementById("pwd").style.border = "1px solid orange";
    // }else{
    //     e.innerHTML = "Strong";
    //     e.style.color="#00FF00";
    // }    

   
