




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
    
prodCard(pos) {
    return `<div class="prod-card" onclick="openProduct(${pos})">
                    <img src="${this.image}" class="imagenes"> 
                    <div class="prod-info">
                        <h2>${this.name}</h2>
                        <p>$ ${this.price}</p>
                    </div>
                </div> `
}
}