// Script para futuras funciones (ej: buscador, filtros, etc.)

console.log("Página de productos cargada correctamente");

// Ejemplo: Alerta al cargar la página
window.onload = function() {
  console.log("Bienvenido a El Rinconcito");
};
// Buscador de productos
document.getElementById("buscador").addEventListener("keyup", function() {
  let filtro = this.value.toLowerCase();
  let productos = document.querySelectorAll("li");

  productos.forEach(function(item) {
    let texto = item.innerText.toLowerCase();
    if (texto.includes(filtro)) {
      item.style.display = "flex"; // mostrar
    } else {
      item.style.display = "none"; // ocultar
    }
  });
});
