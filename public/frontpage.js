// for search button
let inputfield=document.getElementById("search");
let inputpara=document.getElementById("inputtext");
handleinput=(event)=>{
    inputpara.style.display="block";
    inputpara.textContent=event.target.value;
}
handleinput1=(event)=>{
    inputpara.style.display="none";
}
handleinput2=(event)=>{
    inputpara.style.display="block";
}
inputfield.addEventListener('input',handleinput);
inputfield.addEventListener('change',handleinput1);
inputfield.addEventListener('click',handleinput2);
document.body.addEventListener('click',handleinput1);

// description
// video1
let shows1=document.querySelector(".shows1");
let showsup1=document.querySelector(".show_para1");
var click1=0;
function handleshows1(){
    click1=click1+1;
    if(click1%2!=0){
    showsup1.classList.add("showDiv");
    showsup1.classList.remove("showDiv2");
}
    else{
        showsup1.classList.add("showDiv2");
        showsup1.classList.remove("showDiv");
    }
}
shows1.addEventListener('click',handleshows1);

//video2
let shows2=document.querySelector(".shows2");
let showsup2=document.querySelector(".show_para2");
var click2=0;
function handleshows2(){
    click2=click2+1;
    console.log(click2);
    if(click2%2!=0){
    showsup2.classList.add("showDiv");
    showsup2.classList.remove("showDiv2");
}
    else{
        showsup2.classList.add("showDiv2");
        showsup2.classList.remove("showDiv1");
    }
}
shows2.addEventListener('click',handleshows2);

//video3
let shows3=document.querySelector(".shows3");
let showsup3=document.querySelector(".show_para3");
var click3=0;
function handleshows3(){
    click3=click3+1;
    if(click3%2!=0){
    showsup3.classList.add("showDiv");
    showsup3.classList.remove("showDiv2");
}
    else{
        showsup3.classList.add("showDiv2");
        showsup3.classList.remove("showDiv");
    }
}
shows3.addEventListener('click',handleshows3);

//video4
let shows4=document.querySelector(".shows4");
let showsup4=document.querySelector(".show_para4");
var click4=0;
function handleshows4(){
    click4=click4+1;
    if(click4%2!=0){
    showsup4.classList.add("showDiv");
    showsup4.classList.remove("showDiv2");
}
    else{
        showsup4.classList.add("showDiv2");
        showsup4.classList.remove("showDiv");
    }
}
shows4.addEventListener('click',handleshows4);

//video5
let shows5=document.querySelector(".shows5");
let showsup5=document.querySelector(".show_para5");
var click5=0;
function handleshows5(){
    click5=click5+1;
    if(click5%2!=0){
    showsup5.classList.add("showDiv");
    showsup5.classList.remove("showDiv2");
}
    else{
        showsup5.classList.add("showDiv2");
        showsup5.classList.remove("showDiv");
    }
}
shows5.addEventListener('click',handleshows5);

//video6
let shows6=document.querySelector(".shows6");
let showsup6=document.querySelector(".show_para6");
var click6=0;
function handleshows6(){
    click6=click6+1;
    if(click6%2!=0){
    showsup6.classList.add("showDiv");
    showsup6.classList.remove("showDiv2");
}
    else{
        showsup6.classList.add("showDiv2");
        showsup6.classList.remove("showDiv");
    }
}
shows6.addEventListener('click',handleshows6);

//video7
let shows7=document.querySelector(".shows7");
let showsup7=document.querySelector(".show_para7");
var click7=0;
function handleshows7(){
    click7=click7+1;
    if(click7%2!=0){
    showsup7.classList.add("showDiv");
    showsup7.classList.remove("showDiv2");
}
    else{
        showsup7.classList.add("showDiv2");
        showsup7.classList.remove("showDiv");
    }
}
shows7.addEventListener('click',handleshows7);

//video8
let shows8=document.querySelector(".shows8");
let showsup8=document.querySelector(".show_para8");
var click8=0;
function handleshows8(){
    click8=click8+1;
    if(click8%2!=0){
    showsup8.classList.add("showDiv");
    showsup8.classList.remove("showDiv2");
}
    else{
        showsup8.classList.add("showDiv2");
        showsup8.classList.remove("showDiv");
    }
}
shows8.addEventListener('click',handleshows8);

