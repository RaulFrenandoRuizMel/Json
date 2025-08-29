const entradaArchivo = document.querySelector("input");
entradaArchivo.addEventListener("change",() => {
    var archivo = entradaArchivo.files[0];
    var reader = new FileReader();
    reader.readAsText(archivo);
    reader.onload = function(){
        //console.log(reader.result);

        var archivo_json = JSON.parse(reader.result);
        console.log(archivo_json);//muestra todas la variables
        console.log(archivo_json.variable2)
        //console.log(archivo_json.coleccion.texto)
        console.log(archivo_json.arreglo0[3])
        console.log(archivo_json.arreglo0[8].dias[1])
        console.log(archivo_json.arreglo_bidimensional[1][3])
        console.log(archivo_json.arreglo_personas[1].INE.residencias[2])


        //console.log(archivo_json.variable);
    }
})

//delegados: es una variable que almacena funciones
//onload: lee una funcion que guarda 
//un endpoint es una url de una api o un backend que se encarga de contestar a una peticion
//caundo se carga un documento se arealiza el evento "Change"
//para un fetch se necesita de un servidor para acceder a los archivos de una pagina 
//json funciona por parejas identificador/valor en ese mismo orden
//lo bueno de los json es que a diferencia de los xml son mucho menos limitantes
//Los arreglos se manejan cuando no tenemos una cantidad especifica de elementos a guardar
//estructuras