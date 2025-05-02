const BodyJuguemos=()=>{
    if(window.scrollY > 50){
      document.querySelector("nav").classList.add("scroll");
    }else{
      document.querySelector("nav").classList.remove("scroll");
    }
}

function ComenzarJuego(){
  let imagenesArrastrables = document.querySelectorAll(".imgArrastrables");
  let drop1 = document.querySelector("#divTarjetaSoltar1");
  let drop2 = document.querySelector("#divTarjetaSoltar2");
  let drop3 = document.querySelector("#divTarjetaSoltar3");

  imagenesArrastrables.forEach(imagen => {
    imagen.addEventListener("dragstart", inicioTraslado);
    /* imagen.addEventListener("dragend", finTraslado) */
    /*FUNCION PARA QUE CADA IMAGEN TENGA SU DRAG START*/
    function inicioTraslado(event){
      console.log("Hola");
      imagenesArrastrables.forEach(imagen => {
        imagen.addEventListener("dragstart", arrastrarElemento);
      });
    }
  });
    /*FUNCION PARA PREVENIR DEFAULT EN LOS DROPS*/
  drop1.addEventListener("dragover", prevenirDefault)
  drop1.addEventListener("dragover", prevenirDefault)
  drop1.addEventListener("dragover", prevenirDefault)
  function prevenirDefault(event){
    event.preventDefault()
  }

  drop1.addEventListener("drop", soltarElemento)
  drop2.addEventListener("drop", soltarElemento)
  drop3.addEventListener("drop", soltarElemento)
}

function arrastrarElemento(event){
  elemento=event.target;
  event.dataTransfer.setData("Text", elemento.getAttribute("id"));
}

async function soltarElemento(event){
  event.preventDefault();
  console.log(event);
  let id=event.dataTransfer.getData("Text");
  let imagenID=document.getElementById(id);
  console.log(imagenID)
 /*  imagenID.style.display= 'none'; */
}



ComenzarJuego()