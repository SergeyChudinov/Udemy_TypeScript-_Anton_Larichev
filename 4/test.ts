// 26
// interface IPayment {
// 	sum: number;
// 	from: number;
// 	to: number;
// }
// enum PaymentStatus {
// 	Success = 'success',
// 	Failed = 'failed'
// }
// interface IPaymentRequest extends IPayment { }
// interface Data extends IPayment {
// 	databaseId: number;
// }
// interface ResSuccess {
// 	status: PaymentStatus;
// 	data: Data;
// }
// interface ResFailed {
// 	status: PaymentStatus;
// 	data: {
// 		errorMessage: string;
// 		errorCode: number;
// 	};
// }
// async function getFaqs(req: IPaymentRequest): Promise<ResSuccess | ResFailed> {
// 	const res = await fetch('/faqs', {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
// 	const data = await res.json();
// 	return data;
// }

interface IPayment {
	sum: number;
	from: number;
	to: number;
}
enum PaymentStatus {
	Success = 'success',
	Failed = 'failed'
}
interface IPaymentRequest extends IPayment { }

interface IdataSuccess extends IPayment {
	databaseId: number;
}
interface IdataFailed {
	errorMessage: string;
	errorCode: number;
}
interface IResponseSuccsess {
	status: PaymentStatus.Success;
	data: IdataSuccess;
}
interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IdataFailed;
}
async function getFaqs(req: IPaymentRequest): Promise<IResponseSuccsess | IResponseFailed> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
//33
// type f = (res: IResponseSuccsess | IResponseFailed) => number;
function isSuccsess(res: IResponseSuccsess | IResponseFailed): res is IResponseSuccsess {
	if (res.status === PaymentStatus.Success) {
		return true;
	}
	return false;
}
function isSuccsess2(res: IResponseSuccsess | IResponseFailed): res is IResponseSuccsess {
	return 'databaseId' in res.data;
}
function isSuccsessAlternative(res: IResponseSuccsess | IResponseFailed): res is IResponseSuccsess {
	return (res as IResponseSuccsess).data.databaseId !== undefined ;
}
function func(res: IResponseSuccsess | IResponseFailed): number {
	if (isSuccsess(res)) {
		return res.data.databaseId;
	} else {
		throw new Error(res.data.errorMessage)
	}
}
const res: IResponseSuccsess = {
	status: PaymentStatus.Success,
	data: {
		databaseId: 567,
		sum: 10000,
		from: 2,
		to: 4
	}
}
const res2: IResponseFailed = {
	status: PaymentStatus.Failed,
	data: {
		errorMessage: "Недостаточно средств",
		errorCode: 4
	}
}
const returnRes = func(res);
console.log(returnRes);
const returnRes2 = func(res2);
console.log(returnRes2);