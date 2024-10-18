function login() {
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value

    //Validar que no estén vacíos.
    if(email !== "" && pass !== "") {
        if(email === "email@gmail.com" && pass === "1234") {
            window.location = "./index2.html"
        } else {
            alert("email@gmail.com / 1234")
        }
    } else {
        alert("Por favor complete los campos para continuar")
    }
}
