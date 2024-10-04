class Product {
    constructor(name, price, description, size, onstock, creator, image) {
        this.name = name
        this.price = price
        this.description = description
        this.size = size
        this.onstock = onstock
        this.creator = creator
        this.image = image

    }
    
htmlCard() {
    return `
    <div class="producto-individual">
                    <div class="imagenes">
                     <img class="imagen" src="${this.image}" alt="patofrog" width="360px" height="320px">
                    </div>
                    <div class="producto-textos">
                        <h2>${this.price}</h2>
                        <p>$ ${this.name}</p>
                        <p>Size: ${this.size}</p>
                        <p>Created by: ${this.creator}</p>
                        <br>
                        <button class="producto-boton">More info</button>
                    </div>
                </div> 
    `
}


}



        