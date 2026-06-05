function enviarFormulario() {
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;
	var mensaje = document.getElementById("mensaje").value;
	var politica = document.getElementById("politica-privacidad").checked;

	if (nombre == "") {
		alert("Escribe tu nombre.");
	} else if (email == "") {
		alert("Escribe tu correo electrónico.");
	} else if (mensaje == "") {
		alert("Escribe un mensaje.");
	} else if (politica == false) {
		alert("Tienes que aceptar la politica de privacidad.");
	} else {
		alert("¡Mensaje enviado correctamente!");
	}
}
