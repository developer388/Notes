var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Product = /** @class */ (function () {
    function Product(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.productList = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.productList.push(product);
        console.log("Product added: ", product);
    };
    Cart.prototype.getProduct = function (id) {
        var product = this.productList.find(function (product) { return product.id === id; });
        if (!product) {
            throw new Error('Product not found with id: ' + id);
        }
        console.log("Product found: ", id);
        return product;
    };
    Cart.prototype.getAllProducts = function () {
        return __spreadArray([], this.productList, true);
    };
    Cart.prototype.deleteProduct = function (id) {
        var index = this.productList.findIndex(function (product) { return product.id == id; });
        if (index === -1) {
            throw new Error('Product not found with id: ' + id);
        }
        this.productList.splice(index, 1);
        console.log("Product deleted: ", id);
    };
    return Cart;
}());
// Main Code
// Create Products
var firstProduct = new Product(1, "LG Monitor", "32 Inch QHD Monitor", 24000);
var secondProduct = new Product(2, "Apple MacBook Pro", "16 Inch MacBook Pro Laptop", 214000);
var thirdfirstProduct = new Product(3, "Samsung A50", "6GB/64GB AMOLED Dispay", 25000);
var fourthProduct = new Product(4, "Dell Mouse", "Bluetooth Mouse", 800);
// Create Cart
var cart = new Cart();
// Add products to Cart
cart.addProduct(firstProduct);
cart.addProduct(secondProduct);
cart.addProduct(thirdfirstProduct);
cart.addProduct(fourthProduct);
//Use APIs
console.log("cart.getAllProducts(): ", cart.getAllProducts());
console.log("\ncart.getProduct(3): ", cart.getProduct(3));
console.log("cart.deleteProduct(3): ", cart.deleteProduct(3));
console.log("\ncart.getAllProducts(): ", cart.getAllProducts());
