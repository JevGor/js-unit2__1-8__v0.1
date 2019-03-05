// Задача 3
// Значения переменных X, Y, Z поменять местами так, чтобы они оказались 
// упорядоченными по возрастанию


var x, y, z;
x = 4, y = 1, z = 6;
var sum = x+y+z;

if ((x > y) && (x > z) && (y > z)) {
    console.log(x, y, z);
    
} else if ((x > y) && (x > z) && (z > y)) {
    console.log(x, z = y, (y = sum - x - y));

} else if ((y > x) && (y > z) && (x > z)) {
    console.log(y = x, (x = sum - y - z) , z);

} else if ((y > x) && (y > z) && (z > x)) {
    console.log(y = x , z, (x = sum - y - z));

} else if ((z > x) && (z > y) && (x > y)) {
    console.log(z = x, (x = (sum-z-y)), y);

} else if ((z > x) && (z > y) && (y > x)) {
    console.log(z = x, (y = sum - x - z), x);

} else {
    console.log('Не x, не у и не z')
};
