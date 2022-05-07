var content_size = 1.4
var header_size = 1
const makeBigger = (ev) => {
   

   // var x = window.getComputedStyle(document.querySelector(".content"), null).fontSize
   // console.log(x)
   // x = parseFloat(x)
   // console.log(x)
   // x +=1
   // x = x+"em"
   // console.log(x)
   // document.querySelector(".content").style.fontSize = x

   content_size += 0.2
   header_size+= 0.2
   document.querySelector("p").style.fontSize = content_size + "em"
   document.querySelector("header").style.fontSize = header_size + "em"


   
};

const makeSmaller = () => {
   content_size -= 0.2
   header_size-= 0.2
   document.querySelector("p").style.fontSize = content_size + "em"
   document.querySelector("header").style.fontSize = header_size + "em"
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
