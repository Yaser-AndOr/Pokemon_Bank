function comprobar(){
    if(document.getElementById("psswrd").value == "1234"){
        let activado = localStorage.getItem("Act");
        if (activado != 1){
            localStorage.setItem("Balance", 500);
            let reg = []; 
            localStorage.setItem("Registro", JSON.stringify(reg));
            localStorage.setItem("Act", 1);
        }
        location.href = "../views/menu.html";
    }
    else {
        window.alert("Ingrese la contraseña correcta");
    }
}
