
class Product {
    constructor(name, price, description, size, onstock, creator, image, category) {
        this.name = name
        this.price = price
        this.description = description
        this.size = size
        this.onstock = onstock
        this.creator = creator
        this.image = image
        this.category = category

    }
}

const products = []

function parseDataToProducts() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let product = new Product(map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"], map["category"]);
        products.push(product);
    }
}

parseDataToProducts();

const searchInput = document.getElementById('search');

// Function to get the search query from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Get the search query
  const query = getQueryParam('query').toLowerCase(); // Extract 'query' parameter
  
 
  const searchResults = document.getElementById('resultados');

  if (query) {
    searchProducts(query.toLowerCase()); // Only call if query is not null
} else {
    searchResults.innerHTML = '<p>Please enter a search term.</p>';
}

function searchProducts(query) {
    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.creator.toLowerCase().includes(query) // Include category in the search
    );
    displayResults(results);
}


  function displayResults(results) {
    searchResults.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResults.innerHTML = '<p id="noproducts">No products found :(</p>';
        return;
    }

    // Loop through each product in results
    results.forEach(product => {
        // Create a product card for each product
        const productCard = `
            <div class="prod-card2">
                <img src="${product.image}" class="imagenes"> 
                <div class="prod-info">
                    <h2>${product.name}</h2>
                    <p>$${product.price}</p>
                </div>
            </div>
        `;

        // Append the product card to the search results
        searchResults.innerHTML += productCard; // Use += to append
    });
}