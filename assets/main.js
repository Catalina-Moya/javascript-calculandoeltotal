
const suma = () => {
    let precioActual = parseInt(document.querySelector("#price-price").textContent);
    let nuevaCantidad = precioActual + 1;
    document.querySelector("#price-price").textContent = nuevaCantidad;
    mostrarOcultarBotonComprar(); 
};

const resta = () => {
    let precioActual = parseInt(document.querySelector("#price-price").textContent);
    if (precioActual > 0) {
        let nuevaCantidad = precioActual - 1;
        document.querySelector("#price-price").textContent = nuevaCantidad;
    }
    mostrarOcultarBotonComprar(); 
};

const formatearNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const agregarProducto = () => {
    let precioUnitario = 40000;
    let cantidad = parseInt(document.querySelector("#price-price").textContent);
    let total = precioUnitario * cantidad;
    let totalFormateado = formatearNumero(total);
    let colorSeleccionado = document.querySelector("#colorSelector").value;
    
    if (colorSeleccionado !== "") {
        document.querySelector("#totalPrice").innerHTML = totalFormateado;
        document.querySelector("#selectedColor").textContent = colorSeleccionado;
        mostrarOcultarBotonComprar();
    } else {
        alert("Debes seleccionar un color antes de agregar al carrito.");
    }
};

const mostrarOcultarBotonComprar = () => {
    let cantidad = parseInt(document.querySelector("#price-price").textContent);
    let colorSeleccionado = document.querySelector("#colorSelector").value;
    let btnComprar = document.querySelector("#btnComprar");
    
    if (cantidad > 0 && colorSeleccionado !== "") {
        btnComprar.style.display = "block"; 
    } else {
        btnComprar.style.display = "none"; 
    }
};

const realizarCompra = () => {
    alert("Compra realizada!");
};
