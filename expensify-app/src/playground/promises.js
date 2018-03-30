import 'babel-polyfill';
import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//
// const getData = async () => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//         console.log(response.data);
//     } catch (e) {
//         console.log(e);
//     }
// };
//
// getData();
//
// console.log('after get');
//
// const foo = false;
//
// const myPromise = new Promise((resolve, reject) => {
//     if (foo) {
//         resolve('ok');
//     } else {
//         reject('fail');
//     }
// });
//
// const runMyPromise = async () => {
//     try {
//         console.log(await myPromise);
//     } catch (e) {
//         console.log(e);
//     }
// };
//
// runMyPromise();


// const temp = (p1) => {
//     console.log(p1());
// };
//
// const temp2 = () => {
//     console.log('p2');
// };
//
// temp(temp2);

const pro = new Promise((resolve, reject) => {
    resolve('ok');
});


// function axiosGet(uri) {
//     return new Promise(function(resolve, reject) {
//         resolve('ok');
//     })
// }
//
// async function axiosGetAsyc(uri) {
//     const response = await axios.get(uri)
//     throw  new Error();
//     return response.body.text;
// }
//
// axiosGetAsyc('/user?me')
//     .then(function (responseUser) {
//         return axiosGet('/user/' + responseUser.userID);
//     })
//     .then(function (responseOrders) {
//
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
//
// async function foo() {
//     const userMeRequest = axiosGet('/user?me');
//     const ordersRequest = axiosGetAsyc('/my/orders');
//
//     try {
//         const [user, order] = await Promise.all([userMeRequest, ordersRequest]);
//     } catch (e) {
//
//     }
//     // same as below
//     Promise.all([userMeRequest, ordersRequest]).then((user, order) => {
//         console.log(2)
//     }).catch(function (Error) {
//         console.warn(Error)
//     });
//
//     console.log(1)
//     //const responseOrders = await axios.get('/user/' + responseUser2.userID);
//
// }