export class Product {
    constructor(productId, productName, pDescription, stockQuantity, price, category) {
        this.productId = productId;
        this.productName = productName;
        this.pDescription = pDescription;
        this.stockQuantity = stockQuantity;
        this.price = price;
        this.category = category;
    }

    getProductValue() {
        return this.stockQuantity * this.price;
    }
}

