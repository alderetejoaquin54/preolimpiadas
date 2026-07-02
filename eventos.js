document.addEventListener("DOMContentLoaded", () => {

    mostrarCarrito();

    const botonesAgregar = document.querySelectorAll(".agregar-carrito");

    botonesAgregar.forEach(boton => {

        boton.addEventListener("click", () => {

            agregarProducto(
                boton.dataset.nombre,
                Number(boton.dataset.precio)
            );

            mostrarCarrito();

            alert("Producto agregado al carrito");
        });

    });

    document.addEventListener("click", (evento) => {

        if (evento.target.classList.contains("eliminar")) {

            eliminarProducto(evento.target.dataset.indice);

            mostrarCarrito();
        }

    });

    const botonVaciar = document.getElementById("vaciarCarrito");

    if (botonVaciar) {

        botonVaciar.addEventListener("click", () => {

            vaciarCarrito();

            mostrarCarrito();

        });

    }

});