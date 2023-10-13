

const datosJSON = [
    {
      "id": 1,
      "nombre": "Ladrillos",
      "descripcion": "Ladrillos de construcción estándar",
      "stock": 500,
      "precio": 500
    },
    {
      "id": 2,
      "nombre": "Cemento",
      "descripcion": "Saco de cemento Portland",
      "stock": 200,
      "precio": 100
    },
    {
      "id": 3,
      "nombre": "Madera de Pino",
      "descripcion": "Tablas de madera de pino",
      "stock": 300,
      "precio": 250
    },
    {
      "id": 4,
      "nombre": "Clavos",
      "descripcion": "Paquete de clavos de 2 pulgadas",
      "stock": 1000,
      "precio": 20
    },
    {
      "id": 5,
      "nombre": "Tejas de Techo",
      "descripcion": "Tejas de cerámica para techos",
      "stock": 150,
      "precio": 159
    },
    {
      "id": 6,
      "nombre": "Tubos de PVC",
      "descripcion": "Tubos de PVC para fontanería",
      "stock": 400,
      "precio": 800
    },
    {
      "id": 7,
      "nombre": "Pintura Blanca",
      "descripcion": "Lata de pintura blanca",
      "stock": 150,
      "precio": 450
    },
    {
      "id": 8,
      "nombre": "Arena de Construcción",
      "descripcion": "Bolsa de arena para construcción",
      "stock": 300,
      "precio": 3.25
    },
    {
      "id": 9,
      "nombre": "Varillas de Refuerzo",
      "descripcion": "Varillas de acero para refuerzo de concreto",
      "stock": 250,
      "precio": 6.50
    },
    {
      "id": 10,
      "nombre": "Tornillos",
      "descripcion": "Paquete de tornillos variados",
      "stock": 800,
      "precio": 1.99
    },
    {
      "id": 11,
      "nombre": "Hormigón Preparado",
      "descripcion": "Hormigón premezclado",
      "stock": 100,
      "precio": 60.00
    },
    {
      "id": 12,
      "nombre": "Aislante Térmico",
      "descripcion": "Rollo de aislante térmico",
      "stock": 120,
      "precio": 7.25
    },
    {
      "id": 13,
      "nombre": "Herramientas de Construcción",
      "descripcion": "Set de herramientas de construcción",
      "stock": 50,
      "precio": 45.99
    },
    {
      "id": 14,
      "nombre": "Piedras de Jardín",
      "descripcion": "Piedras decorativas para jardín",
      "stock": 350,
      "precio": 4.75
    },
    {
      "id": 15,
      "nombre": "Cables Eléctricos",
      "descripcion": "Rollo de cables eléctricos",
      "stock": 200,
      "precio": 3.99
    },
    {
      "id": 16,
      "nombre": "Tubos de Drenaje",
      "descripcion": "Tubos de drenaje de PVC",
      "stock": 120,
      "precio": 6.25
    },
    {
      "id": 17,
      "nombre": "Azulejos",
      "descripcion": "Azulejos cerámicos para baños",
      "stock": 300,
      "precio": 9.50
    },
    {
      "id": 18,
      "nombre": "Vidrios para Ventanas",
      "descripcion": "Vidrios de ventana de 3mm",
      "stock": 150,
      "precio": 7.99
    },
    {
      "id": 19,
      "nombre": "Grava para Jardín",
      "descripcion": "Bolsa de grava para jardín",
      "stock": 250,
      "precio": 4.25
    },
    {
      "id": 20,
      "nombre": "Puertas de Madera",
      "descripcion": "Puertas de madera maciza",
      "stock": 50,
      "precio": 80.00
    }
  ]


  const listaProductos = document.getElementById("productos-lista");
        const listaCarrito = document.getElementById("lista-carrito");
        const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
        const totalCarrito = document.getElementById("total-carrito");
        const metodoPagoRadios = document.querySelectorAll('input[name="metodo-pago"]');

        const carrito = [];
        let metodoPago = "efectivo"; // Por defecto, el método de pago es efectivo.

        // Manejar el cambio en el método de pago.
        metodoPagoRadios.forEach(radio => {
            radio.addEventListener("change", () => {
                metodoPago = radio.value;
                calcularTotal();
            });
        });


        function mostrarProductos() {
            listaProductos.innerHTML = "";
        
            datosJSON.forEach(producto => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <h2>${producto.nombre}</h2>
                    <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                    <p><strong>Stock:</strong> ${producto.stock} unidades</p>
                   
                    <button class="agregar" id="icon-carrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Agregar al carrito
                </button>
                `;
        
                listaProductos.appendChild(li);
            });
        }
        
        // Asegúrate de llamar a la función mostrarProductos solo una vez al inicio.
        mostrarProductos();

        function mostrarCarrito() {
            listaCarrito.innerHTML = "";
            const carritoDropdown = document.getElementById("carritoDropdown");
            
            if (carrito.length === 0) {
                // Si el carrito está vacío, muestra 0.
                carritoDropdown.textContent = `Carrito (0)`;
            } else {
                carrito.forEach(producto => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        ${producto.nombre} - $${producto.precio.toFixed(2)}
                        <button class="eliminar" data-id="${producto.id}">Quitar este producto del carrito de compras</button>
                    `;
                    listaCarrito.appendChild(li);
                });
        
                // Si hay productos en el carrito, muestra la cantidad.
                carritoDropdown.textContent = `Carrito (${carrito.length})`;
            }
        }
        function agregarAlCarrito(id) {
            const producto = datosJSON.find(item => item.id === id);
            if (producto && producto.stock > 0) {
                carrito.push(producto);
                producto.stock--; // Restar 1 del stock.
                mostrarCarrito(); // Actualiza la lista del carrito
                mostrarProductos(); // Actualiza la lista de productos
                calcularTotal();
                alert("Se agregó el producto a su  carrito");
            }
        }

        function eliminarDelCarrito(id) {
            const productoIndex = carrito.findIndex(item => item.id === id);
            if (productoIndex !== -1) {
                const producto = carrito[productoIndex];
                carrito.splice(productoIndex, 1);
                producto.stock++; // Aumentar el stock al eliminar del carrito.
                mostrarCarrito();
                mostrarProductos(); // Actualizar la lista de productos para mostrar el nuevo stock.
                calcularTotal();
            }
        }
    

        function vaciarCarrito() {
            // Mostrar un cuadro de diálogo personalizado
            const confirmacion = window.confirm("¿Estás seguro que deseas vaciar el carrito?");
        
            if (confirmacion) {
                carrito.length = 0;
                mostrarCarrito();
                mostrarProductos();
                calcularTotal();
            }
        }

        function calcularTotal() {
            let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

            if (metodoPago === "efectivo") {
                total *= 0.9; // Aplicar un 10% de descuento para efectivo.
            } else if (metodoPago === "credito") {
                total *= 1.07; // Aplicar un 7% de aumento para crédito.
            }

            totalCarrito.textContent = `$${total.toFixed(2)}`;
        }


        listaProductos.addEventListener("click", e => {
            if (e.target.classList.contains("agregar")) {
                const id = parseInt(e.target.getAttribute("data-id"));
                agregarAlCarrito(id);
            }
        });

        listaCarrito.addEventListener("click", e => {
            if (e.target.classList.contains("eliminar")) {
                const id = parseInt(e.target.getAttribute("data-id"));
                eliminarDelCarrito(id);
            }
        });

        vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
        
        const carritoDropdown = document.getElementById("carritoDropdown");
        const carritoContent = document.querySelector(".carrito-content");
        
        // Agrega un evento de clic al menú desplegable "Carrito" para mostrar u ocultar el contenido del carrito.
        carritoDropdown.addEventListener("click", () => {
            // Si el contenido del carrito está visible, ocúltalo. De lo contrario, muéstralo.
            if (carritoContent.style.display === "none" || carritoContent.style.display === "") {
                carritoContent.style.display = "block";
            } else {
                carritoContent.style.display = "none";
            }
        });

        // Selecciona el enlace del catálogo y la lista de productos.
const catalogoLink = document.getElementById("catalogo-link");


// Agrega un controlador de eventos al enlace del catálogo.
catalogoLink.addEventListener("click", function (e) {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace.

    // Toggle (mostrar u ocultar) la lista de productos.
    if (listaProductos.style.display === "none" || listaProductos.style.display === "") {
        listaProductos.style.display = "block"; // Muestra la lista.
    } else {
        listaProductos.style.display = "none"; // Oculta la lista.
    }
});

catalogoLink.addEventListener("click", function (e) {
    e.preventDefault();
    listaProductos.style.display = "block";
    
    // Agrega la clase de animación y espera 500 ms para eliminarla.
    listaProductos.classList.add("producto-appear");
    setTimeout(function() {
        listaProductos.classList.remove("producto-appear");
    }, 50000);
});
