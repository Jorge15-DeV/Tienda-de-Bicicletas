function mostrarSeccion(seccionId){
  const secciones= document.querySelectorAll('.productos');
  secciones.forEach(sec => {
    sec.style.display= 'none';
  });
  const seleccionada = document.getElementById(seccionId);
  if(seleccionada){
    seleccionada.style.display='block';
  }
}