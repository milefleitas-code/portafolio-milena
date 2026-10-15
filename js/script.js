var form = document.getElementById("form-contacto");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensaje-ok").style.display = "block";
  form.reset();
});
