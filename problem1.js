const number = (prompt('Enter a Positive Number '));
if (number < 0){
    console.log('Factorial of Negative Number not exsist...!');
}
else{
    let fact = 1;
    for (i = 1; i <= number; i++){
        fact = fact * i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}