"use strict";
//Упражнение - Делаем корзину товаров  (Препод):
class Product2 {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart2 {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2); // Аналог моей записи
    }
    setDilivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length == 0) {
            throw new Error('Нет ни одного товара в корзине!');
        }
        if (!this.delivery) {
            throw new Error('Не указат способ доставки!');
        }
        return { success: true };
    }
}
const cart2 = new Cart2();
cart2.addProduct(new Product2(1, 'Печенье', 10));
cart2.addProduct(new Product2(2, 'Торт', 30));
cart2.addProduct(new Product2(3, 'Шоколад', 20));
cart2.deleteProduct(1);
// cart2.setDilivery(new HomeDelivery(new Date(2023,2,14,15,0,0,0), 'Еюмень'));
cart2.setDilivery(new ShopDelivery(17));
console.log(cart2.getSum());
console.log(cart2.checkout());
console.log(cart2);
