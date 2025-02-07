function sum(num1, num2) {
    return num1 + num2;
 }
 
 const multiplication = (num1, num2) => {
     return num1 * num2;
 }

 const obj={
    sum:sum,
    multiplication:multiplication
 }
 module.exports=obj;
 
//  const sumResult = sum(20, 20);
//  console.log("Result: " + sumResult);
 
//  const multiplicationResult = multiplication(20, 20);
//  console.log("Multiplication: " + multiplicationResult);
 