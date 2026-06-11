function obtenerCarrito(){

```
return JSON.parse(
    localStorage.getItem("carrito")
) || [];
```

}

function guardarCarrito(carrito){

```
localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
);
```

}

function agregarProducto(nombre,precio){

```
const carrito = obtenerCarrito();

carrito.push({
    nombre:nombre,
    precio:precio
});

guardarCarrito(carrito);
```

}

function eliminarProducto(indice){

```
const carrito = obtenerCarrito();

carrito.splice(indice,1);

guardarCarrito(carrito);
```

}

function vaciarCarrito(){

```
localStorage.removeItem("carrito");
```

}

function registrarUsuario(usuario,password){

```
const usuarios = JSON.parse(
    localStorage.getItem("usuarios")
) || [];

usuarios.push({
    usuario:usuario,
    password:password
});

localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
);
```

}

function mostrarCarrito(){

```
const tabla =
document.getElementById("tablaCarrito");

if(!tabla) return;

tabla.innerHTML = "";

const carrito = obtenerCarrito();

carrito.forEach((producto,indice)=>{

    tabla.innerHTML += `
    <tr>

        <td>${producto.nombre}</td>

        <td>$${producto.precio}</td>

        <td>
            <button
            class="eliminar"
            data-indice="${indice}">
            X
            </button>
        </td>

    </tr>
    `;

});
```

}
