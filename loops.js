// 1.Even or Odd

const check=(a) => {
 if(a%2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
};
let ans=check(8);
console.log(ans);

// 2.Result Evaluator(Pass or Fail)

const evaluateResult=(mark)=> {
    if(mark < 0 || mark > 50 ){
        return "Invalid marks";
    }
    else if(mark>=50){
        return "Pass";
    }
    else{
        return "Fail";
    }  
};
let result=evaluateResult(45);
console.log(result);

// 3.Maximum Finder-Largest of three numbers

const findMax=(a,b,c) => {
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
};
let max=findMax(1,10,8);
console.log(max);

// 4.Accumulator-Sum from 1 to N

const sumToN=(n) => {
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
};
console.log(sumToN(2));

// 5.Multiplication Generator

const printTable=(num) => {
    for(let i=1;i<=10;i++){
        console.log(`${num}*${i}=${num*i}`);
    }
};
printTable(5);

// 6.Digital Counter-Number Length Finder

const countDigits=(num) =>{
    if(num ===0){
        return 1;
    }
    let count=0;
    while(num>0){
        num=Math.floor(num/10); // builtin function used
        count++;
    }
    return count;
};
console.log(countDigits(1568));

// 7.Number reverser

const reverseNumber=(num) => {
    let reverse=0;
    while(num>0){
        let digit=num%10;
        reverse=reverse*10+digit;
        num=Math.floor(num/10);
    }
    return reverse;
};
console.log(reverseNumber(2345));

// 8.Factorial Engine

const factorial=(num) => {
    let result=1;
    for(let i=1;i<=num;i++){
        result=result*i;
    }
    return result;
};
console.log(factorial(3));

// 9.Prime Validator

const isPrime=(num) =>{
    if (num < 2) {
        return "false";
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "false";
        }
    }
    return "true";
};
console.log(isPrime(10));

// 10.Pattern Builder

const printPattern=(num) => {
    for (let i = 1; i <=num ; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + "*";
    }
    console.log(row);
}
};
printPattern(5);

