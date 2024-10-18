const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

//Una vez tenemos un objeto params del tipo URLSearchParams ya podremos utilizar los diferentes métodos que nos proporciona para poder recuperar la información que nos interesa.
//

function getProduct() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let title = map["name"]
        if(title === nameFromUrl) {
            let product = new Product(map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
            return product
        }
        
    }
} //se deben dirigir los datos de los mapas de nuevo a este archivo. se buscan TODOS los productos y lo que hace la función es encontrar el que coincide con el URL (El url se coloca con el event listener)

function renderProduct() {
    let product = getProduct()
    let titleH1 = document.getElementById("name")
    titleH1.innerHTML = product.name
    
    let creator = document.getElementById("creator")
    creator.innerHTML = "Created by: " + product.creator

    let price = document.getElementById("price")
    price.innerHTML = "$ " + product.price

    let description = document.getElementById("description")
    description.innerHTML = product.description
    
    let image = document.getElementById("prod-img")
    image.src = product.image

    

} //modificación del UI. Volver a modificar todo el html con los ${nombre}

renderProduct()
