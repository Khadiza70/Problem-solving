//1. Check if a character is vowel or conostant
//  function chackVowel(word){
//     if (word === "a" || 
//         word === "e" || 
//         word === "i" || 
//         word === "o" || 
//         word === "u" ||
//         word === "A" || 
//         word === "E" || 
//         word === "I" || 
//         word === "O" || 
//         word === "U"
//         ){
//         console.log("It is then vowel");
//     }
//     else{
//         console.log("It is then cosonant");
//     }    
//  }
//  chackVowel("E")



// //2. grive 3 number, print the maximum number

    function  ChackMaximum(x,y,z){
    
    if (x > y && x > z ){
        console.log(x + "   maximum");
    }
    else if (  y > x && y > z ){
        console.log( y +"   maximum");
    }
    else {
        console.log(z +"    maximum");
    }

    }
    ChackMaximum(30,4000,50)




// 3. sum of value,
//    even sum,
//    odd sum,
//    ckeak (total = even+odd),
//     avarag,
//     number count.


// declear array
const arrayNumber = [9, 3, 1, 2, 3, 7, 9, 5, 3];
console.log('Index' , 'Array', 'Even',' Odd' ,' SumTotal' );
let length = arrayNumber.length;
// declear let
let sumtotal = 0,
    eventotal = 0,
    oddtotal = 0,
    evenFlag = 0,
    oddFlag = 0;
// condition
for (let i = 0; i < length ; i++) {
    sumtotal += arrayNumber[i];
   
    if (arrayNumber[i] % 2 === 0) {
        evenFlag = arrayNumber[i];
    } else {
        evenFlag = 0;
    }
    if (arrayNumber[i] % 2 === 1) {
        oddFlag = arrayNumber[i];
    } else {
        oddFlag = 0;
    }



    arrayNumber[i]%2 === 0 ? eventotal += arrayNumber[i] : oddtotal += arrayNumber[i];


    console.log('  ',i,'  ', arrayNumber[i],'   ', evenFlag,'  ', oddFlag,'  ',sumtotal);
};


console.log('This is even total : ', eventotal);
console.log('This is odd total : ', oddtotal);
console.log('This is sum total : ', sumtotal);

if(sumtotal === eventotal + oddtotal){
    console.log("This is a equel value");
}else{
    console.log("This is a not equel value");
}