//video9
let shows9=document.querySelector(".shows9");
let showsup9=document.querySelector(".show_para9");
var click9=0;
function handleshows9(){
    click9=click9+1;
    if(click9%2!=0){
    showsup9.classList.add("showDiv");
    showsup9.classList.remove("showDiv2");
}
    else{
        showsup9.classList.add("showDiv2");
        showsup9.classList.remove("showDiv");
    }
}
shows9.addEventListener('click',handleshows9);

//video10
let shows10=document.querySelector(".shows10");
let showsup10=document.querySelector(".show_para10");
var click10=0;
function handleshows10(){
    click10=click10+1;
    if(click10%2!=0){
    showsup10.classList.add("showDiv");
    showsup10.classList.remove("showDiv2");
}
    else{
        showsup10.classList.add("showDiv2");
        showsup10.classList.remove("showDiv");
    }
}
shows10.addEventListener('click',handleshows10);

//video11
let shows11=document.querySelector(".shows11");
let showsup11=document.querySelector(".show_para11");
var click11=0;
function handleshows11(){
    click11=click11+1;
    if(click11%2!=0){
    showsup11.classList.add("showDiv");
    showsup11.classList.remove("showDiv2");
}
    else{
        showsup11.classList.add("showDiv2");
        showsup11.classList.remove("showDiv");
    }
}
shows11.addEventListener('click',handleshows11);

//video12
let shows12=document.querySelector(".shows12");
let showsup12=document.querySelector(".show_para12");
var click12=0;
function handleshows12(){
    click12=click12+1;
    if(click12%2!=0){
    showsup12.classList.add("showDiv");
    showsup12.classList.remove("showDiv2");
}
    else{
        showsup12.classList.add("showDiv2");
        showsup12.classList.remove("showDiv");
    }
}
shows12.addEventListener('click',handleshows12);

//vedio13
let shows13=document.querySelector(".shows13");
let showsup13=document.querySelector(".show_para13");
var click13=0;
function handleshows13(){
    click13=click13+1;
    if(click13%2!=0){
    showsup13.classList.add("showDiv");
    showsup13.classList.remove("showDiv2");
}
    else{
        showsup13.classList.add("showDiv2");
        showsup13.classList.remove("showDiv");
    }
}
shows13.addEventListener('click',handleshows13);

//video14
let shows14=document.querySelector(".shows14");
let showsup14=document.querySelector(".show_para14");
var click14=0;
function handleshows14(){
    click14=click14+1;
    if(click14%2!=0){
    showsup14.classList.add("showDiv");
    showsup14.classList.remove("showDiv2");
}
    else{
        showsup14.classList.add("showDiv2");
        showsup14.classList.remove("showDiv");
    }
}
shows14.addEventListener('click',handleshows14);

//video15
let shows15=document.querySelector(".shows15");
let showsup15=document.querySelector(".show_para15");
var click15=0;
function handleshows15(){
    click15=click15+1;
    if(click15%2!=0){
    showsup15.classList.add("showDiv");
    showsup15.classList.remove("showDiv2");
}
    else{
        showsup15.classList.add("showDiv2");
        showsup15.classList.remove("showDiv");
    }
}
shows15.addEventListener('click',handleshows15);

//video16
let shows16=document.querySelector(".shows16");
let showsup16=document.querySelector(".show_para16");
var click16=0;
function handleshows16(){
    click16=click16+1;
    if(click16%2!=0){
    showsup16.classList.add("showDiv");
    showsup16.classList.remove("showDiv2");
}
    else{
        showsup16.classList.add("showDiv2");
        showsup16.classList.remove("showDiv");
    }
}
shows16.addEventListener('click',handleshows16);

//video17
let shows17=document.querySelector(".shows17");
let showsup17=document.querySelector(".show_para17");
var click17=0;
function handleshows17(){
    click17=click17+1;
    if(click17%2!=0){
    showsup17.classList.add("showDiv");
    showsup17.classList.remove("showDiv2");
}
    else{
        showsup17.classList.add("showDiv2");
        showsup17.classList.remove("showDiv");
    }
}
shows17.addEventListener('click',handleshows17);

