// Задача 1. 
// Дан номер месяца (1 — январь, 2 — февраль, ...). 
// Вывести название соответствующего времени года ("зима", "весна" и т.д.). 

const sn = 8

function whatSeason(sn) {
    return sn >= 1 && sn <= 2 || sn == 12 ? 'Зима' :
        sn >= 3 && sn <= 5 ? 'Весна' :
        sn >= 6 && sn <= 8 ? 'Лето' :
        sn >= 9 && sn <= 11 ? 'Осень' :
        'Это не сезон'
}

whatSeason(sn)


// Задача 2 
// Даны две переменные целого типа: A и B. 
// Если их значения не равны, то присвоить каждой переменной сумму этих значений,
// а если равны, то присвоить переменным нулевые значения.

const a = 2
const b = 3

function comparison(a, b) {
    return a != b ? (a = a + b, b = a) : (b = 0, a = 0)
}
comparison(a, b)


// Задача 3
// Значения переменных X, Y, Z поменять местами так, чтобы они оказались 
// упорядоченными по возрастанию

let x = 6
let y = 5
let z = 4

function change() {
 let max = null
  let middle = null
  let min = null
  
  if (x >= y && x >= z) {
   max = x
    if (y >= z) {
     middle = y
      min = z
    } else {
     middle = z
      min = y
    }
  } else if (y >= x && y >= z) {
   max = y
    if (x >= z) {
     middle = x
      min = z
    } else {
     middle = z
      min = x
    }
  } else {
   max = z
    if (y >= x) {
     middle = y
      min = x
    } else {
     middle = x
      min = y
    }
  }
  
  x = min
  y = middle
  z = max

}

console.log(x, y, z)
change()
console.log(x, y, z)


// Задача 4 
// Дан номер некоторого года (положительное целое число). 
// Вывести число дней в этом году, учитывая, что обычный год насчитывает 365 дней, 
// а високосный — 366 дней. Високосным считается год,
// делящийся на 4, за исключением тех годов, которые делятся на 100 и не делятся на 400 
// (например, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 — являются).

const yr = 2000

function bissextile(yr) {
    return yr / 4 && yr / 100 && yr % 400 == 0 ? 'Это високосный год 366 дней' : 'Это обычный год 365 дней'
}
bissextile(yr)

// Задача 5 
// Дано целое число, лежащее в диапазоне от –999 до 999. 
// Вывести строку — словесное описание данного числа вида 
// "отрицательное двузначное число", "нулевое число", "положительное однозначное число" и т.д.

const num = 300

function numeric(num) {
    return num >= -999 && num <= -100 ? 'отрицательное трехзначное число' :
        num >= -99 && num <= -10 ? 'отрицательное двузначное число' :
        num >= -9 && num <= -1 ? 'отрицательное однозначное число' :
        num === 0 ? 'нулевое число' :
        num >= 1 && num <= 9 ? 'положительное однозначное число' :
        num >= 10 && num <= 99 ? 'положительное двузначное число' :
        num >= 100 && num <= 999 ? 'положительное трехзначное числ' :
        'Это не але'
}

numeric(num)

// Option 2 

const num = 300

function numeric(num) {
    switch (true) {
        case (num >= -999 && num <= -100):
            console.log('отрицательное трехзначное число');
            break;
        case (num >= -99 && num <= -10):
            console.log('отрицательное двузначное число');
            break;
        case (num >= -9 && num <= -1):
            console.log('отрицательное однозначное число');
            break;
        case (num === 0):
            console.log('нулевое число');
            break;
        case (num >= 1 && num <= 9):
            console.log('положительное однозначное число');
            break;
        case (num >= 10 && num <= 99):
            console.log('положительное двузначное число');
            break;
        case (num >= 100 && num <= 999):
            console.log('положительное трехзначное числ');
            break;
        default:
            console.log('Это не але')
    }
}

numeric(num)


// Задача 6 
// Проверить истинность высказывания: 
// "Сумма цифр данного трехзначного числа является четным числом".

const a = 122

function digitSum(a) {
    a = a.toString()
    let c = null
    let d = null
    let e = null
    if (
        (c = a.charAt(0), d = a.charAt(1), e = a.charAt(2)),
        (c = parseInt(c), d = parseInt(d), e = parseInt(e)),
        ((c + d + e) % 2 == 0)) {
        return ('Сумма цифр данного трехзначного числа является четным числом')
    } else {
        return ('Сумма цифр данного трехзначного числа НЕ является четным числом');
    }
}

digitSum(a)

// Option 2 

const a = 122

function digitSum(a) {
    a = a.toString()
    let c = null
    let d = null
    let e = null

    return ((c = a.charAt(0), d = a.charAt(1), e = a.charAt(2)), (c = parseInt(c), d = parseInt(d), e = parseInt(e)), ((c + d + e) % 2 == 0)) ? 'Сумма цифр данного трехзначного числа является четным числом' : 'Сумма цифр данного трехзначного числа НЕ является четным числом'
    // тут можно как-то красиво записать эту соплю из 162 строчки?
}

digitSum(a)

// Задача 7 
// Дано целое число в диапазоне 0 – 9. 
// Вывести строку — название соответствующей цифры на русском языке (0 — "ноль", 1 — "один", 2 — "два", ...).

const n = 3;

function digitString(n) {
    return n == 0 ? (n.toString(), ' - ноль') :
        n == 1 ? n.toString() + ' - один' :
        n == 2 ? n.toString() + ' - два' :
        n == 3 ? n.toString() + ' - три' :
        n == 4 ? n.toString() + ' - четыре' :
        n == 5 ? n.toString() + ' - пять' :
        n == 6 ? n.toString() + ' - шесть' :
        n == 7 ? n.toString() + ' - семь' :
        n == 8 ? n.toString() + ' - восемь' :
        n == 9 ? n.toString() + ' - девять' :
        n == 10 ? n.toString() + ' - десять' :
        'число не соответствует условию'
}

digitString(n)

// Задача 8 
// Из трех данных чисел выбрать наибольшее.

const q = 3
const w = 4
const r = 5

function maxDigit(q, w, r) {
    return q > w && q > r ? q :
        w > q && w > r ? w :
        r > w && r > q ? r :
        'Числа равны или что-то еще'
}

maxDigit(q, w, r)