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
//059 Пример встроенных generic
const num = [1, 2, 3];
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
const check = {
    drive: true,
    kpp: false
};
//060 Пишем функцию с generic
function logMiddleware(data) {
    console.log(data);
    return data;
}
// const res = logMiddleware<number>(10);
function getSplitedHalf(data) {
    const l = data.length / 2;
    data.splice(0, l);
    return data;
}
getSplitedHalf([1, 3, 4]);
const array = [1, 2, 3, 4, 5, 6];
// console.log(getSplitedHalf<number>(array));
// console.log(array)
//062 Использование в типах
const split = getSplitedHalf;
const split2 = getSplitedHalf; // можем использовать Y
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
//063 Ограничение generic
class Vehicle {
}
// interface Vehicle { //Вместо класса можем использовать interface!
// 	run: number;
// }
function kmToMiles(vehicle) {
    vehicle.run *= 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
// const v = new Vehicle();
// v.run = 100;
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 }); // можем передать {}, а не класс
// console.log(vehicle);
// console.log(lcv);
function logId(id) {
    console.log(id);
    return id;
}
function logId2(id, additionalDate) {
    console.log(id);
    console.log(additionalDate);
    return { id, data: additionalDate };
}
//065 Generic классы
class Resp {
    constructor(data, error) {
        data && (this.data = data);
        if (error)
            this.error = error;
    }
}
const res = new Resp('data', 404);
const res2 = new Resp('data');
// const res3 = new Resp<string, number>(404);// ошибка
const res4 = new Resp();
// class HTTPResp extends Resp<D, E> { //не можем наслед от классса с джинериками
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const httpRes = new HTTPResp();
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
// const list = ExtendedList(List);
const list = ExtendedList(AccordionList);
const result = new list(['a', 'b', 'c']);
console.log(result);
console.log(result.first());
