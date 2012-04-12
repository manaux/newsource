/*

Проверка возраста. До 18 лет - запрос о разрешении родителей.
Есть - доступ разрешен, нет - запрещен. Старше 18 - доступ разрешен.

*/

// c оператором '?:'
function checkAge(age) {

  return (age > 18)? true: confirm('Родители разрешили?');

}

if(checkAge(age)) {
  alert('Доступ разрешен');
} else {
  alert('В доступе отказано!');
}

var age = prompt('Ваш возраст?');

checkAge();

// c оператором '||'

function checkAge2(age) {

  return (age > 18) || confirm('Родители разрешили?');

}

if(checkAge2(age)) {
  alert('Доступ разрешен');
} else {
  alert('В доступе отказано!');
}

checkAge2();

/*
находим меньшее из чисел a и b, выводим его на экран

прим.:
 min(2, 5) == 2
 min(3, -1) == -1

 */

var a = prompt('введите a');
var b = prompt('введите b');

function getMin(a, b) {
  if (a > b) {
    alert('больше число: ' + a);
  } else {
    alert('больше число: ' + b);
  }
}

function getMin(a, b) {
  (a < b)? alert('меньше число: ' + a): alert('меньше число: ' + b);

}

getMin(a, b);

/*
возводим a в степень b, выводим результат
 */

function pow(a, b) {
  var rez = 1;
  for (var i = 1; i <= b; i++) {
    rez *= a;
  }
  alert(a + ' в степени ' + b + ' равно ' + rez);
  return;
}

pow(a, b);


/*
вычисляем сумму чисел
*/


// с помощью рекурсии


function recurSumTo(n) {

  return (n != 1)? n + getSumTo(n - 1): n;

}

alert (getSumTo(100));

// с помощью цикла

function cyclSumTo(n) {

  var rez = 0;

  for (i = n; i >= 1; i--) {

    rez += n--;

  }

  return rez;
}

alert (cyclSumTo(100));

// с помощью алгебраической формулы для арифм.прогрессии

function formSumTo(n) {

  var rez = (n * (n + 1)) * 0.5;

  return rez;
}

alert (cyclSumTo(100));


/*
вычисляем факториал
*/

function factorial(n) {

  return (n != 1)? n * factorial(n - 1): n;

}

alert (factorial(5));


/**
 * функция вычисляет n-член последовательности Фибоначчи
 */

function fib(n) {
  var a = 1;
  var b = 0;
  var c = 0;
  for (var i = 1; i <= n; i++) {
    c = a + b;
    a = b, b = c;
  }
  return c;
}

alert (fib(5));

// ----------------------------------------------- СТРОКИ -------------

/**
 * возвращаем первый символ строки в нижнем регистре
 */

function getLetter() {
  var str = 'василий';
  return str.charAt(0).toUpperCase();
}

alert (getLetter());


/**
  * проверяем строку на спам стоп-слова. не чувствительно к реестру
  */

function checkSpam(str) {
  str = str.toLowerCase();
  if (~str.indexOf('viagra') || ~str.indexOf('viagra')) {
    return true;
  }
  return false;
}

checkSpam('buy ViAgRA now');

/**
  * проверяем длину строки, усекаем по макс.длине и добавляем "..."
  */

function truncate(str, maxlength) {
  var maxlength;
  if (str.length <= maxlength) {
    return str;
  } else {
    str = str.slice(0, maxlength - 3) + '...';
    return str;
  }
}

