//Упражнение - Делаем корзину товаров  (Препод):
class Product2 {
	constructor(
		public id: number,
		public title: string,
		public price: number
	) {
	}
}
class Delivery {
	constructor(
		public date: Date
	) {
	}
}
class HomeDelivery extends Delivery {
	constructor(date: Date, public address: string) {
		super(date);
	}
}
class ShopDelivery extends Delivery {
	constructor(public shopId: number) {
		super(new Date());
	}
}
type DeliveryOptions = HomeDelivery | ShopDelivery;
class Cart2 {
	private products: Product2[] = [];
	private delivery: DeliveryOptions;
	public addProduct(product: Product2): void {
		this.products.push(product);
	}
	public deleteProduct(productId: number): void {
		this.products = this.products.filter((p: Product2) => p.id !== productId);
	}
	public getSum(): number {
		return this.products
			.map((p: Product2) => p.price)
			.reduce((p1: number, p2:number) => p1 + p2); // Аналог моей записи
	}
	public setDilivery(delivery: DeliveryOptions): void {
		this.delivery = delivery;
	}
	public	checkout(): void | object {
		if (this.products.length == 0) {
			throw new Error('Нет ни одного товара в корзине!');
		}
		if (!this.delivery) {
			throw new Error('Не указат способ доставки!');
		}
		return {success: true}
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