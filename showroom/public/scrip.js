 // Agregar un evento "click" al botón "Agregar Producto"
 document.getElementById("add-product").addEventListener("click", function() {
    // Obtener los valores ingresados en el formulario
    var image = document.getElementById("product-image").value;
    var name = document.getElementById("product-name").value;
    var description = document.getElementById("product-description").value;
    var price = document.getElementById("product-price").value;

    // Crear un nuevo elemento div para el producto
    var productDiv = document.createElement("div");
    productDiv.className = "product";

    // Construir el contenido HTML del producto
    var productHTML = '<img src="' + image + '" alt="' + name + '">';
    productHTML += '<h2>' + name + '</h2>';
    productHTML += '<p>' + description + '</p>';
    productHTML += '<p>Precio: $' + price + '</p>';

    // Agregar el contenido HTML al div del producto
    productDiv.innerHTML = productHTML;

    // Agregar el div del producto al showroom
    document.getElementById("showroom").appendChild(productDiv);
});

document.getElementById("show-form-button").addEventListener("click", function() {
    var form = document.getElementById("product-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});