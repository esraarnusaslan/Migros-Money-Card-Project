class Customer extends MigrosBase {
    constructor(firstName, lastName, isThereCard, products) {
        super(firstName, lastName, isThereCard, products);
    }

    calculate() {
        return super.calculate();
    }

    getFirstName() {
        return super.getFirstName();
    }

    getLastName() {
        return super.getLastName();
    }
}
