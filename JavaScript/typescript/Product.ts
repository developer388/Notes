class Product {
    constructor (public id: number, public name: string, public description: string, public price: number) {

    }
}

class Cart {

    private productList: Product[] = [];

    addProduct(product: Product) {
        this.productList.push(product)
        console.log("Product added: ", product)
    }

    getProduct(id: number) {

        const product = this.productList.find((product)=>product.id===id)
        
        if (!product) {
            throw new Error('Product not found with id: '+ id)
        }

        console.log("Product found: ", id)
        return product
    }

    getAllProducts() {
        return [...this.productList]
    }

    deleteProduct(id: number) { 
        const index = this.productList.findIndex((product)=>product.id==id)
        if (index === -1) {
            throw new Error('Product not found with id: '+ id)
        }
        this.productList.splice(index, 1)

        console.log("Product deleted: ", id)
    }

}


// Main Code


// Create Products
const firstProduct = new Product(1, "LG Monitor", "32 Inch QHD Monitor", 24000)
const secondProduct = new Product(2, "Apple MacBook Pro", "16 Inch MacBook Pro Laptop", 214000)
const thirdfirstProduct = new Product(3, "Samsung A50", "6GB/64GB AMOLED Dispay", 25000)
const fourthProduct = new Product(4, "Dell Mouse", "Bluetooth Mouse", 800)


// Create Cart
const cart = new Cart()

// Add products to Cart
cart.addProduct(firstProduct)
cart.addProduct(secondProduct)
cart.addProduct(thirdfirstProduct)
cart.addProduct(fourthProduct)

//Use APIs

console.log("cart.getAllProducts(): ", cart.getAllProducts())

console.log("\ncart.getProduct(3): ", cart.getProduct(3))
console.log("cart.deleteProduct(3): ", cart.deleteProduct(3))


console.log("\ncart.getAllProducts(): ", cart.getAllProducts())




