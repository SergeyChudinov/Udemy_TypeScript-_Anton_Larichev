function getFullName(userEntity: {firstname: string, surname:string}): string {
	// console.log(userEntity.city)
	return `${userEntity.firstname} ${userEntity.surname}`
}
const getFullNameArrow = (firstname: string, surname: string): string => {
	return `${firstname} ${surname}`
}

const user = {
	firstname: 'Sergey',
	surname: 'Chudinov',
	city: 'Moscow',
	age: 37,
	skils: {
		dev: true,
		devops: true
	}
}

// console.log(getFullName(user));

const skills: string[] = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
	// console.log(skill.toLocaleUpperCase());
}
// const res = skills
// 	.filter((s: string) => s !== 'DevOps')
// 	.map(s => s + '! ')
// 	.reduce((a, b) => a + b);
// console.log(res);

const arr: [number, string, ...boolean[]] = [1, 'asd', true, true, false];

//16
const skill: readonly [number, string] = [1, 'asd'];
// skill[0] = 2;
// console.log(skill)

//17 Enums
const enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS = 'p',
	FAILED = 3
}
const res = {
	message: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS
}
if (res.statusCode === StatusCode.SUCCESS) {
	console.log(res.statusCode);
	console.log(StatusCode.SUCCESS);
}
// console.log(StatusCode)
const res2 = StatusCode.SUCCESS
console.log(res2)

let a = 1;