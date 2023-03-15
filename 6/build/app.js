"use strict";
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
    login() {
    }
}
class User10 {
    constructor(name) {
        this.name = name;
    }
}
function createUser9(user) {
    // @ts-ignore -  игнорироуем ошибку
    const defaultUser = new User9('default'); // "noUnusedLocals": true, покажет что свойсто не используется!
    defaultUser.role = undefined; //"exactOptionalPropertyTypes": true, ошибка
    switch (user.role) {
        case 'admin': //"noFallthroughCasesInSwitch": true, ошибка
            const o = 7;
        case 'user':
            return true;
            const c = 1; //"allowUnreachableCode": true, покажет не достижимый код!
    }
}
const s = { 'drive111': true };
const d = s['drive']; //"noUncheckedIndexedAccess": true, при вкл сможепм веренуть undefined, так как свойтсва может не быть!
console.log(d);
s.drive; // "noPropertyAccessFromIndexSignature": true, нужно обращаться через s.[drive] если свойство опционально!
class VipUser9 extends User9 {
    login() {
    }
}
