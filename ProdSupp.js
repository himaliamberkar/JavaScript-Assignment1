export class ProdSupp {
    constructor(product, supplier) {
        this.product = product;
        this.supplier = supplier;
    }

    getProdSuppInfo() {
        console.log(`${this.product.productName} is supplied by SupplierID: ${this.supplier.supplierId}`);
    }
}
