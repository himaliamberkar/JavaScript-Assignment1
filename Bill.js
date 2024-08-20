export class Bill {
    constructor(billId, product, customer, billDate, quantity) {
        this.billId = billId;
        this.product = product;
        this.customer = customer;
        this.billDate = billDate;
        this.quantity = quantity;
    }

    generateBill() {
        console.log(`Bill #${this.billId} for Customer ID: ${this.customer.CustomerId} on ${this.billDate}`);
    }
}

