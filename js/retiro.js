function retiro(cantidad){
    var disp = localStorage.getItem("Balance");
    if (cantidad > disp){
        window.alert("Dinero insuficiente")
    } else {
        disp -= cantidad;
        localStorage.setItem("Balance", disp);
        let reg = JSON.parse(localStorage.getItem("Registro"));
        window.alert(reg);
        var fecha = new Date();
        let nuevoreg = "Retiro " + cantidad + " " + fecha.getDate + "-" + fecha.getFullYear;
        reg.push(nuevoreg);
        window.alert(reg);
        localStorage.setItem("Registro", JSON.stringify(reg));
    }
}