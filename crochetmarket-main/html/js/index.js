let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["price"], map["name"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    for(let i = 0; i < 6; i++) {
        let product = products[i]
        container.innerHTML += product.htmlCard()
    }
}

parseDataToProducts()
renderAllProducts()