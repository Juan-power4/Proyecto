function scrollCarousel(id, distance) {
    document.getElementById(id).scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}