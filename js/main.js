/*Age Calculator
Want to find out how old you'll be? Calculate it!
Store your birth year in a variable.
Store a future year in a variable.

Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
*/
let birthYear = 1980;
let futureYear = 2085;
let age = futureYear - birthYear;

console.log("I will be either " + age + " or " + (age - 1) + " in " + futureYear)




/*The Lifetime Supply Calculator*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.

Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".*/

let currentAge = 40;
let maxAge = 100;
let amtPerDay = 2;
let total = (amtPerDay * 365) * (maxAge - currentAge);

console.log(" You will need " + total + " to last you until the ripe old age of " + maxAge)




/* The Geometrizer
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and ouput "The area is NN".*/

let radius = 6;
let circumference = (3.14 * 2) * radius;
let area = 3.14 * (radius * radius)
console.log(" The area circumference " + circumference + " and the area " + area);



/*The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN*C is NN*F".

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN*F IS NN*C."*/

let celsius = 50;
let fahrenheitConv = (celsius * 9/5) + 32
console.log(celsius + "*C is " + fahrenheitConv + "*F")

let fahrenheit = 80;
let celsiusConv = (fahrenheit - 32) * 5/9
console.log(fahrenheit + "*F is " + celsiusConv + "*C")