// based on https://github.com/MadDevSkilz/faker-demo

// https://github.com/typicode/json-server

// https://github.com/faker-js/faker
// https://fakerjs.dev/guide/

// how to support odata
// maybe a middleware as a proxy that intercepts an odata requests
// and transforms it into json server request
// https://github.com/typicode/json-server#add-middlewares
// https://github.com/typicode/json-server#module


module.exports = function() {

    const faker = require("@faker-js/faker").faker; // https://fakerjs.dev/guide/    
    const _ = require("lodash");

    // sets locale to de
    faker.locale = 'de';
    faker.seed(123);

    const orders = _.times(50, function (n) {
        return {
            id: n,
            guid: faker.datatype.uuid(),
            market: faker.helpers.arrayElement(["Fancy Market", "Vegans4Life"]),
            postDate: faker.date.past(),                
        }
    })

    const products = _.times(100, function (n) {
        return {
            id: n,
            guid: faker.datatype.uuid(),
            orderId: orders[_.random(0, orders.length-1)].id,
            order_guid: orders[_.random(0, orders.length-1)].guid,
            name: faker.commerce.product(),                
            //price: faker.finance.amount()
            price: Math.random() < 0.8 ?
                faker.commerce.price(1, 6.99, 2, '€'):
                Math.random() < 0.8 ?
                    faker.commerce.price(7, 20, 2, '€') :
                    faker.commerce.price(100, 1200, 2, '€'),
        }
    })

    return {
        // remove orders without any products
        orders: orders.filter((order, _) => {
            const indexOfProduct = products.map(prod => prod.orderId).indexOf(order.id)
            return indexOfProduct != -1
        }),
        products: products
    };
};

// filtering
// http://localhost:3001/products?name=Shirt
// http://localhost:3001/products?orderId=49
// [
//     {
//       "id": 1,
//       "guid": "7218b86a-4d7b-4b95-b65a-55334fac1c60",
//       "market": "Fancy Market",
//       "postDate": "2022-04-27T10:32:50.975Z"
//     },
//     {
//       "id": 2,
//       "guid": "72614e6c-ebf8-4879-9145-76ade4177f38",
//       "market": "Fancy Market",
//       "postDate": "2021-11-18T05:00:45.650Z"
//     }
// ]

// embedding sub-items within main item as array
// http://localhost:3001/orders?_embed=products
// {
//     "id": 0,
//     "guid": "bb463b8b-b76c-4f6a-9726-65ab5730b69b",
//     "market": "Vegans4Life",
//     "postDate": "2022-04-24T07:20:27.678Z",
//     "products": [
//         {
//             "id": 17,
//             "guid": "b191b84c-6c5f-4e2f-ad7b-dec2882b61bc",
//             "orderId": 0,
//             "order_guid": "316b35df-7243-4e75-be10-8bd76790c065",
//             "name": "Pants",
//             "price": "€297.00"
//         },
//         {
//             "id": 62,
//             "guid": "73ef24bf-42bc-4390-ac4d-12fc6579898e",
//             "orderId": 0,
//             "order_guid": "656ecdbb-7f86-4d3b-984b-251899519a3b",
//             "name": "Table",
//             "price": "€14.00"
//         },
//     ]
// }
