//059 Пример встроенных generic
const num: Array<number> = [1, 2, 3];
async function test() {
	const a = await new Promise<number>((resolve, reject) => {
		resolve(1);
	})
}

const check: Record<string, boolean> = {
	drive: true,
	kpp: false
}
//060 Пишем функцию с generic
function logMiddleware<T>(data: T): T {
	console.log(data);
	return data;
}
// const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> { // Array<T> или T[]
	const l = data.length / 2; 
	data.splice(0, l)
	return data;
}
getSplitedHalf<number>([1, 3, 4])
const array = [1, 2, 3, 4, 5, 6];
// console.log(getSplitedHalf<number>(array));
// console.log(array)
//062 Использование в типах
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf; // можем использовать Y

interface ILogLine<T> {
	timeStamp: Date;
	data: T;
} 
type LogLineType<T> = {
	timeStamp: Date;
	data: T;
}

const logLine: ILogLine<{a: number}> = { // можно LogLineType
	timeStamp: new Date(),
	data: {
		a: 1
	}
}
//063 Ограничение generic
class Vehicle {
	run: number;
}
// interface Vehicle { //Вместо класса можем использовать interface!
// 	run: number;
// }
function kmToMiles<T extends Vehicle>(vehicle: T): T {
	vehicle.run *= 0.62;
	return vehicle;
} 
class LCV extends Vehicle {
	capacity: number;
}
// const v = new Vehicle();
// v.run = 100;
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({run: 1}); // можем передать {}, а не класс
// console.log(vehicle);
// console.log(lcv);

function logId(id: string | number): string | number { // Тоже-самое что  и внизу!
	console.log(id);
	return id;
}
function logId2<T extends string | number, Y>(id: T, additionalDate: Y): {id: T, data: Y} {
	console.log(id);
	console.log(additionalDate);
	return {id, data: additionalDate};
}

//065 Generic классы
class Resp<D, E> {
	data?: D;
	error?: E;
	constructor(data?: D, error?: E) {
		data && (this.data = data);
		if (error) this.error = error;
	}
}
const res = new Resp<string, number>('data', 404);
const res2 = new Resp<string, number>('data');
// const res3 = new Resp<string, number>(404);// ошибка
const res4 = new Resp<string, number>();

// class HTTPResp extends Resp<D, E> { //не можем наслед от классса с джинериками
class HTTPResp<F> extends Resp<string, number> {// нужно вместо D,E указать string, number
	code: F;											
	setCode(code: F) {
		this.code = code;
	}
}
const httpRes = new HTTPResp<string>();
// httpRes.  // покажет 3 свойства и 1 метод

//066 Mixins  
type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T; //G-generic. <T = {}> - по умолчанию равен {}

class List {
	constructor(public items: string[]) {}
}
class Accordion {
	isOpened: boolean;
}
type ListType = GConstructor<List>
type AccordionType = GConstructor<Accordion>

class ExtendedListClass extends List { // 1.При помощи наследованию
	first() {
		return this.items[0];
	}
}
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) { // 2.При помощи Mixins, можем extend 2 класса
	return class ExtendedList extends Base {
		first() {
			return this.items[0];
		}
	}
}
class AccordionList {
	isOpened: boolean; //если забудем , покажет ошибку!
	constructor(public items: string[]) {}
}
// const list = ExtendedList(List);
const list = ExtendedList(AccordionList);
const result = new list(['a', 'b', 'c']);
console.log(result);
console.log(result.first());