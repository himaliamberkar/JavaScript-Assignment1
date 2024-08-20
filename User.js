export class User {
    constructor(userId, firstName, lastName, phone, age) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
