const zoom = document.querySelector('.zoom');
const minZoom = 1;
const maxZoom = 2.2;

window.addEventListener('scroll', () => {
    const vh = window.innerHeight / 100;
    const scrollTop = document.documentElement.scrollTop;
    const start = 100 * vh;
    const stop = 200 * vh;
    if (scrollTop > start && scrollTop < stop) {
        const scale = Math.max(maxZoom - (scrollTop - start) / 500, minZoom);
        zoom.style.transform = `scale(${scale})`;
    }
});
