/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const def = (ev) => {
   var x = document.getElementById("me")
   x.classList.remove("ocean")
   x.classList.remove("desert")
   x.classList.remove("high-contrast")
}

const des = (ev) => {
   var x = document.getElementById("me")
   x.classList.remove("ocean")
   x.classList.remove("desert")
   x.classList.remove("high-contrast")
   x.classList.add("desert")

}

const oc = (ev) => {
   var x = document.getElementById("me")
   x.classList.remove("ocean")
   x.classList.remove("desert")
   x.classList.remove("high-contrast")
   x.classList.add("ocean")
}

const hig = (ev) => {
   var x = document.getElementById("me")
   x.classList.remove("ocean")
   x.classList.remove("desert")
   x.classList.remove("high-contrast")
   x.classList.add("high-contrast")

}




document.querySelector("#default").addEventListener('click', def);
document.querySelector("#desert").addEventListener('click', des);
document.querySelector("#ocean").addEventListener('click', oc);
document.querySelector("#high-contrast").addEventListener('click', hig);