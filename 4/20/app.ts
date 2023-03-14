type httpMethod = 'post' | 'get';

function fetchWA(url: string, method: httpMethod): 1 | -1 {
	return 1
}
fetchWA('a', 'post')
let method = 'post';
const ab = fetchWA('a', method as 'post');
// console.log(ab)


// type User = {
// 	name: string;
// 	age: number;
// 	skills: string[];
// }
// type Role = {
// 	id: number
// }
// type UserWithRole = User & Role;

interface User {
	name: string;
	age: number;
	skills: string[];
	log: (id: number) => string;
	logData: (data: Date) => string;
}
interface Role {
	id: number;
}
interface UserWithRole extends User, Role {
	createdAt: Date;
}

let user: UserWithRole = {
	name: 'Sergey',
	age: 36,
	skills: ['1', '2'],
	id: 12,
	createdAt: new Date(),
	log(id) {
		return `${id}`;
	},
	logData(data) {
		return `${data}`
	}
}
// console.log(user.log(5));
// console.log(user.logData(user.createdAt))

interface UserDic { // type
	[index: number]: User
}
type ud = Record<number, User>

//24 Types ore Interface
// interface User2 {
// 	name: string
// }
// interface User2 {
// 	age: number
// }
// const user2: User2 = {
// 	name: 'Ser',
// 	age: 27
// }
// interface IDI { // не могут работать с простыми типами
// 	ID: string | number;
// }

// type User2 = { // ругается, повторяющийся индификатор
// 	name: string;
// }
// type User2 = {
// 	age: number;
// }
// const user2: User2 = {
// 	name: 'Ser',
// 	age: 27
// }
// type ID = string | number;

//25 Optional ?
interface UserPro {
	login: string;
	password?: {
		type: 'primary' | 'secondary'
	};
}
function testPass(user: UserPro) {
	const t = user.password?.type
	return t
}
// console.log(testPass({
// 	login: 'a',
// 	password: {
// 		type: 'primary'
// 	}
// }))

function multiple(first: number, second?: number): number {
	if (!second) {
		return first * first
	}
	return first * second
}
function test(param? : string) {
	const t = param ?? multiple(5);
	return t
}
// console.log(test('a'))

//28
let input: unknown;
input = 3;
input = ['a', 'b'];
function run(i: unknown) {
	if (typeof i == 'number') {
		i++;
	} else {
		i
	}
}
run(input);

async function  getData() {
	try {
		await fetch('');
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message)
		}
	}
}
type U1 = unknown | number;
type I1 = unknown & number;

//29 Never
type paymentAction = 'refund' | 'chrckout' | 'reject';
function processAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			break;
		case 'chrckout':
			break;
		case 'reject':
			break;
		default:
			const _: never = action;
			throw new Error('Нет такого action');
	}
}

function generateError(message: string): never {
	throw new Error(message);
	// console.log(message)
}
function isString(x: string | number): boolean  {
	if (typeof x === 'string') {
		return true;
	} else if (typeof x === 'number') {
		return false;
	}
	generateError('Ошибка');
	// return false;
}
// isString(true)

// 30 Null
const n: null = null;
const n1: any = null;
// const n2: number = null;   //"strictNullChecks": false,  чтоб разрешить присваивать null
// const n3: string = null;   //"strictNullChecks": false,  чтоб разрешить присваивать null
// const n4: boolean = null;   //"strictNullChecks": false,  чтоб разрешить присваивать null
// const n5: undefined = null;   //"strictNullChecks": false,  чтоб разрешить присваивать null

interface User {
	name: string;
}
function getUser() {
	if(Math.random() > 0.5) {
		return null
	} else {
		return {
			name: 'Sergey'
		} as User
	}
}
const user2 = getUser(); 
// const name2 = user2.name; //"strictNullChecks": true покажет ошибку
if (user2) { //тогда нужна проверка!
	const name2 = user2.name;
}

// 031 приведение типов
let a = 1;
let b: string = a.toString();
let e: string = new String(a).valueOf() // возвращает примитивное значение указанного объекта
let f: boolean = new Boolean(a).valueOf()
// console.log(f)

let c = 'asd';
let d: number = parseInt(c);  // или +c
// console.log(d)

interface User3 {
	name: string;
	email: string;
	login: string;            
}
const user3: User3 = {
	name: "Sergey",
	email: "Sergey@mail.ru",
	login: 'Sergey'
}
// const user3 = <User3> { // нельзя использовать в реакте
// 	name: "Sergey",
// 	email: "Sergey@mail.ru",
// 	login: 'Sergey'
// }

interface Admin {
	name: string;
	role: number
}
const admin: Admin = { // вернет более широкий обьект, решение ниже
	...user3,
	role: 1
}
function userToAdmin(user: User3): Admin {
	return {
		name: user.name,
		role: 1
	}
}
const admin2: Admin = userToAdmin(user3);

// 032 Type Guard
function logId(id: string | number) {
	if (isString2(id)) {
		console.log(id)
	} else {
		console.log(id)
	}
}

function isString2(x: string | number): x is string  {
	return typeof x === 'string';
}
// logId(123)

function isAdmin(user: User3 | Admin): user is Admin { // 1
	return 'role' in user;
}
function isAdminAlternative(user: User3 | Admin): user is Admin { //2
	return (user as Admin).role !== undefined ;
}
function setRoleZero(user: User3 | Admin) {
	if (isAdmin(user)) {
		user.role = 0;
	} else {
		throw new Error('Пользователь не админ')
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
