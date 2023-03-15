//056 Strict режим
function test(a: number): number {
	return a;
}
type StrOrNumFunc = (a: number | string) => number;
let f: StrOrNumFunc = test; // "strictFunctionTypes": true,  - покажет ошибку  
// f('abc');

test.apply(undefined, [1, 3]) //"strictBindCallApply": true,  - покажет ошибку только при Call или Aplay

class A {
	b: number; //"strictPropertyInitialization": false, - позволяет не инициализировать конструктор! 
	// constructor(b: number) { // - иницилизация конструктора
	// 		this.b = b
	// }
	test() {
		return function() {
			this.b = 5; //  "strictPropertyInitialization": true, - покажет ошибки с this!
		}
	}
}

try {

} catch(e) {
	console.log(e.message) // "useUnknownInCatchVariables": true,  - покажнт ошибки на e, у нее нет messsage!
}

//057 Проверки кода
class User9 {
	name: string;
	role?: 'admin' | 'user';
	constructor(name: string) {
		this.name = name;
	}
	login(): void {

	}
}
class User10 { // Это анология User9, за счет свойства public! можно не писать 2 строчки!!
	constructor(public name: string) {
	}
}
function createUser9(user: User9) { //  "noUnusedParameters": true, покажет что параметр не используется!
	// @ts-ignore -  игнорироуем ошибку
	const defaultUser = new User9('default'); // "noUnusedLocals": true, покажет что свойсто не используется!
	defaultUser.role = undefined; //"exactOptionalPropertyTypes": true, ошибка
	switch(user.role) {
		case 'admin':  //"noFallthroughCasesInSwitch": true, ошибка
			const o = 7;  
		case 'user': 
			return true;
			const c = 1; //"allowUnreachableCode": true, покажет не достижимый код!
	}
}

interface IChecks {
	// drive: boolean;
	[check: string] : boolean; //Обьект у котрого key-строка, а value-boolean
}
const s: IChecks = {'drive111': true}
const d = s['drive']; //"noUncheckedIndexedAccess": true, при вкл сможепм веренуть undefined, так как свойтсва может не быть!
console.log(d)
s.drive // "noPropertyAccessFromIndexSignature": true, нужно обращаться через s.[drive] если свойство опционально!

class VipUser9 extends User9 {
	override login(): void { //"noImplicitOverride": true, если забудем override будет ошибка!
		
	}
}