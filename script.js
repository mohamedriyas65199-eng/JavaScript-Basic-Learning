// Calculator Logic
let a=10;
let b=20;

let operator="++";

if(operator === "+"){
    console.log(a+b);
}
else if(operator === "-"){
    console.log(a-b);
}
else if(operator === "*"){
    console.log(a*b);
}
else if(operator === "/"){
    console.log(a/b);
}
else if(operator === "%"){
    if(a === 0){
        console.log("a will not be zero");
    }
    else if(b === 0){
        console.log("b will not be zero");
    }
    else{
        console.log(a%b);
    }
}
else{
    console.log("!!Enter Correct Operator!!");
}


//Task 04
// Student Grades
// Students Grade

let mark=75; //variable created
let bonus=4;
 let total = mark+=bonus; // used assignment operator
console.log(total);

let grade;
if(total >= 90 && total<=100){
    grade="A";
    console.log("Grade A");
}
else if(total >=70 && total < 90 ){
    grade="B";
    console.log("Grade B");
}
else if(total >=50 && total <70){
    grade="C";
    console.log("Grade C");
}
else {
    grade="F";
    console.log("Grade F");
}
let student= total >=50 ? "Pass":"Fail";
    console.log(student);

    
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
     case "F":
        console.log("Needs Improvement");   
    default:
        console.log("Invalid grade");            
}






    

 



