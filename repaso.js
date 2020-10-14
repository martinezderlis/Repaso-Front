let users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
        "id": 9,
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
    }
];

/* 0- Mostrar el APELLIDO de cada usuario, recorriendolo de a uno con MAP / forEach */

let apellidos = []
cont = 0
users.forEach(function(user){
    if(user.last_name){
        apellidos.push(user.last_name)
        cont = cont + 1
    }
     
})

console.log("Los usuarios con apellido son :"+ cont,  apellidos)


/* 1- ¿Qué usuarios no tienen algun dato (Le falta id/email/first_name/last_name/avatar)?  */

let usuarioIncompleto = []
users.forEach(function(user){
    if(!user.id || !user.email || !user.first_name || !user.last_name || !user.avatar){
    usuarioIncompleto.push(user.id)
    }
})

console.log("Los usuarios con los datos imcompletos son: ", usuarioIncompleto)

/* 2- Quedarse (Crear un nuevo arreglo) con los usuarios que tengan TODOS los datos */

let usuarioCompleto = []
users.forEach(function(user){
    if(user.id && user.email && user.first_name && user.last_name && user.avatar){
    usuarioCompleto.push(user.id)
    }
})

console.log("Los usuarios con los datos completos son: ", usuarioCompleto)


/* 3- Ordenar por first_name y mostrarlo por consola ordenado */

let ordenApellidos = []
users.forEach(function(user){
    if(user.last_name){
        ordenApellidos.push(user.last_name)
    }
    ordenApellidos.sort() 
})

console.log("Los usuarios ordenados x apellido son: ", ordenApellidos)

/* 4- Ordenar de forma decreciente por ID  y mostrarlo por consola ordenado  */
 
let ordenID = []
users.forEach(function(user){
    if(user.id){
    ordenID.push(user.id)
    }    
})

ordenID.sort(function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // Si a = b
    return 0;
})

console.log("Los usuarios ordenados x id son: ", ordenID)

let ordenInvertido = ordenID.reverse()

console.log("Los usuarios ordenados x id (invertidos) son: ", ordenInvertido)



/* 5- Realizar  peticion GET a https://reqres.in/api/users?page=2 y mostrar por consola el resultado*/

fetch("https://reqres.in/api/users?page=2")
  .then(response => response.json())
  .then(dato => console.log("Los datos son: ", dato))


/* 6- Realizar peticion POST a https://reqres.in/api/users */
    
/* body example: 
    {
    "name": "morpheus",
    "job": "leader"
    }

    y mostrar por consola la respuesta
*/

let url = "https://reqres.in/api/users"
let dato = {"name": "morpheus","job": "leader"}

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(dato), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(resp => console.log('Salio todo OK:', resp));


/* 7- Crear funcion llamada "ejecutoLuego" que imprima "Hola Mundo luego de 3 segundos" */

let msj = "Hola Mundo luego de 3 segundos"

ejecutoLuego(msj)

function ejecutoLuego(mensaje){
    console.log(mensaje)
}




/* 8- Colocar el llamado a la funcion "ejecutoLuego" en el lugar correcto para que se ejecute LUEGO de 3 segundos

function ejecucionRetrasada(cb){
    //Corregir esto
    let _cb = null
    setTimeout(_cb,3000)
}

ejecucionRetrasada() */

/* setTimeout(function(){ alert("Hello"); }, 3000) */

