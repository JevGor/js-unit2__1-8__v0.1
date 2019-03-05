// Задача 7 
// Дано целое число в диапазоне 0 – 9. 
// Вывести строку — название соответствующей цифры на русском языке (0 — "ноль", 1 — "один", 2 — "два", ...).

var n = 3;

if (n ==  0) {console.log ( n.toString(), ' - ноль');
} else if (n == 1){console.log (n.toString(),'- один');
} else if (n == 2){console.log (n.toString(),'- два');
} else if (n == 3){console.log (n.toString(),'- три');
} else if (n == 4){console.log (n.toString(),'- четыре');
} else if (n == 5){console.log (n.toString(),'- пять');
} else if (n == 6){console.log (n.toString(),'- шесть');
} else if (n == 7){console.log (n.toString(),'- семь');
} else if (n == 8){console.log (n.toString(),'- восемь');
} else if (n == 9){console.log (n.toString(),'- девять');
} else {console.log ('Это не N');};