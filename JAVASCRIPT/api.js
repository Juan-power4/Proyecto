// api.js
document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbyVqwVBQd_b40z2-xsorSWeR06gVdEkIsgZKhwJZb2pzfm-D-y5FGnMGJoUjrZtUA2V/exec";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok)
      throw new Error(`Error en la respuesta de la API: ${response.status}`);
    const data = await response.json();
    console.log("Datos recibidos de la API:", data); // Verificar datos recibidos
    renderPlates(data.data);
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
});

function renderPlates(plates) {
  // Limpiar los carruseles antes de renderizar para evitar duplicados
  clearCarousel("entradas-carousel");
  clearCarousel("platos-fuertes-carousel");
  clearCarousel("bebidas-carousel");
  clearCarousel("postres-carousel");

  renderCategory(plates, "Entrada", "entradas-carousel");
  renderCategory(plates, "Platos Fuertes", "platos-fuertes-carousel");
  renderCategory(plates, "Bebidas", "bebidas-carousel");
  renderCategory(plates, "Postres", "postres-carousel");

  // Inicializa el lazy loading después de renderizar todas las categorías
  initializeLazyLoading();
}

function clearCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (carousel) {
    carousel.innerHTML = ""; // Limpia el contenido del carrusel
  }
}

function renderCategory(plates, category, carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error(`No se encontró el contenedor con ID: ${carouselId}`);
    return;
  }

  const filteredPlates = plates.filter((plate) => plate.category === category);
  console.log(`Platos filtrados para ${category}:`, filteredPlates); // Verificar los platos filtrados

  filteredPlates.forEach((plate) => {
    const plateElement = document.createElement("div");
    plateElement.classList.add("plato");

    // Se establece la URL de la imagen y se agrega un atributo data-src para lazy loading
    const imageUrl = `/Imagenes/Menu/${plate.image}`;
    plateElement.innerHTML = `
      <img class="lazyload" data-src="${imageUrl}" alt="${plate.name}">
      <p class="precio">${plate.price}</p>
      <p class="nombre"><strong>${plate.name}</strong></p>
      <p class="descripcion">${plate.description}</p>
      <button class="add-to-cart" onclick="toggleDesplegable()" 
              data-product='{"image":"/Imagenes/Menu/${plate.image}","name":"${
      plate.name
    }","price":${parseFloat(plate.price.replace(/[^0-9.-]+/g, ""))}}'>
        <img src="/Imagenes/Menu/carrito-icono.png" alt="Carrito">
        Añadir al carrito
      </button>
    `;

    carousel.appendChild(plateElement);
    console.log(`Elemento añadido al carrusel ${carouselId}:`, plateElement); // Verificar la inserción del elemento
  });
}

// Función para inicializar lazy loading usando Intersection Observer
function initializeLazyLoading() {
  const lazyImages = document.querySelectorAll("img.lazyload");

  if ("IntersectionObserver" in window) {
    // Usar IntersectionObserver si está disponible
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Carga la imagen desde el atributo data-src
          img.classList.remove("lazyload");
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback si IntersectionObserver no está disponible
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.remove("lazyload");
    });
  }
}
