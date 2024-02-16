let message = `
Welcome to Migros. 
Do you have a Money Card?
1-Yes
2-No
`;

const products = [
    {
        price: 70,
        productName: 'milk',
    },
    {
        price: 400,
        productName: 'eat',
    },
    {
        price: 20,
        productName: 'bread',
    },
];

let conclusion = confirm(message);
let amountToBePaid;

if (conclusion) {
    let name = prompt('Enter your first name');
    let lastName = prompt('Enter your last name');

    const customer = new Customer(name, lastName, conclusion, products);
    amountToBePaid = customer.calculate();

    alert(`
    Customer information:${customer.getFirstName()} ${customer.getLastName()}
    Amount to be paid: ${amountToBePaid}
    `);
} else {
    const customer = new Customer(null, null, conclusion, products);
    amountToBePaid = customer.calculate();
    alert(`Amount to be paid: ${amountToBePaid}`);
}
