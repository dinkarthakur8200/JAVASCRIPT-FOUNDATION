function passwordValidator(enteredPassword , confirmedpassword){
    if(enteredPassword === confirmedpassword){
        console.log("Password matched. Password validation succesfull.")
    }
    else{
        console.log("Password did not matched. Password validation unsuccessfull.")
    }
}
// Example usage .. 
const password1 = "dinkarthkur123" ;
const password2 = "dinkarthakur123" ;

passwordValidator(password1 ,password2);
