"use strict";
//045 Упражнение - Делаем корзину товаров  (МОЕ РЕШЕНИЕ!!!)
class Product {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
}
class Home {
    constructor(address, date) {
        this.date = date;
        this.address = address;
    }
}
class PickupPoint {
    constructor(shopId) {
        this.date = new Date();
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
        this.success = false;
    }
    addProduct(product) {
        this.products.push(product);
        if (this.products.length > 0 && this.delivery) {
            this.success = true;
        }
    }
    deleteProduct(idOrObj) {
        if (typeof idOrObj === 'number') {
            this.products = this.products.filter(product => product.id !== idOrObj);
        }
        else if (idOrObj instanceof Product) {
            const id = idOrObj.id;
            this.products = this.products.filter(product => product.id !== id);
        }
        if (this.products.length < 1) {
            this.success = false;
        }
    }
    costOfGoods() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }
    orderDelivery(addressOrShopId, date) {
        if (typeof addressOrShopId === 'number') {
            this.delivery = new PickupPoint(addressOrShopId);
        }
        else if (typeof addressOrShopId === 'string' && date instanceof Date) {
            this.delivery = new Home(addressOrShopId, date);
        }
        if (this.products.length > 0 && this.delivery) {
            this.success = true;
        }
    }
    checkout() {
        if (this.products.length > 0 && this.delivery) {
            // this.success = true
            return true;
        }
        else {
            throw new Error('Не все пункты выбраны!');
        }
    }
}
const cart = new Cart();
// cart.products.push(new Product('xxx', 1, 777)); // не работает изза приватности!!!
cart.addProduct(new Product('box', 100, 1));
cart.orderDelivery(17);
console.log(cart);
// cart.addProduct(new Product('mouse', 200, 2));
// cart.addProduct(new Product('boll', 300, 3));
// cart.deleteProduct(1);
// cart.deleteProduct(cart.products[0]);
// console.log(cart.costOfGoods());
// console.log(new Date(2023,2,13,15,0,0,0).toLocaleString());
// cart.orderDelivery('Тюмень', new Date(2023,2,14,15,0,0,0));
// cart.orderDelivery(17);
console.log(cart);
console.log(cart.checkout());
// console.log(cart);
// console.log(new Date());
