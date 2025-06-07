function mostrarSeccion(seccionId){
  const seccion= document.getElementById(seccionId);
  if(seccion){
    seccion.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}