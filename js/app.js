const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

// Event Listener (Method 1 beginner level)
// form.addEventListener('submit',(e)=>{
     
//     e.preventDefault();
//     // console.log('hay');

//     if(username.value === ''){
//         showerror(username,"username is required");
//     }else{
//         showsuccess(username);
//     }

//     if(email.value === ''){
//         showerror(email,"email is required");
//     }else if(!validateEmail(email.value)){
//         showerror(email,"email is not invalid");
//     }else{
//         showsuccess(email);
//     }

//     if(password.value === ''){
//         showerror(password,"password is required");
//     }else{
//         showsuccess(password);
//     }


//     if(cfmpassword.value === ''){
//         showerror(cfmpassword,"comfirm password is required");
//     }else if(password.value != cfmpassword.value){
//         showerror(cfmpassword,"password do not match"); 
//         showerror(password,"password do not match");
//     }else{
//         showsuccess(cfmpassword);
//     }



// });

function showerror(input,message){

     const formgroup = input.parentElement;
     
     formgroup.className = "form-group error";

     const small = formgroup.querySelector('small');

     small.innerText = message;


}

function showsuccess(input){

  const formgroup = input.parentElement;

  formgroup.className = "form-group success";


}


// Check email 
function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(!re.test(input.value)){
        showerror(input,"Email is not valid");
    }
}

// Checkrequired field 

function checkrequired(inputarrs){
    // console.log("hay");
    
    inputarrs.forEach(inputarr=>{
    //    console.log(inputarr.value);

    if(inputarr.value === ''){
        showerror(inputarr,`${getfieldname(inputarr)} is required`);
    }else{
        showsuccess(inputarr);
    }

    });

  
}

// get field name 

function getfieldname(inputarr){
    // console.log('hay');
    return inputarr.id.toUpperCase().charAt(0)+inputarr.id.slice(1);
}

// Check length field 

function checklength(input,min,max){

    if(input.value.length < min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be at less than ${max} characters`);
    }else{
        showsuccess(input);
    }
}

// Check password martch 

function checkpassword(input1,input2){
    if(input1 !== input2){
        showerror(input2,"Password do not match");
    }
}

// Event Listener (Method 2 pro level)
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    // console.log('hay');

    checkrequired([username,email,password,cfmpassword]);

    checklength(username,3,15);
    checklength(password,5,15);

    checkemail(email);

    checkpassword(password,cfmpassword);


});