//testEquality();
//var additionVl = doAddition();
//alert("The addition result is " + additionVl);
//document.getElementById("resultt").innerHTML = additionVl;
function edit_left_pane_hdr() {
    document.getElementById("leftPaneHdr").innerHTML = "This is Edited Header for Left Area";
    document.getElementById("leftPaneHdr").style.fontSize = "2.5rem";
    document.getElementById("leftPaneHdr").style.display = "none";
    document.getElementById("leftPaneHdr").innerHTML = "This is Edited Header for Left Area after being brought back";
    document.getElementById("leftPaneHdr").style.display = "block";
    document.getElementById("editBtnHoldr").style.display = "none";
    document.getElementById("defaultBtnHoldr").style.display = "block";
}
function returnToDefalt() {
    document.getElementById("leftPaneHdr").innerHTML = "This is left pane";
    document.getElementById("leftPaneHdr").style.fontSize = "1.75rem";
    document.getElementById("editBtnHoldr").style.display = "block";
    document.getElementById("defaultBtnHoldr").style.display = "none";
}
function doAddition() {
    var fNo; //declaring a variable that would hold value typed into the first input
    fNo = Number(document.getElementById("fNo").value);//assigning a value to the variable fNo
    var sNo;//declaring a variable that would hold value typed into the second input
    sNo = Number(document.getElementById("sNo").value);//assigning a value to the variable sNo
    var theAddition = fNo + sNo;
    alert("The addition result is " + theAddition);
    return theAddition;
    //document.getElementById("resultt").innerHTML = theAddition;
}
function doSubtraction() {
    var fNo;
    fNo = Number(document.getElementById("fNo").value);
    var sNo;
    sNo = Number(document.getElementById("sNo").value);
    var theAddition = fNo - sNo;
    document.getElementById("resultt").innerHTML = theAddition;
}
function doMultiplication() {
    var fNo;
    fNo = Number(document.getElementById("fNo").value);
    var sNo;
    sNo = Number(document.getElementById("sNo").value);
    var theAddition = fNo * sNo;
    document.getElementById("resultt").innerHTML = theAddition;
}
function doDivision() {
    var fNo;
    fNo = Number(document.getElementById("fNo").value);
    var sNo;
    sNo = Number(document.getElementById("sNo").value);
    var theAddition = fNo / sNo;
    document.getElementById("resultt").innerHTML = theAddition;
}
function printString() {
//    var answer = new String("We are the so-called \"Vikings\" from the north, be careful, we will deal with you");
//    //var answer = "We are the so-called \"Vikings\" from the north, be careful, we will deal with you";
//    var answerLen = answer.length;
//    document.getElementById("resultt").innerHTML = answer + " has " + answerLen + " characters";
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replaceAll("Microsoft", "W3Schools");
    alert(newText);
}
function printDate() {
    const d = new Date();
    alert("The Date now is " + d);
    document.getElementById("resultt").innerHTML = d;
}
function printMathProperties() {
    //document.getElementById("resultt").innerHTML = Math.E;
    //document.getElementById("resultt").innerHTML = Math.PI;
    //document.getElementById("resultt").innerHTML = Math.SQRT2;
    document.getElementById("resultt").innerHTML = Math.LN10;
    //document.getElementById("resultt").innerHTML = Math.sqrt(9);
}
function calcSqRt() {
    var numb = document.getElementById("noToSq").value;
    var convNumb = Number(numb);
    document.getElementById("resultt").innerHTML = Math.sqrt(convNumb);
}
function mathMethods() {
    var numb = document.getElementById("noToSq").value;
    var convNumb = Number(numb);
    //document.getElementById("resultt").innerHTML = Math.round(convNumb);
    //document.getElementById("resultt").innerHTML = Math.ceil(convNumb);
    //document.getElementById("resultt").innerHTML = Math.floor(convNumb);
    //document.getElementById("resultt").innerHTML = Math.trunc(convNumb);
    //document.getElementById("resultt").innerHTML = Math.sign(convNumb);
    //document.getElementById("resultt").innerHTML = Math.pow(convNumb, 2);
    //document.getElementById("resultt").innerHTML = Math.abs(convNumb);
    //document.getElementById("resultt").innerHTML = Math.min(0, 150, 30, 20, -8, -200);
    //document.getElementById("resultt").innerHTML = Math.max(0, 150, 30, 20, -8, -200);
    //document.getElementById("resultt").innerHTML = Math.random();
    //document.getElementById("resultt").innerHTML = Math.log(10);
    document.getElementById("resultt").innerHTML = Math.log10(1000);
}
function printBooleans() {
    var theBool = Boolean(10 == 10);
    alert("The Boolean value for (10 == 10) is " + theBool);
}
function validateAge() {
    var age = document.getElementById("age").value;
    var convAge = Number(age);
    if (convAge < 18) {
        alert("You are too young to buy alcohol, get pure water instead!");
    } else if (convAge >= 18 && convAge < 25) {
        alert("You may buy some lager beer, however, drink responsibly");
    } else if (convAge >= 25 && convAge < 35) {
        alert("You may buy some red wine, however, drink responsibly");
    } else {
        alert("You may buy some Azul, however, drink responsibly");
    }
//    let voteable = (convAge < 18) ? "Too young to vote" : "You have to vote Asiwaju!";
//    alert(voteable);
}
function testChainingOperator() {
    // Create an object:
    const car = {type: "Fiat", model: "500", color: "white"};
    // Ask for car name:
    //document.getElementById("resultt").innerHTML = car?.name;
}
function printToday() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
//        default:
//            text = "Looking forward to the Weekend";
            //break;
    }
    document.getElementById("resultt").innerHTML = day;
}
function printLongDate() {
    //const d = new Date("Mar 25 2015");
    const d = new Date("25 Mar 2015");
    alert("The Date now is " + d);
    document.getElementById("resultt").innerHTML = d;
}
function printParseDate() {
    let msec = Date.parse("June 07, 2012");
    const d = new Date(msec);
    alert("The Date Milliseconds is " + msec + ", while the Date now is " + d);
    document.getElementById("resultt").innerHTML = "The Date Milliseconds is " + msec + ", while the Date now is " + d;
}
function printISODate() {
    //const d = new Date("2023-06");
    //const d = new Date("2023");
    //const d = new Date("2015-03-25T12:00:00Z");
    //const d = new Date("2015-03-25T12:00:00-06:30");
    //const d = new Date("03/25/2015");
    const d = new Date("2015/03/25");
    alert("The Date now is " + d);
    document.getElementById("resultt").innerHTML = d;
}
function printDateToString() {
    const d = new Date();
//    alert("The Date now is " + d);
//    document.getElementById("resultt").innerHTML = d;
//    alert("The Date now is " + d.toString());
//    document.getElementById("resultt").innerHTML = d.toString();
//    alert("The Date now is " + d.toDateString());
//    document.getElementById("resultt").innerHTML = d.toDateString();
    var dateToStr = d.toDateString();
    alert("The Date now is " + dateToStr);
    document.getElementById("resultt").innerHTML = dateToStr;
//    alert("The Date now is " + d.toUTCString());
//    document.getElementById("resultt").innerHTML = d.toUTCString();
//    alert("The Date now is " + d.toISOString());
//    document.getElementById("resultt").innerHTML = d.toISOString();
}
function printCustomDate() {
    //const d = new Date("October 13, 2014 11:13:00");
    //const d = new Date("2022-03-25");
    //const d = new Date(2018, 11, 24, 10, 33, 30, 0);
    //const d = new Date(2018, 15, 24, 10, 33, 30);
    const d = new Date(2018, 5, 35, 10, 33, 30);
    alert("The Date is " + d);
    document.getElementById("resultt").innerHTML = d;
}
function printPreviousCentury() {
    //const d = new Date(99, 11, 24);
    const d = new Date(9, 11, 24);
    alert("The Date is " + d);
    document.getElementById("resultt").innerHTML = d;
}
function printDateMillsecs() {
    const d = new Date(1674136829301);
    alert("The Date is " + d);
    document.getElementById("resultt").innerHTML = d;
}
function convertString() {
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.toLowerCase();
    alert(newText);
}
function demoArray() {
    const cars = new Array("Saab", "Volvo", "BMW");
    alert("The first element is " + cars[0]);
    cars[0] = "Opel";
    alert("The first element is now " + cars[0]);
}
function printArray() {
    const cars = new Array("Saab", "Volvo", "BMW");
    document.getElementById("resultt").innerHTML = cars;
}
function arrayProperties() {
    const cars = new Array("Saab", "Volvo", "BMW", "Opel", "Lexus", "Honda");
    document.getElementById("resultt").innerHTML = cars.length;
}
function printArrayElems() {
    const person = [];
    alert("The first element of this array is " + person[0]);
    alert("The length of this array is " + person.length);
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;
    alert("The first element of this array is " + person[0]);
    alert("The length of this array is " + person.length);
    person.length;    // Will return 3
    person[0];        // Will return "John"
}
function verifyArrayType() {
    //const fruits = ["Banana", "Orange", "Apple"];
    const fruits = new Array("Banana", "Orange", "Apple");
    const oneFruit = "Banana";
    //let type = typeof fruits;
    //alert("The type of the object fruits is " + type);
    alert("Is the variable fruits an array? " + Array.isArray(fruits));
    alert("Is the variable oneFruit an array? " + Array.isArray(oneFruit));
    alert("Is the variable fruits instance of an array? " + fruits instanceof Array);

}
function reverseArray() {
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Sherry", "Guava"];
    var sortedArr = fruits.sort();
    alert("Sorted array is " + sortedArr);
    var reveresedArr = fruits.reverse();
    alert("Reveresed array is " + reveresedArr);
}
function sortArray() {
    //const cars = new Array("Saab", "Volvo", "BMW", "Opel", "Lexus", "Honda");
    //document.getElementById("resultt").innerHTML = cars.sort();
    const cars = new Array(122, 23, 5, 300, 150, 10, 72, 3);
    document.getElementById("resultt").innerHTML = cars.sort(function (a, b) {
        return a - b;
    });
}
function sortNosDesc() {
    //const cars = new Array("Saab", "Volvo", "BMW", "Opel", "Lexus", "Honda");
    //document.getElementById("resultt").innerHTML = cars.sort();
    const cars = new Array(122, 23, 5, 300, 150, 10, 72, 3);
    document.getElementById("resultt").innerHTML = cars.sort(function (a, b) {
        return b - a;
    });
}
function sortArrRandom() {
    const points = [40, 100, 1, 5, 25, 10];
    var sortedPnts = points.sort(function () {
        return 0.5 - Math.random()
    });
    alert("Randomly sorted array is " + sortedPnts);
}
function maxMin() {
    const points = [40, 100, 1, 34, 5, 25, 10, 22];
    points.sort(function (a, b) {
        return a - b
    });
    alert("The Minimum value is " + points[0]);
    alert("The Maximum value is " + points[points.length - 1]);
    alert("The Minimum value using Math.min.apply is " + Math.min.apply(null, points));
    alert("The Maximum value is using Math.max.apply " + Math.max.apply(null, points));
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
//    Sorting descending:
//            const points = [40, 100, 1, 5, 25, 10];
//    points.sort(function (a, b) {
//        return b - a
//    });
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
}
function loopArray() {
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Sherry", "Guava"];
    /*let fLen = fruits.length;
     let text = "<ol>";
     for (let i = 0; i < fLen; i++) {
     text += "<li>" + fruits[i] + "</li>";
     }
     text += "</ol>";
     document.getElementById("resultt").innerHTML = text;*/
    var text = "<ol>";
    fruits.forEach(myFunction);
    text += "</ol>";
    document.getElementById("resultt").innerHTML = text;
    function myFunction(value) {
        text += "<li>" + value + "</li>";
    }
    fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
    alert("New copy of the array will be printed");
    var text = "<ol>";
    fruits.forEach(myFunction);
    text += "</ol>";
    document.getElementById("resultt").innerHTML = text;
}

