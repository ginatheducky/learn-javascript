const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// API
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`;

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
    // run function for each object in photosArray
    photosArray.photos.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.img_src);
        item.setAttribute('target', '_blank');

        // create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.img_src);
        img.setAttribute('alt', photo.earth_date);
        img.setAttribute('title', photo.earth_date);

        console.log(photo.img_src);
    });
}

// get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        let photos = await response.json();
        photosArray = photos.photos
        displayPhotos();
    } catch (error) {
        // catch error here
    }
}


// on load
getPhotos();