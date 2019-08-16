function Person(firstName, lastname){
    this.firstName = firstName;
    this.lastname = lastname;
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastname}!`;
}

const person = new Person('John', 'Doe');
console.log(person.greeting());

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Cause Customer to inherit Person 
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;
Customer.prototype.clap = function(){
    return 'Applause';
}
const customer = new Customer('Sam', 'Jones', '555-1212','VIP');
console.log(`${customer.phone} ${customer.membership} ${customer.greeting()} ${customer.clap()}`);
//console.log(person.clap()); // exception because clap() was added to sub class.