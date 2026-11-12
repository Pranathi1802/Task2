// 1. Assignment Operators
let a = 20;
let b = 10;

a += b;
console.log("Addition:", a);

a = 20;
a -= b;
console.log("Subtraction:", a);

a = 20;
a *= b;
console.log("Multiplication:", a);

a = 20;
a /= b;
console.log("Division:", a);

a = 20;
a %= b;
console.log("Modulus:", a);


// 2. Greater Than Operator
console.log("Q2:", 25 > 15);


// 3. == and ===
console.log("Q3:", 50 == "50");
console.log(50 === "50");


// 4. != and !==
console.log("Q4:", 100 != 200);
console.log(100 !== 200);


// 5. Greater Than or Equal
let age = 20;
console.log("Q5:", age >= 18);


// 6. AND Operator
console.log("Q6:", 20 > 10 && 30 < 50);


// 7. OR Operator
console.log("Q7:", 10 > 20 || 50 > 30);


// 8. NOT Operator
console.log("Q8:", !(100 > 50));


// 9. Multiple AND Operators
let result = 10 > 5 && 20 > 10 && 30 > 15 && 40 > 20;
console.log("Q9:", result);


// 10. AND, OR and NOT
let result2 = (10 > 5 && 20 > 10) || !(30 < 20);
console.log("Q10:", result2);


// 11. Ternary Operator
let num = 10;
let answer = num > 0 ? "Positive" : "Negative";
console.log("Q11:", answer);


// 12. Login Ternary
let isLoggedIn = true;
let login = isLoggedIn ? "Welcome" : "Please Login";
console.log("Q12:", login);


// 13. String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Q13:", fullName);


// 14. Template String
let name = "John";
let userAge = 25;
let city = "Hyderabad";

console.log(`Q14: My name is ${name}, my age is ${userAge}, and I live in ${city}`);


// 15. typeof String
console.log("Q15:", typeof ("JavaScript" + 100));


// 16. typeof Number
console.log("Q16:", typeof (100 + true));


// 17. Number Constructor
let number = Number("250");
console.log("Q17:", number + 50);


// 18. Number Conversion
console.log("Q18:");
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));


// 19. Boolean Conversion
console.log("Q19:");
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(null));


// 20. Convert Price into Number
let price = "500";
price = Number(price);
console.log("Q20:", price + 100);