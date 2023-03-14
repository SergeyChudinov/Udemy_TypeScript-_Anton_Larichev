"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
//33
// type f = (res: IResponseSuccsess | IResponseFailed) => number;
function isSuccsess(res) {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}
function isSuccsess2(res) {
    return 'databaseId' in res.data;
}
function isSuccsessAlternative(res) {
    return res.data.databaseId !== undefined;
}
function func(res) {
    if (isSuccsess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
const res = {
    status: PaymentStatus.Success,
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4
    }
};
const res2 = {
    status: PaymentStatus.Failed,
    data: {
        errorMessage: "Недостаточно средств",
        errorCode: 4
    }
};
const returnRes = func(res);
console.log(returnRes);
const returnRes2 = func(res2);
console.log(returnRes2);
