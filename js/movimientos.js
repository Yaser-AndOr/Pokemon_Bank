function tablaload() {
    let tabla = "";
    let reg = JSON.parse(localStorage.getItem("Registro"));
    reg.forEach(subreg => {
        elements = subreg.split(" ");
        tabla += "" +
        "<tr>"+
            "<td>"+elements[0].replaceAll("_", " ")+"</td>"+
            "<td>"+elements[2]+"</td>"+
            "<td>"+elements[1]+"</td>"+
        "</tr>";
    });
    document.getElementById("tabla").innerHTML += tabla;
}

function balanceload(){
    let balance = parseInt(localStorage.getItem("Balance"));
    document.getElementById("saldo").innerHTML = "$"+ balance;
}