//video18
let shows18=document.querySelector(".shows18");
let showsup18=document.querySelector(".show_para18");
var click18=0;
function handleshows18(){
    click18=click18+1;
    if(click18%2!=0){
    showsup18.classList.add("showDiv");
    showsup18.classList.remove("showDiv2");
}
    else{
        showsup18.classList.add("showDiv2");
        showsup18.classList.remove("showDiv");
    }
}
shows18.addEventListener('click',handleshows18);

//video19
let shows19=document.querySelector(".shows19");
let showsup19=document.querySelector(".show_para19");
var click19=0;
function handleshows19(){
    click19=click19+1;
    if(click19%2!=0){
    showsup19.classList.add("showDiv");
    showsup19.classList.remove("showDiv2");
}
    else{
        showsup19.classList.add("showDiv2");
        showsup19.classList.remove("showDiv");
    }
}
shows19.addEventListener('click',handleshows19);

//video20
let shows20=document.querySelector(".shows20");
let showsup20=document.querySelector(".show_para20");
var click20=0;
function handleshows20(){
    click20=click20+1;
    if(click20%2!=0){
    showsup20.classList.add("showDiv");
    showsup20.classList.remove("showDiv2");
}
    else{
        showsup20.classList.add("showDiv2");
        showsup20.classList.remove("showDiv");
    }
}
shows20.addEventListener('click',handleshows20);

//video21
let shows21=document.querySelector(".shows21");
let showsup21=document.querySelector(".show_para21");
var click21=0;
function handleshows21(){
    click21=click21+1;
    if(click21%2!=0){
    showsup21.classList.add("showDiv");
    showsup21.classList.remove("showDiv2");
}
    else{
        showsup21.classList.add("showDiv2");
        showsup21.classList.remove("showDiv");
    }
}
shows21.addEventListener('click',handleshows21);

//video22
let shows22=document.querySelector(".shows22");
let showsup22=document.querySelector(".show_para22");
var click22=0;
function handleshows22(){
    click22=click22+1;
    if(click22%2!=0){
    showsup22.classList.add("showDiv");
    showsup22.classList.remove("showDiv2");
}
    else{
        showsup22.classList.add("showDiv2");
        showsup22.classList.remove("showDiv");
    }
}
shows22.addEventListener('click',handleshows22);

//video23
let shows23=document.querySelector(".shows23");
let showsup23=document.querySelector(".show_para23");
var click23=0;
function handleshows23(){
    click23=click23+1;
    if(click23%2!=0){
    showsup23.classList.add("showDiv");
    showsup23.classList.remove("showDiv2");
}
    else{
        showsup23.classList.add("showDiv2");
        showsup23.classList.remove("showDiv");
    }
}
shows23.addEventListener('click',handleshows23);

//video24
let shows24=document.querySelector(".shows24");
let showsup24=document.querySelector(".show_para24");
var click24=0;
function handleshows24(){
    click24=click24+1;
    if(click24%2!=0){
    showsup24.classList.add("showDiv");
    showsup24.classList.remove("showDiv2");
}
    else{
        showsup24.classList.add("showDiv2");
        showsup24.classList.remove("showDiv");
    }
}
shows24.addEventListener('click',handleshows24);

//video25
let shows25=document.querySelector(".shows25");
let showsup25=document.querySelector(".show_para25");
var click25=0;
function handleshows25(){
    click25=click25+1;
    if(click25%2!=0){
    showsup25.classList.add("showDiv");
    showsup25.classList.remove("showDiv2");
}
    else{
        showsup25.classList.add("showDiv2");
        showsup25.classList.remove("showDiv");
    }
}
shows25.addEventListener('click',handleshows25);

//video26
let shows26=document.querySelector(".shows26");
let showsup26=document.querySelector(".show_para26");
var click26=0;
function handleshows26(){
    click26=click26+1;
    if(click26%2!=0){
    showsup26.classList.add("showDiv");
    showsup26.classList.remove("showDiv2");
}
    else{
        showsup26.classList.add("showDiv2");
        showsup26.classList.remove("showDiv");
    }
}
shows26.addEventListener('click',handleshows26);

