import { User } from './User.js';

export class Customer extends User {
    constructor(userId, firstName, lastName, phone, age, CustomerId) {
        super(userId, firstName, lastName, phone, age);
        this.CustomerId = CustomerId;
    }

    makePurchase(product, quantity) {
        return `Customer ${this.getFullName()} purchased ${quantity} of ${product.pName}`;
    }
}
