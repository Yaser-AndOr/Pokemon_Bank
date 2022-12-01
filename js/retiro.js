function retiro(cantidad){
    cantidad = parseInt(cantidad);
    var disp = parseInt(localStorage.getItem("Balance"));
    if (cantidad > disp){
        window.alert("Dinero insuficiente")
    } else {
        disp -= cantidad;
        localStorage.setItem("Balance", disp);
        let reg = JSON.parse(localStorage.getItem("Registro"));
        var fecha = new Date();
        let nuevoreg = "Retiro " + cantidad + " " + fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear();
        reg.push(nuevoreg);
        localStorage.setItem("Registro", JSON.stringify(reg));
        location.href = "../views/menu.html";
    }
}