alert (truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

/**
  * случайные числа
  * Напишите код для генерации случайного числа от min до max, не включая max.
  */

var min = 5, max = 10;

alert(min + Math.random()*(max-min));


/**
  * объекты
  */

var user = {
}; // создали пустой объект user
user.name = "Вася"; // или user[name] = "Вася"      добавили св-во "name" со значением "Вася"
user.surname = "Петров";
user[name] = "Сергей"; // для разнообразия
delete user.name; // удалили свойство


// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2

var menu = {
width: 200,
height: 300,
title: "My menu"
};

function multiplyNumeric(obj) {
  for (var key in menu) {
    if (isNumeric(obj[key])) {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

alert ("menu width="+menu.width+" height="+menu.height+" title="+menu.title);


// калькулятор через метод объекта

var calculator = {
readValues: function() {
    this.a = +prompt('Введите a:', 0);
    this.b = +prompt('Введите b:', 0);
  },
sum: function() {
    return this.a + this.b;

  },
mul: function() {
    return this.a * this.b;

  }

}

calculator.readValues();
alert(calculator.sum());
alert(calculator.mul());

//====================================================

var calculator = {
massiv: array =[],
readValues: function(n) {
    this.massiv.push = +prompt('Введите a:', 0);
    this.massiv.push = +prompt('Введите b:', 0);
  },
sum: function() {
    for (i = 0; i <= this.massiv.length; i++) {
      return this.massiv += this.massiv[i];
    }
  },
mul: function() {
    for (i = 0; i <= this.massiv.length; i++) {
      return this.massiv *= this.massiv[i];
    }
  }

}

calculator.readValues(2);
alert(calculator.sum());
alert(calculator.mul());


/*
  // не разобрался
  var ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert(this.step);
    return this;
  }
}

ladder.up().up().down().up().down().showStep();

*/


// и снова та же задачка на изменение св-в объекта

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function someFunc(n) {
  for (var key in n) {
    isNumeric(n[key])? n[key] *= 2: false;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

someFunc(menu);

alert('width: ' + menu.width + 'height: ' + menu.height + 'title: ' + menu.title);


/*
Создайте объект calculator с тремя методами:

readValues() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму двух значений
mul() возвращает произведение двух значений
*/

calculator = {
    readValues : function() {
        this.a = +prompt('a: ');
        this.b = +prompt('b: ');
    },
    sum : function() {
        return this.a + this.b;
    },
    mul : function() {
        return this.a * this.b;
    }
}

calculator.readValues();
alert(calculator.sum());
alert(calculator.mul());


//  Напишите функцию-конструктор Summator, которая создает объект с двумя методами:
//
//    sum(a,b) возвращает сумму двух значений
//    run() запрашивает два значения при помощи prompt и выводит их сумму.
//    new Summator().run() должно спрашивать два значения и выводить их сумму

function Summator() {
    this.sum = function() {
        return this.a + this.b;
    },
    this.run = function() {
        this.a = +prompt('a: ');
        this.b = +prompt('b: ');
        alert('сумма чисел: ' + this.sum());
    }

}

new Summator().run();


//  Напишите функцию-конструктор Adder(startingValue).
//    Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
//
//    Более формально, объект должен:
//
//    Хранить текущее значение в свойстве value. Начальное значение value ставится конструктором равным startingValue.
//    Метод addInput() вызывает prompt, принимает число и прибавлет его к value.
//    Метод showValue() выводит текущее value.
//    Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода addInput(), с учетом начального значения startingValue.
//
//    По ссылке ниже вы можете посмотреть работу кода:
//    показать чистый исходник в новом окнеСкрыть/показать номера строкпечать кода с сохранением подсветки
//  var adder = new Adder(1); // начальное значение 1
//  adder.addInput(); // прибавит ввод prompt к текущему значению
//  adder.addInput(); // прибавит ввод prompt к текущему значению
//  adder.showValue(); // выведет текущее значение


function Adder(startingValue) {
    this.value = startingValue,
    this.addInput = function() {
        this.value += +prompt('введите число: ');
    },
    this.showValue = function() {
        alert('Текущая сумма: ' + this.value);
    }
}

  var adder = new Adder(1); // начальное значение 1
adder.addInput(); // прибавит ввод prompt к текущему значению
adder.addInput(); // прибавит ввод prompt к текущему значению
adder.showValue(); // выведет текущее значение




// ====================================  Массивы ==================================
//
//      Как получить последний элемент из произвольного массива?
//
//    У нас есть массив goods. Сколько в нем элементов - не знаем, но можем прочитать из goods.length.
//    Напишите код для получения последнего элемента goods.

var goods = [1, 5, true, 54, 13, "be cool", 7];
alert(goods[goods.length - 1]);

//      Как добавить элемент в конец произвольного массива?
//
//    У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».

goods[goods.length] = 'Компьютер';


//      Задача из 5 шагов-строк:
//
//  Создайте массив styles с элементами «Джаз», «Блюз».
//  Добавьте в конец значение «Рок-н-Ролл»
//  Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
//    Удалите первое значение массива и выведите его alert.
//    Добавьте в начало значения «Рэп» и «Регги».

var styles = ['Jazz', 'Blues'];
styles.push('Rock-n-roll');
styles[styles.length - 2] = 'Classic';
alert( styles.shift() );
styles.unshift('Rap', 'Raggie');

//  Напишите код для вывода alert случайного значения из массива

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = min + Math.floor( Math.random() * (max + 1 - min) );
var min = 0;
var max = arr.length - 1;
alert(arr[rand]);


//      Создайте объект calculator с методами:
//
//      readValues(n) запрашивает n значений и сохраняет их в массиве - свойстве объекта.
//      sum() возвращает сумму всех значений
//      mul() возвращает произведение всех значений

var calculator = {
    arr: [],
    sum: function() {
        var a = 0;
        for (var i = 0; i < this.arr.length; i++) {
            a += this.arr[i];
            }
        return a;
    },

    mul: function() {
        var b = 1;
        for (var i = 0; i < this.arr.length; i++) {
            b *= this.arr[i];
            }
        return b;
    },

    readValues: function(n) {
        for (n; n > 0; n-- ) {
             var x = +prompt('введите число для суммирования: ');
            this.arr.push(x);
        }
    }
}

calculator.readValues(3); // ввод: 1, 2, 5
alert( calculator.sum() ); // результат: 8
alert( calculator.mul() ); // результат: 10



//  Создайте функцию find(arr, value), которая ищет в массиве arr значение value
//  и возвращает его номер, если найдено или -1, если не найдено


var arr = [ "test", 2, 1.5, false ];

function find(arr, value) {

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str === value) {
        return i;
        }
    }
    return -1;
}

alert ( find(arr, "test") ) // 0
alert ( find(arr, 2) ) // 1
alert ( find(arr, 1.5) ) // 2

alert ( find(arr, 0) ) // -1


//      Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только те числа из arr, которые находятся между a и b включительно.
//    То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

    var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
            if (arr[i] >= a && arr[i] <= b) {
                result.push(arr[i]);
            }
        }

        return result;
}

var filtered = filterRange(arr, 3, 5);
alert(filtered);

// изящно.... запомнить!!





var arr = [1, 2, 3, 4, 5, 6, 7]

var res = filter(arr, function(a) { return a>=3 && a <= 5; });

alert(res); // результат: 3, 4, 5



//  Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
//  в который входят только те элементы arr, для которых func возвращает true.


function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var a = arr[i];

        if ( func(a) ) {             // тут аргумент не указал. Быть внимательней
            result.push(arr[i]);
        }
    }

    return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var res = filter(arr, function(a) { return a>=3 && a <= 5; });

alert(res); // результат: 3, 4, 5


//  Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.
//
//  Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:
//
//    Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
//    Пусть p=2, это первое простое число.
//    Зачеркнуть все числа в списке с разницей в p, т.е. 2p, 3p, 4p и т.д. В случае p=2 это будут 2,4,6,8....
//    Поменять значение p на первое незачеркнутое число после p.
//    Повторить шаги 3-4 пока p2 < n.
//    Все оставшиеся незачеркнутыми числа - простые.
//    Посмотрите также анимацию алгоритма.
//
//    Реализуйте «Решето Эратосфена» в JavaScript. Найдите все простые числа до 100 и выведите их сумму.



function rescheto() {
        var array = [];
        var filter = [];
        var sum = 0;

        for (var i = 0; i <= 98; i++ ) {
            var p = i + 2;
            array.push(p);
            var y = array[i];

            if ( (y % 2) && (y % 3) && (y % 5) && (y % 7) ) {
                filter.push(y);
            }
        }

        filter.unshift(2, 3, 5, 7);  // добавляем в массив очевидно простые числа

        for (var j = 0; j < filter.length; j++ ) {
        sum += filter[j];
        }

        alert('простые числа от 2 до 100: ' + filter);
        alert('сумма простых чисел от 2 до 100: ' + sum);
}

rescheto();



// ======================  методы массивов ==================================


//  В объекте есть свойство className, которое содержит список «классов» - слов, разделенных пробелом:
//    var obj = {
//        className: 'open menu'
//    }
//  Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:


var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    var string = obj.className;
    var arr = string.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            return;
        }
    }
    arr.push(cls);
    obj.className = arr.join(' ');

}


addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open');  // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className);  // "open menu new me"


//  Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
//  То есть, дефисы удаляются, а все слова после них получают заглавную букву.
//
//    Например:
//  camelize("background-color") == 'backgroundColor';
//  camelize("list-style-image") == 'listStyleImage';
//  Такая функция полезна при работе с CSS.
//
//    P.S. Вам пригодятся методы charAt, slice и toUpperCase.

function camelize(str){
    var arr = str.split('-');
    for (var i = 1; i < arr.length; i++) {
        var y = arr[i] ;
        arr[i] = y.charAt(0).toUpperCase() + y.slice(1);
    }
    var res = arr.join('');
    return res;
}

alert( camelize("list-style-image") );




//  У объекта есть свойство className, которое хранит список «классов» - слов, разделенных пробелами:
//    var obj = {
//        className: 'open menu'
//    }
//  Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//    removeClass(obj, 'open'); // obj.className='menu'
//  removeClass(obj, 'blabla'); // без изменений (нет такого класса)
//  P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:


    var obj = {
        className: 'open menu open'
    }

function removeClass(obj, cls) {
    var string = obj.className;
    var arr = string.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;                                // это сразу не учел
        }

    }

    obj.className = arr.join(' ');

}

  removeClass(obj, 'open'); // obj.className='menu'
  removeClass(obj, 'blabla'); // без изменений (нет такого класса)

