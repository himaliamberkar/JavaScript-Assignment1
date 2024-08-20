// class User {
//     constructor(userId, firstName, lastName, phone, age) {
//         this.userId = userId;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.phone = phone;
//         this.age = age;
    
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Employee extends User{
// constructor (userId,firstName,lastName,phone,age,salary,email,EmployeeId){
// super(userId,firstName,lastName,phone,age);
// this.EmployeeId = EmployeeId;
// this.salary = salary;
// this.email = email;
// }
// getAnnualSalary(){
//     return this.salary * 12;
// }
// }

// class Customer extends User{
//     constructor(userId,firstName,lastName,phone,age,CustomerId){
//         super(userId,firstName,lastName,phone,age)
//         this.CustomerId = CustomerId;

//     }
//         makePurchase(product,quantity){
//             return `Customer ${this.getFullName()} purchased ${quantity} of ${product.pName}`;
//         }
//     }
    
// class Supplier extends User{
//     constructor(firstName,lastName,phone,age,quantity,productId,supplierId){
//         super(null,firstName,lastName,phone,age)
//         this.quantity = quantity;
//         this.productId = productId;
//         this.supplierId = supplierId;
//     }
//    supplyproduct(product,quantity){
//     return `Supplier ${this.getFullName()} purchased ${quantity} of ${product.pName}`;
//    }
// }

// class category{
//     constructor(categoryID,categoryName,cDescription){
//         this.categoryID =categoryID;
//         this.category =categoryName;
//         this.cDescription = cDescription;
//     }
// }

// class Product{
//     constructor(productId, productName, pDescription, stockQuantity, price, category){
//        this.productId = productId;
//        this.productName = productName;
//        this.pDescription = pDescription;
//        this.stockQuantity = stockQuantity;
//        this.price = price;
//        this.category = category;
//     }
//     // updateStock(quantity) {
//     //     this.stockQuantity += quantity;
//     // }
//     getProductValue() {
//         return this.stockQuantity * this.price;
//     }
//     }
// class bill{
//         constructor(billId,product,Customer,billDate,quantity){
//             this.billId = billId;
//             this.product = product;
//             this.Customer = Customer;
//             this.billDate = billDate;
//             this.quantity = quantity;
//         }
//         generateBill() {
//             console.log(`Bill #${this.billId} for Customer ID: ${this.Customer.CustomerId} on ${this.billDate}`);
//         }
    
//     }
// class empcust{
//         constructor(Employee, Customer){
//             this.Employee = Employee;
//             this.Customer = Customer;
//         }
//         getInfo(){
//             console.log(`EmpID:${this.Employee.EmployeeId} employee has handeled the customer with Customer ID: ${this.Customer.CustomerId}`);
//         }
//     }

// class prodsupp{
//         constructor(Product,Supplier){
//             this.Product = Product;
//             this.Supplier = Supplier;
//         }
//         getprodsuppInfo(){
//             console.log(`${this.Product.productName} is supplied by SupplierID: ${this.Supplier.supplierId}`);
//         }
//     }

// class custprod{
//         constructor(Customer, Product){
//             this.Customer = Customer;
//             this.Product = Product;
//         }
//         getcustprodInfo(){
//             console.log(`Customer ID: ${this.Customer.CustomerId} customer has purchased :${this.Product.productName}`);
//         }

//     }


// const emp = new Employee(2,"John", "Doe", "555-1234", 30, 5000, "john.doe@example.com",1 );
// const cust = new Customer(2, "Jane", "Smith", "555-5678", 25,1);
// const supp = new Supplier("Durvesh", "Pokade", "555-9999", 40, 100, 1, 2);
// const prod = new Product(1,"Icecream", "A snacking  cool product",10, 2000, 1);
// const bill1 = new bill(1,'apple',cust,'20-05-2002',5);
// bill1.generateBill();

// console.log(cust.makePurchase({pName:'Apples'}, 10)); 
// console.log(emp.getFullName());
// console.log(emp.getAnnualSalary());

// console.log(cust.getFullName());
// console.log(cust.makePurchase({ pName: "Fruits" }, 3));

// console.log(supp.getFullName());
// console.log(supp.supplyproduct({ pName:"Veggeis" }, 50));

// const pivot1 = new empcust(emp,cust);
// pivot1.getInfo();

// const pivot2 = new prodsupp(prod, supp);
// pivot2. getprodsuppInfo();

// const pivot3 = new custprod(cust, prod);
// pivot3.getcustprodInfo();



import { Employee } from './Employee.js';
import { Customer } from './Customer.js';
import { Supplier } from './Supplier.js';
import { Product } from './Product.js';
import { Bill } from './Bill.js';
import { EmpCust } from './EmpCust.js';
import { ProdSupp } from './ProdSupp.js';
import { CustProd } from './CustProd.js';

const emp = new Employee(2, "John", "Doe", "555-1234", 30, 5000, "john.doe@example.com", 1);
const cust = new Customer(2, "Jane", "Smith", "555-5678", 25, 1);
const supp = new Supplier("Durvesh", "Pokade", "555-9999", 40, 100, 1, 2);
const prod = new Product(1, "Icecream", "A snacking cool product", 10, 2000, 1);
const bill1 = new Bill(1, 'apple', cust, '20-05-2002', 5);

bill1.generateBill();

console.log(cust.makePurchase({ pName: 'Apples' }, 10));
console.log(emp.getFullName());
console.log(emp.getAnnualSalary());

console.log(cust.getFullName());
console.log(cust.makePurchase({ pName: "Fruits" }, 3));

console.log(supp.getFullName());
console.log(supp.supplyproduct({ pName: "Veggies" }, 50));

const pivot1 = new EmpCust(emp, cust);
pivot1.getInfo();

const pivot2 = new ProdSupp(prod, supp);
pivot2.getProdSuppInfo();

const pivot3 = new CustProd(cust, prod);
pivot3.getCustProdInfo();
