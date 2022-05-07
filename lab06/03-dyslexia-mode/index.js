/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


const dys = (ev) => {
  var x = document.querySelector("body")
  x.classList.toggle("dyslexia-mode")

  var y = document.querySelector(".content")

  y.classList.toggle("special_div")
  

}




document.querySelector("#dyslexia-toggle").addEventListener('click', dys);