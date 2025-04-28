/*const navMenu = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 110) { // Adjust the threshold as needed
    navMenu.classList.add("navFadeIn"); // Apply a new class for a fade-in effect
  } else {
    navMenu.classList.remove("navFadIn");
  }
});*/


/*CONTROLES VIDEO PLAY PAUSE*/
let videoHistoria = document.querySelector("#videoHistoria")

function iniciarVideo(){
  videoHistoria.play()
}
function pausarVideo(){
  videoHistoria.pause()
}



/*ON SCROLL*/
const MenuScroll=()=>{
  if(window.scrollY > 50){
    document.querySelector("nav").classList.add("scroll");
  }else{
    document.querySelector("nav").classList.remove("scroll");
  }
}


