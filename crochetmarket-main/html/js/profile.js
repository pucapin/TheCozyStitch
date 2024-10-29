


let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
        console.log(favorites); // Now you can use the favorites array
    }
    parseDataToProducts()
    renderFavorites()
});

function renderFavorites() {
    let contain = document.getElementById("favoritos");
    contain.innerHTML = ""; // Clear existing content

    // Iterate over the favorites array
    for (let i = 0; i < favorites.length; i++) {
        let pos = favorites[i]; // Get the position of the favorite
        let product = products[pos]; // Use the position to get the actual product
        contain.innerHTML += product.prodCard(pos); // Append the product card
    }
    updateHeartIcon()
}

function updateHeartIcon(pos) {
    const heartImages = document.querySelectorAll('.heart'); // Use class selector
    heartImages.forEach((heartImage) => {
        const heartPos = heartImage.getAttribute('data-pos');
        heartImage.src = favorites.includes(parseInt(heartPos)) ? './pics/heart-solid.svg' : './pics/heart-regular.svg';
    });
}

function openProduct(pos) {
    let openProduct = products[pos]
    window.location = "./product.html?name=" + encodeURIComponent(openProduct.name);

    
}
