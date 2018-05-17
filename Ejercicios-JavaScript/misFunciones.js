/**
 * Created by Agus on 6/5/2017.
 */

fumction evaluarvalor (valor, id_elemento){
    valor = valor.replace(",",".");

    if(isNaN(valor)){
        alert("el valor no es numerico");
        document.getElementById(id_elemento).value
    }
}
function sumarnumeros(){
    
}

function mostrarocultar(opcion){
    if(opcion == 'mostrarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }
    if(opcion == 'ocultarDiv'){
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

function coversiongradosradianes(nombre_unidad, valor_unidad){
    var varradianes, vargrados;
    if(nombre_unidad == 'grados'){
        vargrados = valor_unidad;
        varradianes = Math.PI/180*valor_unidad;
     }
    if(nombre_unidad = 'radianes'){
        varradianes = valor_unidad;
        vargrados = 180/Math.PI*valor_unidad;
    }

    document.getElementsByTagName("input") [0].value = varradianes;
    document.getElementsByTagName("input") [1].value = vargrados;
}

/**
 * Conversion de unidades metro, pulgada, pies y yarda
 * @method conversordeunidades
 * @param nombre_unidad
 * @param valor_unidad
 * @return
 */

function conversordeunidades(nombre_unidad, valor_unidad) {
    var metro, pies, pulgada, yarda;

    valor_unidad = valor_unidad.replace(",",".");

    if(isNaN(valor_unidad)){
        alert("El valor ingresado es en "+ nombre_unidad +" invalido");
        metro = "";
        pies = pulgada = yarda = null;
    }
    else{

    if(nombre_unidad == 'metro'){
        metro = valor_unidad;
        pies = valor_unidad*3.28084;
        pulgada = valor_unidad*39.3701;
        yarda= valor_unidad*1.09361;
    }
    if(nombre_unidad == 'pie'){
       pies = valor_unidad;
        metro = valor_unidad/3.28084;
        pulgada = metro*39.3701;
        yarda = metro*1.09361;
    }
    if(nombre_unidad == 'pulgada'){
        pulgada = valor_unidad;
        metro = valor_unidad/39.3701;
        pies = metro*3.28084;
        yarda = metro*1.09361;
    }
    if(nombre_unidad == 'yarda'){
        yarda = valor_unidad;
        metro = valor_unidad/1.09361;
        pulgada = metro*39.3701;
        pies = metro*3.28084;
    }}


    document.getElementById("metro").value = metro;
    documeent.getElementById("pies").value = pies;
    document.getElementById("yarda").value = yarda;
    documeent.getElementById("pulgada").value = pulgada;
}