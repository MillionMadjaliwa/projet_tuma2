let but_option1=document.getElementById("option1");
let but_option3=document.getElementById("option3");
let but_option4=document.getElementById("option4");
let but_option6=document.getElementById("opt6");
let but_option7=document.getElementById("opt7");
let but_option8=document.getElementById("opt8");
let bon=document.getElementById("c_b");
let details=document.getElementById("v_d");
let list_bon=document.getElementById("l_b");
let list_b=document.getElementById("list_bons");
let bons_liv=document.getElementById("bons_livre");
let bons_Nliv=document.getElementById("bons_Nlivres");

but_option1.addEventListener("click",() => {
    bon.style.display="block";
    details.style.display="none";
    list_bon.style.display="none";
})
but_option3.addEventListener("click",()=>{
    details.style.display="block";
    list_bon.style.display="none";
    bon.style.display="none";
})
but_option4.addEventListener("click",()=>{
    list_bon.style.display="block";
    details.style.display="none";
    bon.style.display="none";
})
but_option6.addEventListener("click",()=>{
    bons_liv.style.display="block";
})
