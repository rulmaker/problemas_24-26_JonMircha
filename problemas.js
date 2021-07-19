//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const devuelveArr = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    // const objeto1 = {
    //     ascendente: arr.sort(function (a, b) { return a - b })
    // };
    // const objeto2 = {
    //     descendente: arr.sort(function (a, b) { return b - a })
    // };

    // objeto.descendente = arr.sort(function (a, b) { return b - a });
    // objeto.ascendente = arr.reverse(arr.sort(function (a, b) { return a - b }));

    // return console.log(objeto1, objeto2);
    return console.info({
        ascendente: arr.sort(function (a, b) { return a - b }).reverse(),
        descendente: arr.sort(function (a, b) { return b - a })
    });
}

// devuelveArr();
// devuelveArr([]);
// devuelveArr({});
// devuelveArr([1, "2"]);
// devuelveArr([1, 8, 15, 15, 20]);
// devuelveArr([100, 68, 45, 45, 26]);



//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const devuelveUnicos = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    return console.info(`Arreglo original ${arr},\nArreglo sin duplicados ${arr.filter((valor, indice) => arr.indexOf(valor) === indice)}`)//compara cada posicion con el valor de entrada y si es igual lo salta
}

// devuelveUnicos();
// devuelveUnicos([]);
// devuelveUnicos({});
// devuelveUnicos([1, "2"]);
// devuelveUnicos([1, "x", 10, "10", "x", true, true]);
// devuelveUnicos(["x", 10, "x", 2, "10", 10, true, true]);
/*
const unicos = numeros.filter((valor, indice) => {
    return numeros.indexOf(valor) === indice;
  }
);*/


//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const devuelveProm = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    let count = arr.length;//cantidad de numeros
    arr = arr.reduce((a, b) => a + b);//suma de los numeros del arr

    return console.log(arr /= count);//muesta promedio

}


// devuelveProm();
// devuelveProm([]);
// devuelveProm({});
// devuelveProm([1, "2"]);
// devuelveProm([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);


//Solución de Jon

// 24 - 

const ordenarArr = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort((a, b) => a - b),
        desc: arr.map(el => el).sort((a, b) => a - b).reverse()
    });
}

// ordenarArr();
// ordenarArr([]);
// ordenarArr({});
// ordenarArr([1, "2"]);
// ordenarArr([7, 5, 7, 8, 6, 2, 10]);


// 25 -

const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");

    /* return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    }); */
    return console.info({
        original: arr,
        sinDuplicados: [... new Set(arr)]
    });
}

/* quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
 */

// 26 -

const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un número`);
    }

    if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");

    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num;
            if (index === arr.length - 1) {
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
            } else {
                return total;
            }
        })
    )
}

promedio();
promedio({});
promedio([]);
promedio(2, true);
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


