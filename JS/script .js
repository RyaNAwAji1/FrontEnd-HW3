// First Question >>>
const length= 15;
const width= 25;
const daimantion= length*width;
console.log(daimantion);


// Part Tow First Question >>>
const celsius=35;
const fahrenheit= (celsius*9)/5+32;
console.log(fahrenheit);
const StorIt=40;
const mixOfThem=(StorIt-32)*5/9;
console.log(mixOfThem);


// Second Qusetion >>>
let Numbers = [23,54,32,87,47];
const num=0;
for(let i =0; i < Numbers.length; i++) {
    num += Numbers[i];
}
console.log(num);


// Part Tow second Question >>>
const arra=[16,4,2,0,19,6];
for(const i=0; i<arra.length;i++){

    console.log(i);
}


// Third Question >>>
const arrOf=  [1,2,3,4,5,6,7,8,9,10];
const backToFront= arrOf.reverse();
console.log(backToFront);


// Fourth Question >>>
const stars= 4;
const rows= "";
for(let i = 0; i <= stars; i++){
    for(let j=0; j<i;j++){
        rows += '*'
    }
    rows += '\n'
}
console.log(rows);




