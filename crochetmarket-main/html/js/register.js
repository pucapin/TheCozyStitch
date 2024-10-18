

function signUp() {
    let user = document.getElementById("user").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    let pass2 = document.getElementById("pass2").value

    //Validar que no estén vacíos.
    if (email !== "" && pass !== "" && user !== "" && pass2 !== "") {
        if (user.length >= 5) {
            if (pass === pass2) {
                window.location = "./index2.html"; // Redirige si todo está correcto
            } else {
                alert("Las contraseñas no coinciden");
            }
        } else {
            alert("El usuario tiene menos de 5 caracteres");
        }
    } else {
        alert("Por favor complete los campos para continuar");
    }
}