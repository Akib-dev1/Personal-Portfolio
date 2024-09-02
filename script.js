let navButton=document.querySelector("#menubutton");
let navMenu=document.querySelector("#navmenu");
let navClose=document.querySelector("#menuclose");
navButton.addEventListener("click",()=>{
    navMenu.style.display="initial";
    navClose.style.display="initial";
    navButton.style.display="none";
});
navClose.addEventListener("click",()=>{
    navMenu.style.display="none";
    navClose.style.display="none";
    navButton.style.display="initial";
});
let opt1=document.querySelector("#opt1");
let opt2=document.querySelector("#opt2");
let opt3=document.querySelector("#opt3");
let jasp=document.querySelectorAll(".jsp");
let dasp=document.querySelector(".dsp");
opt1.addEventListener("click",()=>{
    opt1.classList.add("brd");
    opt2.classList.remove("brd");
    opt3.classList.remove("brd");
    jasp.forEach((x)=>{
        x.style.display="inline";
    });
    dasp.style.display="inline";
});
opt2.addEventListener("click",()=>{
    opt2.classList.add("brd");
    opt1.classList.remove("brd");
    opt3.classList.remove("brd");
    jasp.forEach((x)=>{
        x.style.display="none";
    });
    dasp.style.display="inline";
});
opt3.addEventListener("click",()=>{
    opt3.classList.add("brd");
    opt2.classList.remove("brd");
    opt1.classList.remove("brd");
    dasp.style.display="none";
    jasp.forEach((x)=>{
        x.style.display="inline";
    });
});
