function comprobar(){
    if(document.getElementById("psswrd").value == "1234"){
        location.href = "/PROYECTOLIC/views/menu.html";
        localStorage.setItem("Balance", 500);
        let reg = []; 
        localStorage.setItem("Registro", JSON.stringify(reg));
    }
    else {
        window.alert("Ingrese la contraseña correcta");
    }
}
