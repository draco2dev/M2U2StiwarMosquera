
var nombre = document.querySelector("input[name=nombre]");
var materia = document.querySelector("input[name=materia]");

document.querySelector("input[class=agregar]").addEventListener("click", function (e) {
    e.preventDefault();

    if (!nombre.value) {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
    if (isNaN(parseInt(materia.value)) || (parseInt(materia.value) < 0 && parseInt(materia.value) > 100000000000000000000000)) {
        materia.classList.add("error");
        return;
    }

    materia.classList.remove("error");

    var tr = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var txt = document.createTextNode(nombre.value);

    tdNombre.appendChild(txt);
    tdNombre.className = "nombre";

    var tdMateria = document.createElement("td");

    txt = document.createTextNode(materia.value);

    tdMateria.appendChild(txt);

    tdMateria.className = "right";

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
    tr.appendChild(tdMateria);
    tr.appendChild(tdRemove);

    var tbody = document.getElementById("listado").querySelector("tbody").appendChild(tr);

    document.getElementById("listado").classList.remove("hide");
    document.getElementById("calculos").classList.remove("hide");

    materia.value = "";
    nombre.value = "";
    nombre.focus();



    
});

document.querySelector("input[class=mostrar]").addEventListener("click", function (e) {
   calculos();
});



function calculos() {
    var alumnosAgregados = document.getElementById("listado").querySelector("tbody").querySelectorAll("tr");
    var totalMateria = [];
    const costosfijos = 20000
    const carnet = 8000
    const descuento = 0.2;
  
    var sumaTotal = 0

    for (let i = 0; i < alumnosAgregados.length; i++) {
        let totalMateria = alumnosAgregados[i].getElementsByTagName('td');
        totalMateria[i]+= sumaTotal;
        sumaTotal += parseFloat(totalMateria[1].innerHTML);
    }

    var totalSuma = costosfijos + carnet + sumaTotal
    var descuentoTotal = descuento * totalSuma

    var totalValores = totalSuma - descuentoTotal;



    var result = "<div>Numero de Materias: <span>(" + alumnosAgregados.length + ")</span></div>";
    result += "<div>Valor total de las materias Matriculadas + costos fijos ES: <span>" + (totalValores).toFixed(1) + "</span></div>";


    document.getElementById("calculos").innerHTML = result;

}
