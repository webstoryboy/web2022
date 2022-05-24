const imagesLoaded = require('imagesloaded');

const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

export {
    map,
    preloadImages
};