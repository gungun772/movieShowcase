
let img1=document.querySelector(".show1");
setTimeout(()=>{
    img1.classList.add("img_come1");
},500);
setTimeout(() => {
    img1.classList.add("img_c1");
},1000);


let img3=document.querySelector(".show3");
setTimeout(()=>{
    img3.classList.add("img_come3");
},500);
setTimeout(() => {
    img3.classList.add("img_c3");
},1000);


let img2=document.querySelector(".show2");
setTimeout(()=>{
    img2.classList.add("img_come2");
},3000);
setTimeout(()=>{
    img2.classList.add("img_c2");
},3500);

let img4=document.querySelector(".show4");
setTimeout(()=>{
    img4.classList.add("img_c4");
},5000);
let img5=document.querySelector(".show5");
setTimeout(()=>{
    img5.classList.add("img_c5");
},5000);

let img6=document.querySelector(".show6");
setTimeout(()=>{
    img6.classList.add("img_come6");
},3000);
setTimeout(() => {
    img6.classList.add("img_c6");
},3500);

// let img7=document.querySelector(".show7");
// setTimeout(()=>{
//     img7.classList.add("img_come7");
// },7000);
// setTimeout(() => {
//     img7.classList.add("img_c7")
// }, 7200);



// let sections = document.querySelectorAll('section'); 
// window.onscroll=()=>{
//     sections.style.transform.scale="1.1";
// }
// setTimeout(() => {
//     sections.forEach(section => {
//         section.classList.add('show-animate');
//     });
// }, 1000);

var modal = document.getElementById("login");
var button = document.getElementById("logintwo");
var closes = document.getElementsByClassName("close")[0];
var bodies=document.body;
function modal_show(){
    modal.style.display = "block";
};

button.addEventListener("click",modal_show);

closes.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// bodies.onclick=function(){
//     modal.style.display="none";
// }

let divS=document.querySelector(".nav_div");
let btn=document.querySelector(".nav_btn");
let count=1;
let divShow=()=>{
    if(count%2!=0){
    divS.style.display="block";
    }
    else{
        divS.style.display="none";
    }
    count=count+1;
    }
btn.addEventListener("click",divShow);


/*for login page*/
let emailValue=document.getElementById("email");
let numberValue=document.getElementById("number");
let passwordValue=document.getElementById("password");
let signBtn=document.querySelector(".sign_button");
const getlist=()=>{
    return JSON.parse(localStorage.getItem("email"));
}
const getlist1=()=>{
    return JSON.parse(localStorage.getItem("mobile"));
}
const getlist2=()=>{
    return JSON.parse(localStorage.getItem("password"));
}
let localValueEmail=getlist() || [];
let localValuemobile=getlist1() || [];
let localValuePassword=getlist2()|| [];
let valuefilled=()=>{
    localValueEmail.push(emailValue.value.trim());
    localValuemobile.push(numberValue.value.trim());
    localValuePassword.push(passwordValue.value.trim());
    localValueEmail=[...new Set(localValueEmail)];
    localValuemobile=[...new Set(localValuemobile)];
    localValuePassword=[...new Set(localValuePassword)];
     localStorage.setItem("email",JSON.stringify(localValueEmail));
     localStorage.setItem("mobile",JSON.stringify(localValuemobile));
     localStorage.setItem("password",JSON.stringify(localValuePassword));
     window.location="home.html";
}
signBtn.addEventListener("click",valuefilled);