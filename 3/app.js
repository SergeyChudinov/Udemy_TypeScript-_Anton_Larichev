"use strict";
function getFullName(userEntity) {
    // console.log(userEntity.city)
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
const user = {
    firstname: 'Sergey',
    surname: 'Chudinov',
    city: 'Moscow',
    age: 37,
    skils: {
        dev: true,
        devops: true
    }
};
// console.log(getFullName(user));
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    // console.log(skill.toLocaleUpperCase());
}
// const res = skills
// 	.filter((s: string) => s !== 'DevOps')
// 	.map(s => s + '! ')
// 	.reduce((a, b) => a + b);
// console.log(res);
const arr = [1, 'asd', true, true, false];
//16
const skill = [1, 'asd'];
const res = {
    message: 'Платеж успешен',
    statusCode: 1 /* StatusCode.SUCCESS */
};
if (res.statusCode === 1 /* StatusCode.SUCCESS */) {
    console.log(res.statusCode);
    console.log(1 /* StatusCode.SUCCESS */);
}
// console.log(StatusCode)
const res2 = 1 /* StatusCode.SUCCESS */;
console.log(res2);
let a = 1;