alert(obj.className);




//  Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него
//  все числа вне диапазона a..b.
//  То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//  Функция должна менять сам массив и ничего не возвращать.


arr = [5, 1, 8, 2, 6, 3, 4, 9, 7];

function filterRangeInPlace(arr, a, b) {

    for (var i = 0; i < arr.length; i++) {
        var y = arr[i];
        if ( y < a || y > b ) {                     // не разобрался с условием
            arr.splice(i--, 1);
        }

    }
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr);



// Как отсортировать массив чисел в обратном порядке?


var arr = [ 5, 2, 1, -10, 8];

function sorting(a, b) {
    return -(a-b);
}

arr.sort(sorting);
// отсортируйте?

alert(arr);  // 8, 5, 2, 1, -10



// Напишите код, который сортирует массив чисел, но так, что четные значения идут до нечетных.

function evenCompare(a, b) {
    // числа одной четности - сортируются обычным образом
    if ( a % 2 == b % 2 ) return a - b;

    // иначе, если a - четное, то оно меньше
    if (a % 2 == 0) return -1;

    // остался один вариант: a - нечетное, и b - четное
    return 1;
}

var arr = [ 5, 2, 1, -10, 8];

arr.sort(evenCompare);

alert(arr);  // -10, 2, 8, 1, 5


// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

function randSort(a, b) {

    return Math.random() - Math.random();

}

var arr = [1, 2, 3, 4, 5];

arr.sort(randSort);

alert(arr); // элементы в случайном порядке, например [3,5,1,2,4]




