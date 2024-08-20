export class EmpCust {
    constructor(employee, customer) {
        this.employee = employee;
        this.customer = customer;
    }

    getInfo() {
        console.log(`EmpID:${this.employee.EmployeeId} employee has handled the customer with Customer ID: ${this.customer.CustomerId}`);
    }
}
