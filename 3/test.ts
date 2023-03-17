// let info: {
// 	officeId: number,
// 	isOpened: boolean,
// 	contacts: {
// 		phone: string,
// 		email: string,
// 		address: {
// 			city: string
// 		}
// 	}
// } = {
// 	"officeId": 45,
// 	"isOpened": false,
// 	"contacts": {
// 		"phone": "+79100000000",
// 		"email": "my@email.ru",
// 		"address": {
// 			"city": "Москва"
// 		}
// 	}
// }
// console.log(info)

//18

enum QuestonStatus {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted'
}
async function getFaqs(req: {
	topicId: number,
	status?: QuestonStatus
}): Promise<{
	question: string,
	answer: string,
	tags: string[],
	likes: number,
	status: QuestonStatus
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}