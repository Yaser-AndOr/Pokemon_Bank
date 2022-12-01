function abonar(){
    let cantidad = document.getElementById("cantidad").value; 
    cantidad = parseInt(cantidad);
    if (cantidad >= 1){
        var disp = parseInt(localStorage.getItem("Balance"));
        disp+=cantidad;
        let reg = JSON.parse(localStorage.getItem("Registro"));
        var fecha = new Date();
        let nuevoreg = "Deposito " + cantidad + " " + fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear();
        reg.push(nuevoreg);
        localStorage.setItem("Registro", JSON.stringify(reg));
        var disp = localStorage.setItem("Balance", disp);
        location.href = "../views/deposito3.html";
    }
    else{
        window.alert("Ingrese una cantidad correcta")
    }
}