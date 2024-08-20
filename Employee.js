import { User } from './User.js';

export class Employee extends User {
    constructor(userId, firstName, lastName, phone, age, salary, email, EmployeeId) {
        super(userId, firstName, lastName, phone, age);
        this.EmployeeId = EmployeeId;
        this.salary = salary;
        this.email = email;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}
