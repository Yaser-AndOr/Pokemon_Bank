function pagar(){
    var combo = document.getElementById("selector");
    combo = combo.options[combo.selectedIndex];
    var eleccion = combo.text.replaceAll(" ", "_");
    let pago = parseInt(document.getElementById("cantidad").value);
    if (pago >= 1 ){
        if (combo.value != ""){
            var disp = parseInt(localStorage.getItem("Balance"));
            disp-=pago;
            let reg = JSON.parse(localStorage.getItem("Registro"));
            var fecha = new Date();
            let nuevoreg = eleccion + " " + pago + " " + fecha.getDate() + "-" + fecha.getMonth() + "-" + fecha.getFullYear();
            reg.push(nuevoreg);
            localStorage.setItem("Registro", JSON.stringify(reg));
            var disp = localStorage.setItem("Balance", disp);
            location.href = "../views/finPago.html";
        } 
        else{
            window.alert("Seleccione un servicio")
        }
    }
    else{
        window.alert("Ingrese una cantidad correcta")
    }

}