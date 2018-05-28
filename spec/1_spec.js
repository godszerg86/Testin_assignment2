describe('Shopping cart', () => {


    let banana, apple, beer, milk, pizza, shopCart;
    banana = {
        itemId: 1,
        price: 5.00,
    };
    apple = {
        itemId: 2,
        price: 10.00,
    };
    beer = {
        itemId: 3,
        price: 1.00,
    };
    milk = {
        itemId: 4,
        price: 2.00,
    };
    pizza = {
        itemId: 5,
        price: 15.00,
    };


    beforeEach(() => {
        shopCart = new ShopCart();
        shopCart.scan(beer);
        shopCart.scan(apple);
        shopCart.scan(milk);
        shopCart.scan(pizza);
        shopCart.scan(banana);
    });


    it('method scan(product) to add an item to the shopping cart.', () => {
        expect(shopCart.items().length).toEqual(5);
    });


    it('can not have more than 5 items in the cart.', () => {
        expect(shopCart.scan(banana)).toBe(`Your cart is full.`);
        expect(shopCart.items().length).toBeLessThan(6);
        expect(shopCart.items().length).toBe(5);
    });


    it('remove(product) to remove exact item from the shopping cart and reduce total price', () => {
        shopCart.remove(banana);
        expect(shopCart.items().length).toBe(4);
        expect(shopCart.items()).toEqual([{
            itemId: 3,
            price: 1.00,
        }, {
            itemId: 2,
            price: 10.00,
        }, {
            itemId: 4,
            price: 2.00,
        }, {
            itemId: 5,
            price: 15.00,
        }]);
        expect(shopCart.totalPrice()).toBe(28);
    });


    it('if cart is empty `remove(product) return Cart is empty`', () => {
        shopCart.remove(beer);
        shopCart.remove(apple);
        shopCart.remove(milk);
        shopCart.remove(pizza);
        shopCart.remove(banana);
        shopCart.remove(banana);
        expect(shopCart.remove(banana)).toBe(`Your cart is empty.`);
    });


    it('discount(10) percentage of discount to apply to your cart.', () => {
        shopCart.discount(10);
        expect(shopCart.totalPrice()).toBe(29.7);
    });


    it(' You cannot discount items more than 50% or the manager will get mad. If you attempt to discount items more than 50%, it discount only 50%.', () => {
        shopCart.discount(60);
        expect(shopCart.totalPrice()).toBe(16.5);
    });


    it('total() to return the total of all items in the cart, after any discounts have been applied.', () => {
        expect(shopCart.totalPrice()).toBe(33);
    });


    it('items() This will return the current items in your cart.', () => {
        expect(shopCart.items()).toEqual([{
            itemId: 3,
            price: 1.00,
        }, {
            itemId: 2,
            price: 10.00,
        }, {
            itemId: 4,
            price: 2.00,
        }, {
            itemId: 5,
            price: 15.00,
        }, {
            itemId: 1,
            price: 5.00,
        }]);
    });
});