//video27
let shows27=document.querySelector(".shows27");
let showsup27=document.querySelector(".show_para27");
var click27=0;
function handleshows27(){
    click27=click27+1;
    if(click27%2!=0){
    showsup27.classList.add("showDiv");
    showsup27.classList.remove("showDiv2");
}
    else{
        showsup27.classList.add("showDiv2");
        showsup27.classList.remove("showDiv");
    }
}
shows27.addEventListener('click',handleshows27);


// to show image when click on button
//button1
let show_like1=document.querySelector(".like_button");
let show_dislike1=document.querySelector(".dislike_button");
var clic1=0;
var cli1=0;
function handle_img1(){
    clic1=clic1+1;
    if(clic1%2!=0){
        show_like1.style.color="blue";}
    else{
        show_like1.style.color="white";
    }
    
}
function handle_imge1(){
    cli1=cli1+1;
    if(cli1%2!=0){
        show_dislike1.style.color="blue";}
    else{ 
        show_dislike1.style.color="white";
    }
    
}
show_like1.addEventListener("click",handle_img1);
show_dislike1.addEventListener("click",handle_imge1);

//button2
let show_like2=document.querySelector(".like_button2");
let show_dislike2=document.querySelector(".dislike_button2");
var clic2=0;
var cli2=0;
function handle_img2(){
    clic2=clic2+1;
    if(clic2%2!=0){
        show_like2.style.color="blue";
        }
    else{
        show_like2.style.color="white";
    }
    
}
function handle_imge2(){
    cli2=cli2+1;
    if(cli2%2!=0){
        show_dislike2.style.color="blue";}
    else{ 
        show_dislike2.style.color="white";
    }
    
}
show_like2.addEventListener("click",handle_img2);
show_dislike2.addEventListener("click",handle_imge2);


/*slider1*/
let slide=document.querySelectorAll(".slider");
// slide.forEach(
//     (slide,index)=>{
//         slide.style.left=`${index*34.5}%`;
//     }
// );
let prev1=document.getElementById("goprev1");
let next1=document.getElementById("gonext1");
let btnCounts=0;
const slideImage2=()=>{
    slide.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${btnCounts*120}%)`;
        }
    )
}
const prevoius=()=>{
    btnCounts--;
    slideImage2();
}
const nexts=()=>{
    btnCounts++;
    slideImage2();
}
console.log(slide)
prev1.addEventListener("click",prevoius);
next1.addEventListener("click",nexts);


/*slider2*/
let slide1=document.querySelectorAll(".slider1");
// slide1.forEach(
//     (slide1,index)=>{
//         slide1.style.left=`${index*33}%`;
//     }
// );
let prev2=document.getElementById("goprev2");
let next2=document.getElementById("gonext2");
let btnCount=0;
const slideImage1=()=>{
    slide1.forEach(
        (slide1)=>{
            slide1.style.transform=`translateX(-${btnCount*120}%)`;
        }
    )
}
const prevoius1=()=>{
    btnCount--;
    slideImage1();
};
const nexts1=()=>{
    btnCount++;
    slideImage1();
}
prev2.addEventListener("click",prevoius1);
next2.addEventListener("click",nexts1);


/*slider3*/
let slide2=document.querySelectorAll(".slider2");
// slide2.forEach(
//     (slide2,index)=>{
//         slide2.style.left=`${index*33}%`;
//     }
// );
let prev3=document.getElementById("goprev3");
let next3=document.getElementById("gonext3");
let btnCount3=0;
const slideImage3=()=>{
    slide2.forEach(
        (slide2)=>{
            slide2.style.transform=`translateX(-${btnCount3*120}%)`;
        }
    )
}
const previous2=()=>{
    btnCount3--;
    slideImage3();
}
const nexts2=()=>{
    btnCount3++;
    slideImage3();
}
prev3.addEventListener("click",previous2);
next3.addEventListener("click",nexts2);


