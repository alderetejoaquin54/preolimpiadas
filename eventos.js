document.addEventListener("DOMContentLoaded",()=>{

```
mostrarCarrito();

const botonesAgregar =
document.querySelectorAll(
    ".agregar-carrito"
);

botonesAgregar.forEach(boton=>{

    boton.addEventListener("click",()=>{

        const nombre =
        boton.dataset.nombre;

        const precio =
        Number(
            boton.dataset.precio
        );

        agregarProducto(
            nombre,
            precio
        );

        mostrarCarrito();

    });

});

document.addEventListener(
    "click",
    (evento)=>{

        if(
            evento.target.classList.contains(
                "eliminar"
            )
        ){

            const indice =
            evento.target.dataset.indice;

            eliminarProducto(indice);

            mostrarCarrito();

        }

    }
);

const botonVaciar =
document.getElementById(
    "vaciarCarrito"
);

if(botonVaciar){

    botonVaciar.addEventListener(
        "click",
        ()=>{

            vaciarCarrito();

            mostrarCarrito();

        }
    );

}

const formulario =
document.getElementById(
    "formRegistro"
);

if(formulario){

    formulario.addEventListener(
        "submit",
        (evento)=>{

            evento.preventDefault();

            const usuario =
            document.getElementById(
                "usuario"
            ).value;

            const password =
            document.getElementById(
                "password"
            ).value;

            registrarUsuario(
                usuario,
                password
            );

            alert(
                "Usuario registrado"
            );

            formulario.reset();

        }
    );

}
```

});
