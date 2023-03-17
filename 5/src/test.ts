//045 Упражнение - Делаем корзину товаров  (МОЕ РЕШЕНИЕ!!!)
class Product {
	name: string;
	price: number;
	id: number;
	constructor(name: string, price: number, id: number) {
		this.name = name;
		this.price = price;
		this.id = id;
	}
}
class Home {
	date: Date;
	address: string;
		constructor(address: string, date: Date) {
		this.date = date;
		this.address = address;
	}
}
class PickupPoint {
	date: Date = new Date();
	shopId: number;
	constructor(shopId: number) {
		this.shopId = shopId;
	}
}
class Cart {
	private products: Product[] = [];
	private delivery: Home | PickupPoint;
	private success: Boolean = false;
	addProduct(product: Product): void {
		this.products.push(product);
		if (this.products.length > 0 && this.delivery) {
			this.success = true;
		}
	}
	deleteProduct(idOrObj: number | Product): void {
		if (typeof idOrObj === 'number') {
			this.products = this.products.filter(product => product.id !== idOrObj);
		} else if (idOrObj instanceof Product) {
			const id = idOrObj.id;
			this.products = this.products.filter(product => product.id !== id)
		}
		if (this.products.length < 1) {
			this.success = false;
		}
	}
	costOfGoods(): number {
		return this.products.reduce((acc, product) => acc + product.price, 0);
	}
	orderDelivery(shopId: number): void;
	orderDelivery(address: string, date: Date): void;
	orderDelivery(addressOrShopId: string | number, date?: Date): void {
		if (typeof addressOrShopId === 'number') {
			this.delivery = new PickupPoint(addressOrShopId);
		} else if (typeof addressOrShopId === 'string' && date instanceof Date) {
			this.delivery = new Home(addressOrShopId, date);
		}
		if (this.products.length > 0 && this.delivery) {
			this.success = true;
		}
	}
	checkout(): void | boolean {
		if (this.products.length > 0 && this.delivery) {
			// this.success = true
			return true
		} else {
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

