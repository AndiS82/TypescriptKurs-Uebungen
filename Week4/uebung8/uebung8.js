"use strict";
// interface Image {
//     imageUrl: string;
//     imageData: string;
//     altText: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
const order1 = {
    orderNumber: 1,
    totalAmount: 12.8,
    productIds: [1, 2, 3],
    creditCardNumber: 8673746
};
const order2 = {
    orderNumber: 2,
    totalAmount: 69.50,
    productIds: [1, 2, 3],
    creditCardNumber: 165362263
};
const order3 = {
    orderNumber: 3,
    totalAmount: 5472,
    productIds: [1, 2, 3, 4, 5],
    email: 'me@order.com'
};
function processCreditCardOrder(order) {
    console.log("Processing Credit Card payment for Order: ", order.orderNumber);
}
function processPaypalOrder(order) {
    console.log("Processing PayPal for Order: ", order.orderNumber);
}
function isCreditCardOrder(order) {
    return 'creditCardNumber' in order;
}
;
function runOrders(orders) {
    orders.forEach(order => {
        if (isCreditCardOrder(order))
            processCreditCardOrder(order);
        else
            processPaypalOrder(order);
    });
}
console.log(runOrders([order1, order2, order3]));
//# sourceMappingURL=uebung8.js.map