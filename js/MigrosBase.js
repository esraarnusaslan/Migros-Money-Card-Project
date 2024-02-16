class MigrosBase {
    discountRate = 20;

    constructor(firstName, lastName, isThereCard, products) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isThereCard = isThereCard;
        this.products = products;
    }

    calculate() {
        let amountToBePaid = 0;

        if (this.checkYourProduct(this.products)) {
            //basket full
            if (this.isThereCard) {
                this.products.forEach((product) => {
                    amountToBePaid +=
                        (product.price * (100 - this.discountRate)) / 100;
                });
            } else {
                this.products.forEach((product) => {
                    amountToBePaid += product.price;
                });
            }
        } else {
            alert('You must purchase at least 1 product');
        }
        return amountToBePaid;
    }

    checkYourProduct(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }
}
