
favorites = []


document.addEventListener('click', (event) => {
    if (event.target.matches('.heart')) {
        const pos = event.target.getAttribute('data-pos');
        toggleFavorite(parseInt(pos)); // Convert to integer
    }
});

function toggleFavorite(pos) {
    const index = favorites.indexOf(pos);

    if (index === -1) {
        // Item is not in favorites, add it
        favorites.push(pos);
        console.log(`Added product at position ${pos} to favorites.`);
    } else {
        // Item is already in favorites, remove it
        favorites.splice(index, 1);
        console.log(`Removed product at position ${pos} from favorites.`);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateHeartIcon(pos);
}

function updateHeartIcon(pos) {
    const heartImages = document.querySelectorAll('.heart'); // Use class selector
    heartImages.forEach((heartImage) => {
        const heartPos = heartImage.getAttribute('data-pos');
        heartImage.src = favorites.includes(parseInt(heartPos)) ? './pics/heart-solid.svg' : './pics/heart-regular.svg';
    });
}