//  Создайте функцию ageSort(people), которая будет получать массив объектов и сортировать их по полю age.
//
//  Выведите массив после сортировки.


  var vasya = { name: "Вася Петров", age: 23 };
  var masha = { name: "Маша Сидорова", age: 18 };
  var vovochka = { name: "Вовочка", age: 6 };

  var people = [ vasya , masha , vovochka ];

console.log(people);

function ageSort(arr) {

    function sorting(a, b) {
        return a.age - b.age;
    }

    return people.sort(sorting);

}

ageSort(people); // теперь people: [ vovochka , masha , vasya ]



//  На входе массив чисел, например: arr = [1,2,3,4,5].
//
//    Ваша функция getSums(arr) должна возвращать новый массив из такого же числа элементов, в котором
//      на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
//
//    То есть, getSums(arr) = [1, 3(=1+2), 6(=1+2+3), 10(=1+..+4), 15(=1+..+5)].
//
//  Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
//
//    Функция не должна модифицировать входной массив.
//    В решении используйте метод arr.reduce.


var arr = [1,2,3,4,5];

function join(previousStr, currentItem, i) {
    var rez = [];
    var str = previousStr + currentItem;
    alert(str);
    rez[i] = str;                                                               // разобраться
    return rez;
}

var result = arr.reduce(join, '');

alert("result = " + result);



// =================================== Дата и Время =======================================


//  Создайте дату: 20 февраля 2012 года, 3 часа 12 минут ровно. Временная зона - местная.

var newD = new Date(2012, 1, 20, 3, 12);
alert(newD);


//  Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате ‘пн’, ‘вт’, … ‘вс’.

function getWeekDay(d) {
    var arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    var day = arr[d.getDay()];
    return day;
}

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );

// ------------------------

function getLocalDay(d) {
    day = d.getDay() ;
    if (day == 0) {
        day = 7 ;
    }
    return day;
}

var date = new Date(2012,0,8);  // 3 января 2012
alert( getLocalDay(date) );


// Какое число месяца было 100 дней назад? Какой день недели?
// Используйте JavaScript, чтобы вывести эту информацию.
// День недели выводите двухбуквенном виде, т.е. одно значение из (пн, вт, ср, …,вс).

var date = new Date();
date.setDate( date.getDate() - 100 );
var arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
var day = arr[date.getDay()];
var chislo =  date.getDate();

alert(day);
alert(chislo);


//      Напишите код, который выводит:
//
//    Сколько секунд прошло с начала сегодняшнего дня.
//    Сколько осталось до конца дня.
//    Скрипт должен работать в любой день, т.е. в нём не должно быть конкретного значения сегодняшней даты.

var now = new Date();

// создать объект из текущей даты, без часов-минут-секунд
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

var diff = now - today; // разница в миллисекундах
alert( Math.round(diff / 1000) ); // перевести в секунды

var now = new Date();

// создать объект из даты, без часов-минут-секунд
var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

var diff = tomorrow - now; // разница в миллисекундах
alert( Math.round(diff / 1000) ); // перевести в секунды


// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:


function formatDate(d) {
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    if ( day / 10 < 1) {
        day = '0' + day;
    }
    if ( month / 10 < 1) {
        month = '0' + month;
    }
    if (year > 99) {
        year = year.toString();
        year = year.slice(-2);
    }
    return day + '.' + month + '.' + year;

}

var d = new Date(2011, 0, 30); // 30 января 2011
alert( formatDate(d) ); // '30.01.11'


//    Напишите функцию formatDate(date), которая форматирует дату date так:
//
//    Если со времени date прошло менее секунды, то возвращает "только что".
//    Иначе если со времени date прошло менее минуты, то "n сек. назад".
//    Иначе если прошло меньше часа, то "m мин. назад".
//    Иначе полная дата в формате "дд.мм.гг чч:мм".

