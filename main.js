/*let n = prompt('Введите число от 1 до 10?', "");
function start(n) {
    if (n >= 1 && n <= 10 && n % 2 == 0) {
        console.log(n + " делиться без остатка");
    }
    else if ((n >= 1 && n <= 10 && n % 2 !== 0)) {
        console.log(n + " не делиться без остатка");
    }
    else {
        console.log(n + " число не находится в заданом диапозоне");
    }
}

start(n);*/

// let object = {
//     a:10,
//     b:true,
//     c: "strinc"
// }

// object.d = undefined;
// delete object.b

// let countryPropertyName = "country";

// object[countryPropertyName] = "USA";



// console.log(object); 


// let name = "bogdan";
// let age = 23;

// let userProfile = {
//     name,
//     age,
//     acces: true
// }

// console.log(userProfile);

// let object = {
//     name: "ivan",
//     cityGreeting() {
//         console.log("greeting");
//     }
// }
// object.cityGreeting();

// console.log(object.name);


// let a = 10;
// let b = 3;

// function sum(a,b) {
//     let c = a % b;
//     console.log(c);
// }

// sum(a,b);

// function myFn(a,b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// let result = myFn(1,3);

// console.log(result);

// function printMyName() {
//     console.log("Bogdan");
// }

// // setTimeout(printMyName, 1000);

// function mult(value, multiplier = 1) {
//     let result = value * multiplier;
//     console.log(result);
// }

// mult(10,10);


// const miltVar = function (value, multiplier = 1) {
//     let result = value * multiplier;
//     console.log(result);
// }

// miltVar(10,10);


// multPoint = (value, multiplier = 1) => {
//     let result = value * multiplier;
//     console.log(result);
// }
// multPoint(10,10)

// let myArray = [1,2,3];
// console.log(myArray);

// myArray.push(true);


// // myArray.forEach(el => console.log(el * 2));

// myArray.forEach(function(element) {
//     console.log(element * 3);
// })



// let firstArray = [1,2,3,4,5];

// let secondArray = firstArray.map(el => el*3);

// console.log(secondArray);

// const object = {
//     name: "bogdan",
//     commentQty: 23,
//     hasSignedAgreement: false
// }

// const { name, commentQty } = object;

// console.log(name);

// let btnNumberOne = document.getElementById("number-one");
// let btnNumberTwo = document.getElementById("number-two");
// let btnPlus = document.getElementById("plus");
// let btnResult = document.getElementById("result");

// // console.log(btnNumberOne);

// let numberOne = btnNumberOne.innerHTML;
// let numberTwo = btnNumberTwo.innerHTML;
// let plus = btnPlus.innerHTML;
// let result = btnResult.innerHTML;

// console.log(numberOne);

// let clickedArray = [];
// let clickedArrayToStrinc;
// // clickedArray.join('');



// let btnArray = [btnNumberOne, btnNumberTwo, btnPlus];

// btnArray.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         let btnClicked = btn.innerHTML;
//         // console.log(btnClicked);
//         clickedArray.push(btnClicked);
//         let clickedArrayToStrinc = clickedArray.join('');
//         console.log(clickedArrayToStrinc);
//         btnResult.addEventListener('click', function(){
//             // eval(clickedArrayToStrinc);
//             // console.log(clickedArrayToStrinc); 
//          });
//     })
// });



let btn = document.querySelectorAll(".btn");
let btnResult = document.querySelector(".btn-result");
let visual = document.querySelector(".visual");
let result = document.querySelector(".result");
let btnAc = document.querySelector(".btn-ac");
let arrayClicked = [];
let arrayClickedString;

btn.forEach(function(e) {
    e.addEventListener( "click" , function() {
        let btnClicked = e.innerHTML;
        arrayClicked.push(btnClicked);
        arrayClickedString = arrayClicked.join('');
        visual.innerHTML = arrayClickedString;
    });
})


btnResult.addEventListener('click', function(){
    let counting = eval(arrayClickedString);
    result.innerHTML = counting;
});

btnAc.addEventListener('click', function(){
    visual.innerHTML = '';
    result.innerHTML = '';
});


// if (strincSplitedArray[e] != "+") {
//     
// }



    // let strincSplitedArray = arrayClickedStrinc.split(' ');
    // console.log(strincSplitedArray);


//    strincSplitedArray.forEach(function(e) {
//         if (parseInt(strincSplitedArray[e]) == NaN) {
            
//         }
//         else {
//             let FFF = parseInt(strincSplitedArray[e]);
//             console.log(FFF);
//         }

//         var result = strincSplitedArray.reduce(function(sum, current) {
//             return sum + current;
//           });
//         // console.log(result);
//     })


// let tt = + ;
// console.log(typeof tt);




// let res = clickedArray.join('');
// console.log(clickedArray);






// btns.forEach(function(btn) {
//     // Вешаем событие клик
//     btn.addEventListener('click', function(e) {
//       console.log('Button clicked' + e.target.classList);
//     })
//   })

// a.forEach(function(entry) {
//     console.log(entry);
// });