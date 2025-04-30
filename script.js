/*ON SCROLL*/
const MenuScroll=()=>{
  if(window.scrollY > 50){
    document.querySelector("nav").classList.add("scroll");
  }else{
    document.querySelector("nav").classList.remove("scroll");
  }
  if(window.scrollY >window.innerHeight*0.5){
    document.querySelector("#tarjetaContenidoHistoria").style="animation: animationContenidoIzquierda 2s forwards ease-in-out; animation-delay: 1s";
    document.querySelector("#tarjetaContenidoJuguemos").style="animation: animationContenidoDerecha 2s forwards ease-in-out;";
  }
}