function enviarFormulario() {
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;
	var mensaje = document.getElementById("mensaje").value;
	var acepto = document.getElementById("acepto").checked;

	if (nombre == "") {
		alert("Escribe tu nombre.");
	} else if (email == "") {
		alert("Escribe tu correo electrónico.");
	} else if (mensaje == "") {
		alert("Escribe un mensaje.");
	} else if (acepto == false) {
		alert("Tienes que aceptar la politica de privacidad.");
	} else {
		alert("¡Mensaje enviado correctamente!");
	}
}