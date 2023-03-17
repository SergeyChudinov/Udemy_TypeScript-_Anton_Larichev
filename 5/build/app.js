"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
//35-36 Конструктор
class User {
    constructor(ageOrnName, age) {
        if (typeof ageOrnName === 'string') {
            this.name = ageOrnName;
        }
        else if (typeof ageOrnName === 'number') {
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
}
const admin = new Admin();
admin.role = 1;
//37 Методы
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed"; // Отмена
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Платеж не может возвращен!');
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
    constructor(skills) {
        this.skills = skills;
    }
    ;
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else if (Array.isArray(skillOrSkills)) {
            this.skills = this.skills.concat(skillOrSkills);
        }
    }
}
const user5 = new User2(['a', 's', 'c']);
// console.log(user5);
// user5.addSkill('d');
user5.addSkill(['d', 'f']);
function run(dis) {
    if (typeof dis == 'number') {
        return dis;
    }
    else {
        return dis;
    }
}
run(5);
//039 Getter и Setter
class User3 {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return this._login;
    }
}
const user6 = new User3();
user6.login = 'myLogin';
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
}
class User4 {
    delete() {
        throw new Error('Method not implemented.');
    }
    pay(paymentId) {
        //
    }
}
class Payment2 {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class ParsistedPayment extends Payment2 {
    constructor(databseId) {
        const id = Math.random();
        super(id);
        this.databseId = databseId;
    }
    save() {
        //
    }
    pay(date) {
        // this.status = 'paid';
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
const persisted = new ParsistedPayment(1);
// persisted.pay(new Date());
// console.log(persisted);
// 042 Особенности наследования
class User7 {
    constructor() {
        this.name = 'user'; //1
        console.log(this.name); //2
    }
}
class Admin2 extends User7 {
    constructor() {
        super();
        this.name = 'admin'; //3
        console.log(this.name); //4
    }
}
// new Admin2();
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
//043 Композиция
class User8 {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    serchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User8("Sergey"));
users.push(new User8("Serg"));
// console.log(users.serchByName("Sergey")[0].name);
// console.log(users.toString());
// console.log(users);
class UserList {
    constructor() {
        this.users = []; // UserList { users: [ User8 { name: 'Sergey' } ] }
    }
    push(u) {
        this.users.push(u);
    }
}
const userList = new UserList();
// console.log(new User8("Sergey"))
userList.push(new User8("Sergey"));
// console.log(userList);
class Payment3 {
}
class UserWithPayment extends Payment3 {
}
class UserWithPayment2 {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
//044 Видимость свойств
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // #- так приват свойство пишется в JS, у наследников нет доступа как и у private
    }
    set model(m) {
        this._model = m;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get model() {
        return this._model;
    }
    set price(n) {
        __classPrivateFieldSet(this, _Vehicle_price, n, "f");
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f");
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
// new Vehicle().make = 'd';
const vehicle = new Vehicle();
vehicle.model = 'abc';
// console.log(vehicle);
// console.log(vehicle.model);
const vehicle2 = new Vehicle();
vehicle2.price = 200;
// console.log(vehicle.isPriceEqual(vehicle2));
class EuroTruck extends Vehicle {
    setDamage(m) {
        this.model = m;
    }
    setRun(km) {
        this.run = km * 0.62;
    }
}
const euroTruck = new EuroTruck();
euroTruck.setDamage('a');
euroTruck.setRun(1);
// console.log(euroTruck);
//046 Статические свойства
class UserService {
    static getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return UserService.db.findById(id);
        });
    }
    constructor(id) {
        this.id = id;
    } // сущетсвует толко в экземляре класса, через UserService(без new) не можем передать начальные данные
    create() {
        UserService.db; //this будет иметь доступ только к create()
    }
}
(() => {
    UserService.dbc = 'asd';
})();
UserService.db = 1; // к нему можно обращаться как к обьекту, имеем доступ только к  static свойствам!
// UserService.getUser(1);
const inst = new UserService(1);
inst.create(); // к static свойсвам нет доступа!!
// console.log(UserService);
// console.log(inst);
//047 Работа с this
class Payment4 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate(a) {
        return this.date;
    }
}
const p = new Payment4();
const user7 = {
    id: 1,
    // paymentDate: p.getDate, // покажет ошибку внизу!
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
};
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
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Sergey');
const res2 = new AdminBuilder().setName('Sergey'); //по умолчанию this будет ссылаться на AdminBuilder
let user8 = new UserBuilder();
// console.log(user8.isAdmin());
// console.log(new AdminBuilder().isAdmin());
// if(user8.isAdmin()) {
// 	console.log(user8);
// } else {
// 	console.log(user8);
// }
//049 Абстрактные классы. Абстрактный метод может быть только если и сам класс явл. абстрактным!!!
class Controller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
// new Controller(); //ошибка
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserController();
// c.handleWithLogs('Request');
//056 Strict режим
function test(a) {
    return a;
}
let f = test; // "strictFunctionTypes": true,  - покажет ошибку  
// f('abc');
test.apply(undefined, [1, 3]); //"strictBindCallApply": true,  - покажет ошибку только при Call или Aplay
class A {
    // constructor(b: number) { // - иницилизация конструктора
    // 		this.b = b
    // }
    test() {
        return function () {
            this.b = 5; //  "strictPropertyInitialization": true, - покажет ошибки с this!
        };
    }
}
try {
}
catch (e) {
    console.log(e.message); // "useUnknownInCatchVariables": true,  - покажнт ошибки на e, у нее нет messsage!
}
//057 Проверки кода
class User9 {
    constructor(name) {
        this.name = name;
    }
}
function createUser9(user) {
    // @ts-ignore -  игнорироуем ошибку
    const defaultUser = new User9('default'); // "noUnusedLocals": true, покажет что свойсто не используется!
}
