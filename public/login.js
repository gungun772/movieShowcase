/*for login page*/
// let emailValue=document.getElementById("email");
// let numberValue=document.getElementById("number");
// let passwordValue=document.getElementById("password");
// let signBtn=document.querySelector(".sign_button");
// const getlist=()=>{
//     return JSON.parse(localStorage.getItem("email"));
// }
// const getlist1=()=>{
//     return JSON.parse(localStorage.getItem("mobile"));
// }
// const getlist2=()=>{
//     return JSON.parse(localStorage.getItem("password"));
// }
// let localValueEmail=getlist() || [];
// let localValuemobile=getlist1() || [];
// let localValuePassword=getlist2()|| [];
// let valuefilled=()=>{
//     localValueEmail.push(emailValue.value.trim());
//     localValuemobile.push(numberValue.value.trim());
//     localValuePassword.push(passwordValue.value.trim());
//     localValueEmail=[...new Set(localValueEmail)];
//     localValuemobile=[...new Set(localValuemobile)];
//     localValuePassword=[...new Set(localValuePassword)];
//      localStorage.setItem("email",JSON.stringify(localValueEmail));
//      localStorage.setItem("mobile",JSON.stringify(localValuemobile));
//      localStorage.setItem("password",JSON.stringify(localValuePassword));
// }
// signBtn.addEventListener("click",valuefilled);

/*for sign in page*/
// let emailValue=document.getElementById("email");
// let numberValue=document.getElementById("number");
// let passwordValue=document.getElementById("password");
// let signBtn=document.querySelector(".sign_button");
// let localValueEmail;
// let localValuemobile;
// let localValuePassword;
// let valuefilled=()=>{
//     localValueEmail=emailValue.value;
//     localValuemobile=numberValue.value;
//     localValuePassword=passwordValue.value;
//    if(JSON.parse(localStorage.getItem("email")).includes(localValueEmail)){
//         let indexOfEmail=JSON.parse(localStorage.getItem("email")).indexOf(localValueEmail);
//         if(JSON.parse(localStorage.getItem("password")).includes(localValuePassword) && JSON.parse(localStorage.getItem("password")).indexOf(localValuePassword)==indexOfEmail){
//             alert("you are sign-in");
//             window.location="/home";
//         }
//         else{
//             alert("password is inncorrect");
//         }
//     }
// else if(JSON.parse(localStorage.getItem("email")).includes(localValueEmail)=="" || JSON.parse(localStorage.getItem("password")).includes(localValuePassword) && JSON.parse(localStorage.getItem("password"))==""){
//     alert("first fill the form");
// }
//     else{
//         alert("not defined email");
//     }
    // console.log(localStorage.getItem("email").includes(localValueEmail));
    // console.log(JSON.parse(localStorage.getItem("email")).indexOf(localValueEmail));
    // console.log(localStorage.getItem("email").indexOf(localValuePassword));
    
// }

// signBtn.addEventListener("click",valuefilled);





let emailValue = document.getElementById("email");
let numberValue = document.getElementById("number");
let passwordValue = document.getElementById("password");
let signBtn = document.querySelector(".sign_button");

let valuefilled = () => {
    const localValueEmail = emailValue.value.trim();
    const localValuePassword = passwordValue.value.trim();

    const storedEmails = JSON.parse(localStorage.getItem("email")) || [];
    const storedPasswords = JSON.parse(localStorage.getItem("password")) || [];


    if (!localValueEmail || !localValuePassword) {
        alert("Please fill in all fields");
        return;
    }
    const indexOfEmail = storedEmails.indexOf(localValueEmail);
     if(localValueEmail === "admin@gmail.com" && localValuePassword === "admin123") {
        alert("Admin Login Successful");
        window.location.href = "/admin";
        return;
    }
    else if (indexOfEmail !== -1 && storedPasswords[indexOfEmail] === localValuePassword) {
        alert("You are signed in");
        window.location.href = "/home"; // or /home if route is set
        return;
    }
    // ✅ Admin Check First
    
    else if (indexOfEmail !== -1) {
        alert("Password is incorrect");
    }
    else {
        alert("Email not found. Please register first.");
    }
    
    // ✅ Handle incorrect password or email
    if (indexOfEmail !== -1) {
        alert("Password is incorrect");
    }
};


signBtn.addEventListener("click", valuefilled);

