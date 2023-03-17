//35-36 Конструктор
class User {
	name: string;
	age: number;
	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(name: string, age: number);
	constructor(ageOrnName?: string | number, age?: number) { // конструкор имплементации
		if (typeof ageOrnName === 'string') {
			this.name = ageOrnName;
		} else if(typeof ageOrnName === 'number') {
			this.age = ageOrnName;
		}
		if (typeof age === 'number') {
			this.age = age;
		}
	}
}
const user = new User('Sergey');
const user2 = new User();
const user3 = new User(33);
const user4 = new User('Sergey', 33);
// console.log(user)
// console.log(user4)

class Admin {
	role: number;
}
const admin = new Admin();
admin.role = 1;

//37 Методы
enum PaymentStatus {
	Holded, // Забронированны
	Processed, // Списаны
	Reversed // Отмена
}
class Payment {
	id: number;
	status: PaymentStatus = PaymentStatus.Holded;
	createdAt: Date = new Date();
	updatedAt: Date;
	constructor(id: number) {
		this.id = id;
	}
	getPaymentLifeTime(): number {
		return new Date().getTime() - this.createdAt.getTime();
	}
	unholdPayment(): void {
		if (this.status == PaymentStatus.Processed) {
			throw new Error('Платеж не может возвращен!')
		}
		this.status = PaymentStatus.Reversed;
		this.updatedAt = new Date();
	}
}
const payment = new Payment(1);
// setTimeout(function f() {
// 	const time = payment.getPaymentLifeTime();
// 	console.log(time);
// }, 2000)
payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);

// 038 Перезагрузка методов
class User2 {
	skills: string[];
	constructor(skills: string[]) {
		this.skills = skills
	};
	addSkill(skill: string): void;
	addSkill(skills: string[]): void;
	addSkill(skillOrSkills: string | string[]): void {
		if(typeof skillOrSkills == 'string') {
			this.skills.push(skillOrSkills);
		} else if (Array.isArray(skillOrSkills)) {
			this.skills = this.skills.concat(skillOrSkills);
		}
	}
}
const user5 = new User2(['a', 's', 'c']);
// console.log(user5);
// user5.addSkill('d');
user5.addSkill(['d', 'f']);
// console.log(user5)

// Перезагрузка функций
function run(dis: number): number;
function run(dis: string): string;
function run(dis: number | string): number | string {
	if(typeof dis == 'number') {
		return dis;
	} else {
		return dis;
	}
}
run(5);

//039 Getter и Setter
class User3 {
	_login: string;
	password: string;
	
	set login(l: string | number) { // тип опред-ся из get-ера return
		this._login = 'user-' + l
	}
	get login() { // если удалим set то свойсва будут readonly
		return this._login;
	}
}
const user6 = new User3();
user6.login = 'myLogin';
// user6._login = '1';
// console.log(user6);
// console.log(user6.login);

// 040 Implements
interface ILogger {
	log(...args: number[]): void;
	error(...args: number[]): void;
}
class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args)
	}
	error(...args: any[]): void {
		console.log(...args)
	}
}

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}
interface Ideletable {
	delete(): void;
}
class User4 implements IPayable, Ideletable {
	delete(): void {
		throw new Error('Method not implemented.');
	}
	pay(paymentId: number | string): void { // можем дополн-о добавить тип string, но только string не можем!, тип должен быть равен или быть шире родителя
		//
	}
	price?: number | undefined;
}

// 041 Extends(наследования)
type PaymentStatus2 = 'new' | 'paid';
class Payment2 {
	id: number;
	status: PaymentStatus2 = 'new';
	constructor(id: number) {
		this.id = id;
	}
	pay() {
		this.status = 'paid';
	}
}
class ParsistedPayment extends Payment2 {
	databseId: number;
	paidAt: Date;
	constructor(databseId: number) {
		const id = Math.random();
		super(id);
		this.databseId = databseId;
	}
	save() {
		//
	}
	override pay(date?: Date) {   // override метод переопределения // override не обязательно
		// this.status = 'paid';
		super.pay();
		if(date) {
			this.paidAt = date;
		}
	}
} 
const persisted = new ParsistedPayment(1);
// persisted.pay(new Date());
// console.log(persisted);

// 042 Особенности наследования
class User7 {
	name: string = 'user';  //1
	constructor() {
		console.log(this.name);  //2
	}
}
class Admin2 extends User7 {
	name: string = 'admin';   //3
	constructor() {
		super();
		console.log(this.name);   //4
	}
}
// new Admin2();

class HttpError extends Error {
	code: number;
	constructor(message: string, code?: number) {
		super(message);
		this.code = code ?? 500;
	}
}

