import { User } from './User.js';

export class Supplier extends User {
    constructor(firstName, lastName, phone, age, quantity, productId, supplierId) {
        super(null, firstName, lastName, phone, age);
        this.quantity = quantity;
        this.productId = productId;
        this.supplierId = supplierId;
    }

    supplyproduct(product, quantity) {
        return `Supplier ${this.getFullName()} supplied ${quantity} of ${product.pName}`;
    }
}
