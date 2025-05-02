const BodyJuguemos=()=>{
    if(window.scrollY > 50){
      document.querySelector("nav").classList.add("scroll");
    }else{
      document.querySelector("nav").classList.remove("scroll");
    }
}
cantidad = 0
h2=document.querySelector("#tituloJuego")
zonaJuego=document.querySelector(".divJuego")
// la verificacion la armo con un objeto que tiene el orden correcto
const ordenCorrecto = {
  divTarjetaSoltar1: "Rompe1",
  divTarjetaSoltar2: "Rompe2",
  divTarjetaSoltar3: "Rompe3"
};
function ComenzarJuego(){
  let imagenesArrastrables = document.querySelectorAll(".imgArrastrables");
  const zonasDrop = document.querySelectorAll(".divTarjetaSoltar");

  imagenesArrastrables.forEach((imagen) => {
    imagen.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  });

  zonasDrop.forEach((zona) => {
    // Permite soltar
    zona.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    // Cuando se suelta la imagen
    zona.addEventListener("drop", (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain");
      const imagen = document.getElementById(id);
      if (!zona.querySelector("img")) {
        cantidad++;
        if (cantidad === 2) {
          btnReiniciar.style.visibility = "visible";
        }
      }
      imagen.style.transform = "none";
      imagen.style.width="100%";
      imagen.style.height="100%";
      zona.innerHTML = "";
      // Para que no se agregue una segunda imagen si ya hay una
      if (!zona.querySelector("img")) {
        zona.appendChild(imagen);
      }
      console.log(cantidad);
      // Verificacion de cantidad de imagenes que se soltaron
      if (cantidad === 3) {
        let esCorrecto = true;
        for (const contenedorId in ordenCorrecto) {
          const contenedor = document.getElementById(contenedorId);
          const imagenDentro = contenedor.querySelector("img");
          if (!imagenDentro || imagenDentro.id !== ordenCorrecto[contenedorId]) {
            esCorrecto = false;
            break;
          }
        }
        // Si es correcto o no
        if (esCorrecto) {
          setTimeout(()=>{
              zonasDrop.forEach((zona) => {
              zona.style ="border:none; transform: scale(1.2); transition-duration:3s; gap:0;";
              document.querySelector("#divJuego").style="gap:0";
            }); 
          },100)
          setTimeout(()=>{
            zonasDrop.forEach((zona) => {
              zona.style ="visibility:hidden; transform: scale(1); transition-duration:2s; border:none; opacity:0";
            });
            h2.innerHTML="Felicidades!!!<br>Puzzle correctamente resuelto";
            h2.style="animation: animacionJuego 3s forwards; position:relative;"
          },4000)
        } else {
          setTimeout(()=>{
            zonasDrop.forEach((zona) => {
              zona.style ="border:none; transform: scale(1.2); transition-duration:3s; gap:0;";
              zonaJuego.style="gap:0"
            });
          },100)
          setTimeout(()=>{
            zonasDrop.forEach((zona) => {
              zona.style ="transform: scale(1); transition-duration:2s; border:none; opacity:50%;";
            });
            h2.classList.add("h2Incorrecto");
            h2.innerHTML="Lo sentimos ,Puzzle no resuelto.<br>Prueba otra vez";
          },3000)
        }
      }
    });
  });


  // Boton reiniciar que recarga la página 
  const btnReiniciar = document.getElementById("btnReinicio");
  btnReiniciar.addEventListener("click", () => {
    location.reload();
  });
}
ComenzarJuego()