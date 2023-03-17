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
function fetchWA(url, method) {
    return 1;
}
fetchWA('a', 'post');
let method = 'post';
const ab = fetchWA('a', method);
let user = {
    name: 'Sergey',
    age: 36,
    skills: ['1', '2'],
    id: 12,
    createdAt: new Date(),
    log(id) {
        return `${id}`;
    },
    logData(data) {
        return `${data}`;
    }
};
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    return t;
}
// console.log(testPass({
// 	login: 'a',
// 	password: {
// 		type: 'primary'
// 	}
// }))
function multiple(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiple(5);
    return t;
}
// console.log(test('a'))
//28
let input;
input = 3;
input = ['a', 'b'];
function run(i) {
    if (typeof i == 'number') {
        i++;
    }
    else {
        i;
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
function processAction(action) {
    switch (action) {
        case 'refund':
            break;
        case 'chrckout':
            break;
        case 'reject':
            break;
        default:
            const _ = action;
            throw new Error('Нет такого action');
    }
}
function generateError(message) {
    throw new Error(message);
    // console.log(message)
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('Ошибка');
    // return false;
}
// isString(true)
// 30 Null
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Sergey'
        };
    }
}
const user2 = getUser();
// const name2 = user2.name; //"strictNullChecks": true покажет ошибку
if (user2) { //тогда нужна проверка!
    const name2 = user2.name;
}
// 031 приведение типов
let a = 1;
let b = a.toString();
let e = new String(a).valueOf(); // возвращает примитивное значение указанного объекта
let f = new Boolean(a).valueOf();
// console.log(f)
let c = 'asd';
let d = parseInt(c); // или +c
const user3 = {
    name: "Sergey",
    email: "Sergey@mail.ru",
    login: 'Sergey'
};
const admin = Object.assign(Object.assign({}, user3), { role: 1 });
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
const admin2 = userToAdmin(user3);
// 032 Type Guard
function logId(id) {
    if (isString2(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString2(x) {
    return typeof x === 'string';
}
// logId(123)
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
setRoleZero(admin);
console.log('admin', admin);
// setRoleZero(user3);
// console.log('admin', user3);
// let o1 = {a: 1}
// let o2 = {b: 2}
// let o3 = {c: 3}
// let obj = Object.assign(o1, o2, o3);
// console.log(obj)
// console.log(o1)
// console.log(o2)
// console.log(o3)
// console.log(o1 === obj)