function iterateArray() {
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    numbers.forEach(myFunction);

    function myFunction(value, index, array) {
        alert("The element in the current iteration is " + value + "\n" + "and the index is " + index);
        txt += value + "<br>";
        document.getElementById("resultt").innerHTML = txt;
    }
}

function mapArray() {
    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myFunction);

    function myFunction(value, index, array) {
        return value * 2;
    }
    alert("Mapped array is " + numbers2);
}

function filterArray() {
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    alert("Filtered array is " + over18);
}


function reduceArray() {
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction);

    function myFunction(total, value, index, array) {
        return total + value;
    }
    alert("Summed array is " + sum);
}


function everyArray() {
    const numbers = [45, 4, 9, 16, 25];
    let allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
        return value > 3;
    }
    alert("Everyed array is " + allOver18);
}


function someArray() {
    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    alert("Somed array is " + someOver18);
}


function getIndex() {
    const fruits = ["Apple", "Orange", "Apple", "Mango"];
    //let position = fruits.indexOf("Guava") + 1;
    let position = fruits.indexOf("Guava");
    alert("The position of Guava in the Compiler is " + position);
    //alert("The position of Apple for a lay User of the System is " + position + ",\n but the indexed position in the Compiler is " + fruits.indexOf("Apple"));
}

