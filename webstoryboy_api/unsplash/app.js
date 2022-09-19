// https://www.youtube.com/watch?v=LoWBkkmgRBE&t=1420s

const access_key = "r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc";

let searchParam = location.search.split('=').pop();

const random_photo_rul = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
const search_photo_rul = `https://api.unsplash.com/search/phptps?client_id=${access_key}&query=${searchParam}&per_page=50`;

const gallery = document.querySelector(".gallery");

let currentImages = 0;
let allImages;
const getImages = () => {
    fetch(random_photo_rul)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });
}

const searchImages = () => {
    fetch(search_photo_rul)
    .then(res => res.json())
    .then(data => {
        allImages = data.results;
        makeImages(allImages);
    });
}

const makeImages = (data) => {
    console.log(data)
    data.forEach((item, index) => {

        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';

        gallery.appendChild(img);

        //popup
        img.addEventListener("click", () => {
            currentImages = index;
            showPopup(item);
        })
    })
}

const showPopup = (item) => {
    let popup = document.querySelector(".image-popup");
    let downloadBtn = document.querySelector(".download-btn");
    let closeBtn = document.querySelector(".close-btn");
    let image = document.querySelector(".large-img");

    popup.classList.remove("hide");
    downloadBtn.href = item.links.html;
    image.src = item.urls.regular;

    closeBtn.addEventListener("click", ()=> {
        popup.classList.add("hide");
    })
}


if(searchParam == ''){
    getImages();
} else {
    searchImages();
}



// controls
const preBtns = document.querySelector(".pre-btn");
const nextBtns = document.querySelector(".next-btn");

preBtns.addEventListener("click", () => {
    if(currentImages > 0 ){
        currentImages--;
        showPopup(allImages[currentImages]);

    }
})

nextBtns.addEventListener("click", () => {
    if(currentImages > allImages.length - 1){
        currentImages++;
        showPopup(allImages[currentImages]);
    }
})