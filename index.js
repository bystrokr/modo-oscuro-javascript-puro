//obtenemos el botón y el body
let body = document.body;
let boton = document.getElementById("boton");
//obtenemos la preferencia del usuario
const preferencia = localStorage.getItem("tema")
  ? localStorage.getItem("tema")
  : null;

if (preferencia) {
  body.classList.add(preferencia);

  if (preferencia === "oscuro") {
    body.classList.remove("claro");
    body.classList.add("oscuro");
  }
}
//detectamos el evento al hacer click en el botón
boton.addEventListener("click", () => {
  if (body.classList.contains("claro")) {
    body.classList.remove("claro");
    body.classList.add("oscuro");
    //guardamos la preferencia del usuario
    localStorage.setItem("tema", "oscuro");
  } else {
    body.classList.remove("oscuro");
    body.classList.add("claro");
    localStorage.setItem("tema", "claro");
  }
});
