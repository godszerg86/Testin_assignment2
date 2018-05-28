class ShopCart {
    constructor() {
        this.cart = [];
        this.totalCad = 0.0;
        this.totalDiscount = 0;
    }
    scan(product) {
        if (typeof product === 'object') {
            if (this.cart.length < 5) {
                this.cart.push(product);
                this.totalCad += product.price;
            } else {
                return `Your cart is full.`
            }
        } else {
            return `Product is not an object`
        }
    };
    items() {
        return this.cart;
    };
    remove(product) {
        if (this.cart.length) {
            for (let i in this.cart) {
                if (this.cart[i].itemId === product.itemId) {
                    this.totalCad -= product.price;
                    this.cart.splice(i, 1);
                }
            }
        } else {
            return `Your cart is empty.`
        }
    };
    discount(precent) {
        if (precent > 50) {
            precent = 50;
        }
        this.totalDiscount = precent * 0.01;
    }
    totalPrice() {
        return this.totalCad = this.totalCad - (this.totalCad * this.totalDiscount);
    }
}