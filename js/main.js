document.querySelector("input[class=agregar]").addEventListener("click", function (e) {
    e.preventDefault();
    var nombre = document.querySelector("input[name=nombre]");
    var nota = document.querySelector("input[name=nota]");
    if (!nombre.value) {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
    if (isNaN(parseInt(nota.value)) || (parseInt(nota.value) < 0 && parseInt(nota.value) > 10)) {
        nota.classList.add("error");
        return;
    }
    nota.classList.remove("error");

    var tr = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var txt = document.createTextNode(nombre.value);

    tdNombre.appendChild(txt);
    tdNombre.className = "nombre";

    var tdNota = document.createElement("td");

    txt = document.createTextNode(nota.value);

    tdNota.appendChild(txt);

    tdNota.className = "right";

    var tdRemove = document.createElement("td");
    var buttonRemove = document.createElement("input")

    buttonRemove.type = "button";
    buttonRemove.value = "Eliminar";

    buttonRemove.onclick = function () {
        this.parentElement.parentElement.remove();
        if (document.getElementById("listado").querySelector("tbody").querySelectorAll("tr").length == 0) {
            document.getElementById("listado").classList.add("hide");
            document.getElementById("calculos").classList.add("hide");
        }
        calculos();
    };

    tdRemove.appendChild(buttonRemove);

    tr.appendChild(tdNombre);
    tr.appendChild(tdNota);
    tr.appendChild(tdRemove);

    var tbody = document.getElementById("listado").querySelector("tbody").appendChild(tr);
    
    document.getElementById("listado").classList.remove("hide");
    document.getElementById("calculos").classList.remove("hide");
    nota.value = "";
    nombre.value = "";
    nombre.focus();


    calculos();
});



function calculos() {

    var mejorNota = 1231312;
    // mostramos el resultado
    var result = "<div>Valor total de las materias Matriculadas + costos fijos ES: <span>(" + mejorNota + ")</span></div>";
    document.getElementById("calculos").innerHTML = result;

}
