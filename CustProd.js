export class CustProd {
    constructor(customer, product) {
        this.customer = customer;
        this.product = product;
    }

    getCustProdInfo() {
        console.log(`Customer ID: ${this.customer.CustomerId} customer has purchased: ${this.product.productName}`);
    }
}
