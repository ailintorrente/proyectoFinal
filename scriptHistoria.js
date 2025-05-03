/*CONTROLES VIDEO PLAY PAUSE*/
let videoHistoria = document.querySelector("#videoHistoria")
/* function iniciarVideo(){
  videoHistoria.play()
}
function pausarVideo(){
  videoHistoria.pause()
} */
const BodyHistoria=()=>{
    if(window.scrollY > 50){
        document.querySelector("nav").classList.add("scroll");
      }else{
        document.querySelector("nav").classList.remove("scroll");
      }

    if(window.scrollY > window.innerHeight*0.2){
    document.querySelector("#imgHistoria1").style="animation: animationHistoria_imgIzquierda 1.5s forwards ease-out;";
    document.querySelector("#textoHistoria1").style="animation: animationHistoria_textoDerecha 1.5s forwards linear;";
    }
    if(window.scrollY > window.innerHeight*0.8){
        document.querySelector("#imgHistoria2").style="animation: animationHistoria_imgDerecha 1.5s forwards ease-out;";
        document.querySelector("#textoHistoria2").style="animation: animationHistoria_textoIzquierda 1.5s forwards linear;";
    }
    if(window.scrollY > window.innerHeight*1.5){
        document.querySelector("#imgHistoria3").style="animation: animationHistoria_imgIzquierda 1.5s forwards ease-out;";
        document.querySelector("#textoHistoria3").style="animation: animationHistoria_textoDerecha 1.5s forwards linear;";
    }
}

let transformarTiempoActual=(tiempo)=>{
  if(tiempo<60){
      if(tiempo.toFixed(0)<10){
          return `00:0${tiempo.toFixed(0)}`
      }
      return `00:${tiempo.toFixed(0)}`
      //metodo toFixed(cant. decimales)
  }else{
      console.log(tiempo/60 )
      let minutos=parseInt(tiempo/60) //-> cantidad de minutos, solo tomo el valor entero
      let segundos= (tiempo/60 - minutos)*60
      if(segundos<10){
          return `${minutos}:0${segundos.toFixed(0)}`
      }
      return `${minutos}:${segundos.toFixed(0)}`
  }
  //
}
let tiempoActual;
function iniciarVideo(){
  videoHistoria.play();
  tiempoActual=setInterval(()=>{
  document.querySelector("#textDuracionVideo").innerHTML=`${transformarTiempoActual(videoHistoria.currentTime)}`
},1000);
};
function pausarVideo(){
  videoHistoria.pause();
  clearInterval(tiempoActual);
};