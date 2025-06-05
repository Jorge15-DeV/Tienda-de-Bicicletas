function cambiarColor() {
  const colores = ["#f4f4f4", "#d0e8f2", "#ffe8cc", "#e0ffe0", "#fff0f5"];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor;

  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);

  document.body.style.backgroundColor = nuevoColor;
}