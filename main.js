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
let btnPercentage = document.querySelector(".btn-percentage");
let visual = document.querySelector(".visual");
let btnAc = document.querySelector(".btn-ac");
let arrayClicked = [];
let arrayClickedString;
let counting;

btn.forEach(function(e) {
    e.addEventListener( "click" , function() {
        let btnClicked = e.innerHTML;
        let lastElemArrayClicked = arrayClicked[arrayClicked.length - 1];

        if ((btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ") && (visual.innerHTML == '0') && (arrayClicked.length == 0)) {
            arrayClicked.push("0");
        }

        if ((btnClicked == "0") && (visual.innerHTML == '0') && (arrayClicked[0] == "0")) {
            arrayClicked.pop();
        }

        if ((btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ") && (counting != undefined) && (arrayClickedString == 0)) {
            arrayClicked.push(counting);
        }

        if ( (lastElemArrayClicked == " + " || lastElemArrayClicked == " - " || lastElemArrayClicked == " * "  || lastElemArrayClicked == " / ")&&(btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ")) {
            arrayClicked.pop();
        }

        if ((btnClicked == ".")&&(lastElemArrayClicked == " + " || lastElemArrayClicked == " - " || lastElemArrayClicked == " * "  || lastElemArrayClicked == " / ")) {
            arrayClicked.push("0");
        }

        if ((lastElemArrayClicked == ".")&&(btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ")) {
            arrayClicked.pop();
        }

        if ((btnClicked == ".")&&(visual.innerHTML == "0") && (arrayClicked.length == 0)) {
            arrayClicked.push("0");
        }

        if ((btnClicked == ".")&&(lastElemArrayClicked == ".")) {
            arrayClicked.pop();
        }

        //*работает, нужно найти куда пропадает минус */

        // if ((typeof arrayClicked[0] == "number")&&(btnClicked != " + " || btnClicked != " - " || btnClicked != " * " || btnClicked != " / ")) {
        //     arrayClicked.pop();
        // }


        arrayClicked.push(btnClicked);
        arrayClickedString = arrayClicked.join('');
        visual.innerHTML = arrayClickedString;
    });
})


btnResult.addEventListener('click', function(){
    if (arrayClicked.length != 0 && arrayClickedString != 0) {
        counting = eval(arrayClickedString);
        visual.innerHTML = counting;
        arrayClicked.length = 0;
        arrayClickedString = 0;
    }
});

btnAc.addEventListener('click', function(){
    visual.innerHTML = '0';
    arrayClicked.length = 0;
    arrayClickedString = undefined;
    counting = undefined;
});

let percentageCountingArray = [];

btnPercentage.addEventListener('click', function(){
    if (arrayClicked.length != 0) {
        
        percentageCountingArray = arrayClickedString.split(' ');

        let firstFromTheEndElemPercentageCountingArray = 1 * (percentageCountingArray[percentageCountingArray.length - 1]);
        let secondFromTheEndElemPercentageCountingArray = percentageCountingArray[percentageCountingArray.length - 2];
        let thirdFromTheEndElemPercentageCountingArray = 1 * (percentageCountingArray[percentageCountingArray.length - 3]);

        let pushingResult;

        if (secondFromTheEndElemPercentageCountingArray == "-") {
            pushingResult = thirdFromTheEndElemPercentageCountingArray - firstFromTheEndElemPercentageCountingArray / 100 * thirdFromTheEndElemPercentageCountingArray;
        }  
        else if (secondFromTheEndElemPercentageCountingArray == "+") {
            pushingResult = firstFromTheEndElemPercentageCountingArray / 100 * thirdFromTheEndElemPercentageCountingArray + thirdFromTheEndElemPercentageCountingArray;
        }
        else if (secondFromTheEndElemPercentageCountingArray == "*") {
            pushingResult = thirdFromTheEndElemPercentageCountingArray * firstFromTheEndElemPercentageCountingArray / 100;
        }
        else if(secondFromTheEndElemPercentageCountingArray == "/") {
            pushingResult = thirdFromTheEndElemPercentageCountingArray / (firstFromTheEndElemPercentageCountingArray / 100);
        }   

        let lastElemArrayClicked = arrayClicked[arrayClicked.length - 1]; 

        if (lastElemArrayClicked != " + " && lastElemArrayClicked != " - " && lastElemArrayClicked != " * "  && lastElemArrayClicked != " / ") {

            percentageCountingArray.pop();
            percentageCountingArray.pop();
            percentageCountingArray.pop();

            percentageCountingArray.push(pushingResult);


            //не работает//

            // percentageCountingArray.forEach(function(e) {
            //   if (percentageCountingArray[e] == "+") {
            //     percentageCountingArray[e] = " + ";
            //     }
            // });


            for (let i = 0; i < percentageCountingArray.length; i++) { 
                if (percentageCountingArray[i] == "+") {
                        percentageCountingArray[i] = " + ";
                }
                if (percentageCountingArray[i] == "-") {
                        percentageCountingArray[i] = " - ";
                }
                if (percentageCountingArray[i] == "*") {
                        percentageCountingArray[i] = " * ";
                }
                if (percentageCountingArray[i] == "/") {
                        percentageCountingArray[i] = " / ";
                }
            }



            arrayClicked.length = 0;
            
            arrayClicked.push.apply(arrayClicked, percentageCountingArray);

            // arrayClickedString = arrayClicked.join(' ');
            visual.innerHTML = arrayClicked.join(' ');
            // visual.innerHTML = arrayClickedString;
            // arrayClickedString = 0;
         }
    }
    
});




// let arr = [];

// let a = 1;
// let b = 2;
// let c = 3;

// arr.push(a);
// arr.push(b);
// arr.push(c);

// console.log(arr);

// arr.forEach(function(e) {
//     if (arr[e] == 2) {
//         arr[e] = 7;
//     }
// })

// console.log(arr);