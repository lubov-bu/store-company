// function getData () {
//
//     let productRequestURL = 'http://localhost:3000/dataCloths.json';
//
//     let request = new XMLHttpRequest();
//
//     request.open('GET', productRequestURL);
//     request.responseType = 'text';
//     request.send();
//
//     request.onload = function () {
//         let productsList = request.response;
//         let listOfGoods =  JSON.parse(productsList);
//         getData(listOfGoods);
//     }
// }