function formatDate(date) {
    var now = new Date();
    console.log(date);
    var interval = now - date;
    if (interval < 1000) return 'Только что!';
    if (interval > 1000 && interval < 60000) return (interval / 1000)^0 + 'сек. назад';
    if (interval > 60000 && interval < 60000*60) return (interval/60000)^0 + 'мин. назад';

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate() % 100;

//    if ( day < 10) {
//        day = '0' + day;
//    }
//    if ( month < 10) {
//        month = '0' + month;
//    }
//    if (year < 10) {
//        year = '0' + year;
//    }
//    return day + '.' + month + '.' + year;

    // форматировать дату, с учетом того, что месяцы начинаются с 0
    var d = date;
    d = ['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(), '0'+d.getHours(),'0'+d.getMinutes() ];
    for(var i=0; i<d.length; i++) {
        d[i] = d[i].slice(-2);
    }

    return d.slice(0,3).join('.')+' '+d.slice(3).join(':');


}


alert( formatDate( new Date(new Date - 1) ) ); // "только что"
alert( formatDate( new Date(new Date - 30*1000) ) ); // "30 сек. назад"
alert( formatDate( new Date(new Date- 5*60*1000) ) ); // "5 мин. назад"
alert( formatDate( new Date(new Date - 86400*1000) ) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"


// сколько времени я прожил. И сколько мне осталось жить до 100 лет

var now = new Date();
var birthday = new Date(1987, 5, 13);
var after100years = new Date(2087, 0, 0);
var to100yearsold = (after100years - now) / (1000*60*60);
var myLifetimes = (now - birthday) / (1000*60*60);
alert('я прожил от рождения: ' + Math.round(myLifetimes) + ' часов');
alert('до 100 лет мне осталось жить: ' + Math.round(to100yearsold) + ' часов');


// задачки на приведение типов

    '' + 1 + 0  // 10
    true + false // 1
    6 / "3" // 2
    "2" * "3"   //6
    4 + 5 + "px"    // 45px      --- 9px
    "$" + 4 + 5    // $45
    "4" - 2     // 2
    "4px" - 2   // NaN
    7 / 0   // infinity
    ({})[0]     // 0    --- undefined , у объекта нет свойства '0'
    parseInt("09")  // 9   --- "9" или "0"
    5 && 2  // true, 5   --- 2    последнее верное выводит. Затупил
    2 && 5  //  true, 2  --- 5
    5 || 0  // true, 5
    0 || 5  // true, 5
    null + 1 // null   --- 1, null при численном преобразовании становится 0
    undefined + 1 // undefined   --- NaN, undefined при численном преобразовании становится NaN
    [] + null + 1   //null1
    [[0]][0][0] // 0, [[0]] — это вложенный массив [0] внутри внешнего [ ].


//      Напишите функцию outputDate(date), которая выводит дату в формате dd.mm.yy.
//
//    Ее первый аргумент должен содержать дату в одном из видов:
//
//    Как объект Date.
//    Как строку в формате yyyy-mm-dd.
//    Как число секунд с 01.01.1970.
//    Как массив [гггг, мм, дд], месяц начинается с нуля
//      Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.


function outputDate(date) {                             // толковый парсер. запомнить!

    if (typeof date == 'number') {
        // перевести секунды в миллисекунды и преобразовать к Date
        date = new Date(date*1000);
    } else if(typeof date == 'string') {
        // разобрать строку и преобразовать к Date
        date = date.split('-');
        date = new Date(date[0], date[1]-1, date[2]);
    } else if ( {}.toString.call(date) == '[object Array]' ) {
        date = new Date(date[0], date[1], date[2]);
    }

    var day = date.getDate();
    if (day < 10) day = '0' + day;

    var month = date.getMonth()+1;
    if (month < 10) month = '0' + month;

    // взять 2 последние цифры года
    var year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    var formattedDate = day + '.' + month + '.' + year;

    alert(formattedDate);

}

    outputDate( '2011-10-02' );  // 02.10.11
    outputDate( 1234567890 );  // 14.02.09
    outputDate( [2000,0,1] ); // 01.01.00
    outputDate( new Date(2000,0,1) ); // 01.01.00

13test
