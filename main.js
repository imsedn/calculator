let btn = document.querySelectorAll(".btn");
let btnResult = document.querySelector(".btn-result");
let btnPercentage = document.querySelector(".btn-percentage");
let visual = document.querySelector(".visual");
let btnAc = document.querySelector(".btn-ac");
let btnPlusMinus = document.querySelector(".btn-plus-minus");
let arrayClicked = [];
let arrayClickedString;
let counting;
let checkLong = true;
let lastEntered;




function removeClassNameBtn() {
    btn.forEach(function(e) {
        e.classList.remove('item-orange-presed');
       })
}



btn.forEach(function(e) {
    

    // function removeClassName() {
    //     e.classList.remove('item-presed');
    //     console.log(555);
    // } 

    e.addEventListener( "click" , function() {

        removeClassNameBtn();

        btnAc.innerHTML = "C";

        // console.log(e);

        // btn.classList.remove('item-presed');
        // console.log(btn);
        // console.log(btn[e].classList);
       
        
        // btn.forEach(function(cls){
        //     console.log(btn);
        //     // btn[cls].remove('item-presed');
        // })



        let btnClicked = e.innerHTML;
        let lastElemArrayClicked = arrayClicked[arrayClicked.length - 1];


        if ((btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ") && (visual.innerHTML == '0') && (arrayClicked.length == 0 || arrayClicked[0] == "0")) {
            arrayClicked[0] = "0";
        }
        else if ((btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ") && (arrayClicked[0] == ".")) {
            arrayClicked[0] = "0";
        }
        else if (btnClicked == "." && arrayClicked.length == 1 && typeof lastElemArrayClicked == "number") {
            arrayClicked.length = 0;
            arrayClicked.push("0");
            // arrayClicked.push(".");
        }
        else if (visual.innerHTML == "0" && arrayClicked[0] == "0" && btnClicked != ".") {
            arrayClicked.pop();
        }

        else if ((btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ") && (counting != undefined) && (arrayClickedString == 0) && arrayClicked.length == 0) {
            arrayClicked.push(counting);
        }

        else if ( (lastElemArrayClicked == " + " || lastElemArrayClicked == " - " || lastElemArrayClicked == " * "  || lastElemArrayClicked == " / ")&&(btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ")) {
            arrayClicked.pop();
        }

        else if ((btnClicked == ".")&&(lastElemArrayClicked == " + " || lastElemArrayClicked == " - " || lastElemArrayClicked == " * "  || lastElemArrayClicked == " / ")) {
            arrayClicked.push("0");
        }

        else if ((lastElemArrayClicked == ".")&&(btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / ")) {
            arrayClicked.pop();
        }


        else if ((btnClicked == ".")&&(visual.innerHTML == "0") && (arrayClicked.length == 0)) {
            arrayClicked.push("0");
        }

        /*???*/
        else if ((btnClicked == ".") && (arrayClicked.length == 0)) {
            arrayClicked.push("0");
        }

        else if ((btnClicked == ".")&&(lastElemArrayClicked == ".")) {
            arrayClicked.pop();
        }

        else if (typeof lastElemArrayClicked == "number" && btnClicked != " + " && btnClicked != " - " && btnClicked != " * " && btnClicked != " / ") {
            arrayClicked.length = 0;
        }

        else if (btnClicked == " + " || btnClicked == " - " || btnClicked == " * "  || btnClicked == " / " && checkLong == false) {
            checkLong = true;
        }

        if (checkLong == true) {
            arrayClicked.push(btnClicked);
        }

       

        arrayClickedString = arrayClicked.join('');

        

        let arrayDotCheck = arrayClickedString.split(' ');

         for (i = arrayDotCheck.length - 1; i >= 0; --i) {
            let last = arrayDotCheck[arrayDotCheck.length - 1];
            if (last.length == 7) {
                checkLong = false;
            }
        }
        
        arrayDotCheck.forEach(function(el){
            let indexOfDot = el.indexOf(".") + 1;

            let ifTrue = el.includes(".", indexOfDot);

            if (ifTrue == true && btnClicked == "."){
                arrayClicked.pop();
                arrayClickedString = arrayClicked.join('');
            }
       });


       for (i = arrayDotCheck.length - 1; i >= 0; --i) {
       lastEntered = arrayDotCheck[arrayDotCheck.length - 1];
       let secondFromLastEntered = arrayDotCheck[arrayDotCheck.length - 2];
       let thirdFromLastEntered = arrayDotCheck[arrayDotCheck.length - 3];

    //    console.log(lastEntered);

    // console.log(arrayDotCheck);

       if (btnClicked == " + ") {
            visual.innerHTML = thirdFromLastEntered;
            let plus = document.getElementById( 'plus' );
            plus.classList.add('item-orange-presed');
          
       } else if (btnClicked == " - ") {
            visual.innerHTML = thirdFromLastEntered;
            let minus = document.getElementById( 'minus' );
            minus.classList.add('item-orange-presed');

       } else if (btnClicked == " * ") {
            visual.innerHTML = thirdFromLastEntered;
            let multiply = document.getElementById( 'multiply' );
            multiply.classList.add('item-orange-presed');

       } else if (btnClicked == " / ") {
            visual.innerHTML = thirdFromLastEntered;
            let divide = document.getElementById( 'divide' );
            divide.classList.add('item-orange-presed');
       }
       else {
        visual.innerHTML = lastEntered;
       }
    }

    // console.log(arrayClicked);



        // visual.innerHTML = lastEntered;

        // visual.innerHTML = arrayClickedString;
    


    });
})


btnResult.addEventListener('click', function(){
    if (arrayClicked.length != 0 && arrayClickedString != 0) {
        counting = eval(arrayClickedString);
        visual.innerHTML = counting;
        arrayClicked.length = 0;
        arrayClickedString = 0;
        btnAc.innerHTML = "AC";
        checkLong = true;
    }
});



btnPlusMinus.addEventListener('click', function(){

    if (arrayClicked.length == 0 && visual.innerHTML != "0" ) {
        arrayClicked.push(visual.innerHTML);
        arrayClickedString = arrayClicked.join('');
        visual.innerHTML = arrayClickedString;
    } else if (arrayClicked.length == 0 && visual.innerHTML == "0" ) {
        return;
    }

    let arrayChangeSign = arrayClickedString.split(' ');

    for (i = arrayClicked.length - 1; i >= 0; --i) {
         if (arrayClicked[i] == " + ")  {
            arrayClicked[i] = " - ";
            arrayClickedString = arrayClicked.join('');
            visual.innerHTML = arrayClickedString;
            break;
        } else if (arrayClicked[i] == " - ") {
            arrayClicked[i] = " + ";
            arrayClickedString = arrayClicked.join('');
            visual.innerHTML = arrayClickedString;
            break;
        } else if (arrayChangeSign.length == 1 && arrayChangeSign[0] * 1 > 0) {
            arrayClicked.unshift(" - ");
            arrayClickedString = arrayClicked.join('');
            visual.innerHTML = arrayClickedString;
            break;
        } else if (arrayChangeSign.length == 1 && arrayChangeSign[0] * 1 < 0) {
            arrayClicked[0] = Math.abs(arrayChangeSign[0])
            arrayClickedString = arrayClicked.join('');
            visual.innerHTML = arrayClickedString;
            break;
        } 
    }
    
});

btnAc.addEventListener('click', function(){

    if (visual.innerHTML == "0" && arrayClicked.length == 0) {
        btnAc.innerHTML = "AC";
        visual.innerHTML = "0";
        checkLong = true;
    } else if (btnAc.innerHTML == "AC") {
        visual.innerHTML = '0';
        arrayClicked.length = 0;
        arrayClickedString = undefined;
        counting = undefined;
        checkLong = true;
    } else if (btnAc.innerHTML == "C" && arrayClicked.length != 1) {
        arrayClicked.pop();
        arrayClickedString = arrayClicked.join('');
        visual.innerHTML = arrayClickedString;
        checkLong = true;
    } else if (btnAc.innerHTML == "C" && arrayClicked.length == 1) {
        arrayClicked.pop();
        arrayClickedString = arrayClicked.join('');
        visual.innerHTML = "0";
        checkLong = true;
    }
});



btnPercentage.addEventListener('click', function(){
    let percentageCountingArray = [];
  
    if (visual.innerHTML != "0") {
        percentageCountingArray = arrayClickedString.split(' ');
    } 
    else {
        return;
    }

    if (arrayClicked.length != 0 && percentageCountingArray.length != 1) {


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

            for (let i = 0; i < percentageCountingArray.length; i++) { 
                if (percentageCountingArray[i] == "+") {
                        percentageCountingArray[i] = " + ";
                }
                else if (percentageCountingArray[i] == "-") {
                        percentageCountingArray[i] = " - ";
                }
                else if (percentageCountingArray[i] == "*") {
                        percentageCountingArray[i] = " * ";
                }
                else if (percentageCountingArray[i] == "/") {
                        percentageCountingArray[i] = " / ";
                }
            }

            arrayClicked.length = 0;
            
            arrayClicked.push.apply(arrayClicked, percentageCountingArray);

            arrayClickedString = arrayClicked.join(' ');

            if (arrayClickedString[0] == 0) {
                arrayClickedString.length = 0;
                arrayClicked.length = 0;
            }

            visual.innerHTML = arrayClickedString;
            
         }
    }
    
});

document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});


let wrap = document.querySelector(".wrap");
let screenHeight = document.documentElement.clientHeight;
let screenWidth = document.documentElement.clientWidth;

let wrapHeight = wrap.offsetHeight;

console.log(screenWidth);

if (screenWidth <= 576) {
    visual.style.height = screenHeight - wrapHeight + "px";
}