function printObject() {
    const person = {firstName: "John", lastName: "Doe", age: 46};
    document.getElementById("resultt").innerHTML = "The person is " + person.firstName + " " + person.lastName +
            ". He is " + person.age + " years old";
}
function printSplit() {
    let text = "Please, visit Microsoft, and Microsoft!";
    let newText = text.split(",");
    alert(newText);
}
function concatString() {
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
    alert(text3);
}
function printChar() {
//    let text = "HELLO WORLD";
//    let char = text.charAt(0);
    let text = "HELLO WORLD";
    let char = text[1];
    alert(char);
}
function printUnicodeChar() {
    let text = "HELLO WORLD";
    let char = text.charCodeAt(0);
    alert(char);
}
function printPadded() {
    let numb = 5;
    let text = numb.toString();
    let padded = text.padStart(4, "0");
    alert(padded);
}
function displayDate() {
    document.getElementById('resultt').innerHTML = Date();
}
function testEquality() {
//    let x = "John";
//    let y = new String("John");
//    alert(x == y);
//    alert(x == y);
//    alert(x === y);
//    alert(x === y);
//    alert(x === y);
    let a = "350";
    let b = 350;
    console.log(a == b);
    console.log(a === b);
}
function login() {
    //alert('it is about to load main content');
    window.location.href = 'index.html';
}
function logout() {
    //alert('it is about to default main content');
    window.location.href = 'default.html';
}