// Задача 6 
// Проверить истинность высказывания: "Сумма цифр данного трехзначного числа является четным числом".

var a = 123;
a = a.toString();
var c = null;
var d = null;
var e = null;

if ( (c = a.charAt(0), d = a.charAt(1), e = a.charAt(2)), 
    (c = parseInt(c), d = parseInt(d), e = parseInt(e)),
      ((c+d+e)%2 == 0)) {
    console.log('Сумма цифр данного трехзначного числа является четным числом')
} else {
    console.log('Сумма цифр данного трехзначного числа НЕ является четным числом');
};