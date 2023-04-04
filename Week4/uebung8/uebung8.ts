// interface Image {
//     imageUrl: string;
//     imageData: string;
//     altText: string
// }

// interface Product {
//     name: string;
//     productId: number;
//     imageId?: number
// }

// interface Products {
//     [productId: number]: Product;
// }

// interface Images {
//     [imageId: number]: Image;
// }

// type ProductImage = Product & Image

// const images: Images = {
//     1: {
//         imageUrl: "https://testImages.com/book",
//         imageData: "This is a Book",
//         altText: "Sorry, couldn't load this book",
//     },
//     2: {
//         imageUrl: "https://testImages.com/cd",
//         imageData: "This is a CD",
//         altText: "Sorry, couldn't load this cd",
//     },
//     4: {
//         imageUrl: "https://testImages.com/calculator",
//         imageData: "This is a Calculator",
//         altText: "Sorry, couldn't load this Calculator",
//     },
// };

// const products: Products = {
//     10: {
//         name: "book",
//         productId: 10,
//         imageId: 1,
//     },
//     11: {
//         name: "cd",
//         productId: 11,
//         imageId: 2,
//     },
//     12: {
//         name: "laptop",
//         productId: 12,
//     },
//     13: {
//         name: "calculator",
//         productId: 13,
//         imageId: 4,
//     },
// };



// let fetchedImageId: number;
// let result: ProductImage | Product;
// let productList: (ProductImage | Product)[] = [];
// function generateProducts(ids: number[]): (ProductImage | Product)[] {
//     ids.map(id => {
//         Object.keys(products).map(productId => {
//             let numericalId = Number(productId)
//             if (id === Number(productId)) {
//                 if (products[numericalId].imageId) {
//                     fetchedImageId = Number(products[numericalId].imageId)
//                     result = {
//                         name: products[numericalId].name,
//                         productId: numericalId,
//                         imageId: fetchedImageId,
//                         ...images[fetchedImageId]
//                         // imageUrl: images[fetchedImageId].imageUrl,
//                         // imageData: images[fetchedImageId].imageData,
//                         // altText: images[fetchedImageId].altText
//                     }

//                 } else {
//                     result = {
//                         name: products[numericalId].name,
//                         productId: numericalId,
//                         imageId: fetchedImageId
//                     }
//                 }
//                 productList.push(result)
//             }
//         })
//     })
//     console.log(productList)
//     return productList
// }

interface Order {
    orderNumber: number,
    totalAmount: number,
    productIds: number[]
}

const order1: CreditCardOrder | PayPalOrder = {
    orderNumber: 1,
    totalAmount: 12.8,
    productIds: [1, 2, 3],
    creditCardNumber: 8673746
}
const order2: CreditCardOrder | PayPalOrder = {
    orderNumber: 2,
    totalAmount: 69.50,
    productIds: [1, 2, 3],
    creditCardNumber: 165362263
}
const order3: CreditCardOrder | PayPalOrder = {
    orderNumber: 3,
    totalAmount: 5472,
    productIds: [1, 2, 3, 4, 5],
    email: 'me@order.com'
}

interface Paypal {
    email: string
}

interface Creditcard {
    creditCardNumber: number
}

type CreditCardOrder = Order & Creditcard
type PayPalOrder = Order & Paypal

function processCreditCardOrder(order: CreditCardOrder): void {
    console.log("Processing Credit Card payment for Order: ", order.orderNumber);
}

function processPaypalOrder(order: PayPalOrder): void {
    console.log("Processing PayPal for Order: ", order.orderNumber);
}

function isCreditCardOrder(order: CreditCardOrder | PayPalOrder): order is CreditCardOrder {
    return 'creditCardNumber' in (order as CreditCardOrder);
};

function runOrders(orders: Order[]): void {
    orders.forEach(order => {
        if (isCreditCardOrder(order as CreditCardOrder))
            processCreditCardOrder(order as CreditCardOrder)
        else processPaypalOrder(order as PayPalOrder)
    })
}

console.log(runOrders([order1, order2, order3]))

export { }