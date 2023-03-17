//061 Упражнение - Функция преобразования в строку (мое решение!)
function toString<T>(data: T): string | void {
	if (data === null || data === undefined) {
		return;
	} else if (typeof data == 'number') {
		return data.toString();
	} else if (typeof data == 'string') {
		return data;
	} else if (typeof data == 'boolean') {
		return data.toString();
	} else if (Array.isArray(data)) {
		// return data.join(' ');
		return data.toString();
	} else if (typeof data == 'object') {
		return JSON.stringify(data);
	}
}
console.log(toString(null));
console.log(typeof toString(null));
console.log(toString(undefined));
console.log(typeof toString(undefined));
console.log(toString(5));
console.log(typeof toString(5));
console.log(toString('abc'));
console.log(typeof toString('abc'));
console.log(toString(true));
console.log(typeof toString(true));
console.log(toString([1, 2, 3]));
console.log(typeof toString([1, 2, 3]));
console.log(toString({a: 1}));
console.log(typeof toString({a: 1}));
//061 Упражнение - Функция преобразования в строку (Преподователя решение!)
function toString<T>(data: T): string | undefined {
	if (Array.isArray(data)) {
		return data.toString();
	}
	switch (typeof data) {
		case 'string':
			return data;
		case 'number':
		case 'symbol':
		case 'bigint':
		case 'boolean':
		case 'function':
			return data.toString();
		case 'object':
			return JSON.stringify(data);
		default:
			return undefined;
	}
}
// console.log(toString<number>(3));
// console.log(toString<boolean>(true));
// console.log(toString<number[]>([1, 2]));
// console.log(toString<{a: number}>({a: 1}));

//064 Упражнение - Функция сортировки id //(мое решение!)
// Необходимо написать функцию сортировки любых объектов, которые имеют id по убыванию и по возрастанию
interface IObj<T> {
	id: number;
	name: T;
}
const data: IObj<string>[] = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];
function sortObj<T extends IObj<string>[]>(data: T, ascending: boolean): T {
	if (ascending) {
		return data.sort((obj1, obj2) => obj1.id - obj2.id);
	} else {
		return data.sort((obj1, obj2) => obj2.id - obj1.id);
	}
}
// console.log(sortObj(data, true));
// console.log(sortObj(data, false));
//(Преподователя решение!) 
const data2 = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];
interface ID {
	id: number
}
function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
	return data.sort((a, b) => {
		switch (type) {
			case 'asc':
				return a.id - b.id;
			case 'desc':
				return b.id - a.id;
		}
	})
}
console.log(sort(data2));
console.log(sort(data2, 'desc'));