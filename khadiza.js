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
 console.log("-------------------------------------");