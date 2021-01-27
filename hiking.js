
const X = document.querySelector("#X");
const bar = document.querySelector("#P");
const menu = document.querySelector(".menu-list");
const nav = document.querySelector("nav");

//------ Functions 

function startB(item) {
    item.classList.add("on");
}
function endB(item) {
    item.classList.remove("on");
}

bar.addEventListener("click",function (){
    if(X.className != "oo") {
        X.classList.remove("aa");
        X.classList.add("oo");
        bar.innerText = `I`;
        menu.style.transform = "rotateY(0deg) translate(0%,0%)";
        menu.style.transition = "transform 500ms 500ms";
        menu.style.opacity = "1";

    }  else {
        X.classList.add("aa");
        X.classList.remove("oo");
        bar.innerText = `A`;
        menu.style.transform = "rotateY(90deg) translate(300%,0%)";
        menu.style.transition = "500ms 0s";
        menu.style.opacity = "0";
    }
    
});


