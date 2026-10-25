const botones = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");
const buscador = document.getElementById("buscador");
const botonesOferta = document.querySelectorAll(".boton-oferta");

function filtrarProductos(categoria) {

    categoria = categoria.toLowerCase();

    productos.forEach(function(producto) {

        const categoriaProducto =
            producto.dataset.categoria.toLowerCase();

        if (
            categoria === "todos" ||
            categoriaProducto === categoria
        ) {
            producto.style.display = "flex";
        } else {
            producto.style.display = "none";
        }

    });
}

/* BOTONES DE CATEGORÍAS */

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const categoria = boton.dataset.filtro;

        filtrarProductos(categoria);

        botones.forEach(function(b) {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

    });

});


/* BUSCADOR */

buscador.addEventListener("input", function() {

    const texto = buscador.value.toLowerCase();

    productos.forEach(function(producto) {

        const contenido = producto.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            producto.style.display = "flex";
        } else {
            producto.style.display = "none";
        }

    });

});


/* BOTONES DE OFERTAS */

botonesOferta.forEach(function(boton) {

    boton.addEventListener("click", function(e) {

        e.preventDefault();

        const categoria = boton.dataset.filtro;

        filtrarProductos(categoria);

        botones.forEach(function(botonFiltro) {

            botonFiltro.classList.remove("activo");

            if (
                botonFiltro.dataset.filtro.toLowerCase() ===
                categoria.toLowerCase()
            ) {
                botonFiltro.classList.add("activo");
            }

        });

        const productoVisible =
            Array.from(productos).find(function(producto) {
                return producto.style.display !== "none";
            });

        if (productoVisible) {
            productoVisible.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

    });

});