
function cambiarColor() {
  const container = document.getElementById("container");
  const colores = ["red", "green", "yellow", "purple", "orange"];
  container.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}

function cambiarForma() {
  const container = document.getElementById("container");
  container.style.borderRadius = container.style.borderRadius === "50%" ? "0" : "50%";
}

function resetear() {
  const container = document.getElementById("container");
  container.style.backgroundColor = "blue";
  container.style.borderRadius = "0";
}
