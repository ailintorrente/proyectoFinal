const BodyJuguemos=()=>{
    if(window.scrollY > 50){
      document.querySelector("nav").classList.add("scroll");
    }else{
      document.querySelector("nav").classList.remove("scroll");
    }
}
