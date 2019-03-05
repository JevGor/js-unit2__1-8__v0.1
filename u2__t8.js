// Задача 8 
// Из трех данных чисел выбрать наибольшее.

var q,w,r;
q = 3; w = 4; r = 5;

if ((q > w) && (q > r)) {
    console.log(q);
} else if ((w > q) && (w > r)) {
    console.log(w);
} else if ((r > w) && (r > q)) {
    console.log(r);
} else {console.log('Числа равны или что-то еще')};

