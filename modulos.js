function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarProducto(nombre, precio) {
    const carrito = obtenerCarrito();

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    guardarCarrito(carrito);
}

function eliminarProducto(indice) {
    const carrito = obtenerCarrito();

    carrito.splice(indice, 1);

    guardarCarrito(carrito);
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
}

function registrarUsuario(usuario, password) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({
        usuario,
        password
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
}

function mostrarCarrito() {

    const tabla = document.getElementById("tablaCarrito");
    const totalTexto = document.getElementById("totalCarrito");

    if (!tabla) return;

    tabla.innerHTML = "";

    let total = 0;

    const carrito = obtenerCarrito();

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        tabla.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toLocaleString()}</td>
            <td>
                <button class="eliminar" data-indice="${indice}">
                    Eliminar
                </button>
            </td>
        </tr>
        `;
    });

    if (totalTexto) {
        totalTexto.textContent = "Total: $" + total.toLocaleString();
    }
}