//043 Композиция
class User8 {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
class Users extends Array<User8> { // Не верно  
	serchByName(name: string) {  //Users[ User8 { name: 'Sergey' }, User8 { name: 'Serg' } ]
		return this.filter(u => u.name === name);
	}
	override toString(): string {
		return this.map(u => u.name).join(', ');
	}
}
const users = new Users();
users.push(new User8("Sergey"));
users.push(new User8("Serg"));
// console.log(users.serchByName("Sergey")[0].name);
// console.log(users.toString());
// console.log(users);
class UserList {    // Так правильно  Композиция
	users: User8[] = [];// UserList { users: [ User8 { name: 'Sergey' } ] }
	push(u: User8) {
		this.users.push(u)
	}
}
const userList = new UserList();
// console.log(new User8("Sergey"))
userList.push(new User8("Sergey"));
// console.log(userList);

class Payment3 {
	data: Date;
}
class UserWithPayment extends Payment3 { // Не верно
	name: string;
}
class UserWithPayment2 {  // Так правильно  Композиция
	user: User8;
	payment: Payment3;
	constructor(user: User8, payment: Payment3) {
		this.user = user;
		this.payment = payment;
	}
}

//044 Видимость свойств
class Vehicle {
	public make: string; // public - свойство или метод публичное и его можно менять!
	private damages: string[]; // private -означает что доступно исключительно внутри!
	private _model: string;
	protected run: number; // свойство доступно у наследников , но не доступно извне!
	#price: number; // #- так приват свойство пишется в JS, у наследников нет доступа как и у private

	set model(m: string) {
		this._model = m; 
		this.#price = 100;
	}
	get model() {
		return this._model;
	}
	set price(n: number) {
		this.#price = n;
	}
	isPriceEqual(v: Vehicle) {
		return this.#price === v.#price;
	}
	addDamage(damage: string) {
		this.damages.push(damage);
	}
}
// new Vehicle().make = 'd';
const vehicle = new Vehicle();
vehicle.model = 'abc';
// console.log(vehicle);
// console.log(vehicle.model);

const vehicle2 = new Vehicle();
vehicle2.price = 200;
// console.log(vehicle.isPriceEqual(vehicle2));

class EuroTruck extends Vehicle {
	setDamage(m: string) {
		this.model = m;
	}
	setRun(km: number) {
		this.run = km * 0.62;
	}
}
const euroTruck = new EuroTruck();
euroTruck.setDamage('a');
euroTruck.setRun(1);
// console.log(euroTruck);

//046 Статические свойства
class UserService {
	static db: any; // не требуют создания экземпляра класса , может быть еще и private!!!
	static dbc: string;
	id: number;
	static async getUser(id: number) { // здесь async можем использовать!
		return UserService.db.findById(id);
	}
	constructor(id: number) {
		this.id = id;
	} // сущетсвует толко в экземляре класса, через UserService(без new) не можем передать начальные данные
	create() {
		UserService.db; //this будет иметь доступ только к create()
	}
	static { // статичный блок , этот код будет выполняться в static (UserService)! не могут быть асинхронными!!!!
		UserService.dbc = 'asd';
	}
}
UserService.db = 1; // к нему можно обращаться как к обьекту, имеем доступ только к  static свойствам!
// UserService.getUser(1);
const inst = new UserService(1);
inst.create();  // к static свойсвам нет доступа!!
// console.log(UserService);
// console.log(inst);

//047 Работа с this
class Payment4 {
	private date: Date = new Date();
	getDate(this: Payment4, a: number) { //this: Payment4 нужен чтобы показало ошибку!
		return this.date;
	}
	getDateArrow = () => {
		return this.date;
	}
}
const p = new Payment4();
const user7 = {
	id: 1,
	// paymentDate: p.getDate, // покажет ошибку внизу!
	paymentDate: p.getDate.bind(p), //без bind мы бы потеряли this
	paymentDateArrow: p.getDateArrow
}
// console.log(p.getDate(1));
// console.log(user7.paymentDate(1));
// console.log(user7.paymentDateArrow());
class Payment4Persistent extends Payment4 {
	save() {
		return super.getDate(1);
	}
	saveArrow() {
		return super.getDateArrow(); // можно через this
	}
}
const payment4Persistent = new Payment4Persistent();
// console.log(payment4Persistent.save());
// console.log(payment4Persistent.getDateArrow());

//048 Типизация this
class UserBuilder {
	name: string; 
	setName(name: string): this { //можем поставить тип UserBuilder, тогда тип res2 будет UserBuilder
		this.name =  name;
		return this;
	}
	isAdmin(): this is AdminBuilder {
		return this instanceof AdminBuilder;
	}
}
class AdminBuilder extends UserBuilder {
	// roles: string[];
}
const res = new UserBuilder().setName('Sergey');
const res2 = new AdminBuilder().setName('Sergey'); //по умолчанию this будет ссылаться на AdminBuilder
let user8 : UserBuilder | AdminBuilder = new UserBuilder();
// console.log(user8.isAdmin());
// console.log(new AdminBuilder().isAdmin());
// if(user8.isAdmin()) {
// 	console.log(user8);
// } else {
// 	console.log(user8);
// }

//049 Абстрактные классы. Абстрактный метод может быть только если и сам класс явл. абстрактным!!!
abstract class Controller {//не можем создавать экземляр класса через new ... , но мы можем создавать экземляр наследнику класса
	abstract handle(req: any): void; //  у наследника обязательно пишем метод handle
	handleWithLogs(req: any) {
		console.log('Start');
		this.handle(req);
		console.log('End');
	}
}
// new Controller(); //ошибка
class UserController extends Controller {
	handle(req: any): void { //  обязательный метод handle
		console.log(req);
	}
}
const c = new UserController();
// c.handleWithLogs('Request');

