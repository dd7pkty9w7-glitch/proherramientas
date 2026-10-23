const botones = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const categoria = boton.dataset.filtro;

        productos.forEach(function(producto) {

            if (
                categoria === "todos" ||
                producto.dataset.categoria === categoria
            ) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }

        });

    });

});
const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function() {

    const texto = buscador.value.toLowerCase();

    productos.forEach(function(producto) {

        const contenido = producto.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }

    });

});