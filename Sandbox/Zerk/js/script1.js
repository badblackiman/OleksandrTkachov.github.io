/*Написать функцию reverseString(str) которая получает строку и возвращает ее зеркальную(перевернутую) версию
reverseString("hello"); возвратит "olleh"
reverseString("Howdy"); возвратит "ydwoH"
reverseString("Greetings from Earth"); возвратит "htraE morf sgniteerG"
*/
'use strict';
function reverseString(a) {
  var arr=a.split('');
  var rra = [];
  for (var i = arr.length-1; i >= 0 ; i--) {
    var x = arr[i];
    rra.push(x);
  }
  rra=rra.join('');
  console.log(rra);
}
reverseString('Hello');
reverseString('Howdy');
reverseString('Greetings from Earth');

/*Написать функцию findLongestWord(str) которая получает строку и возвращает массив,
первый елемент массива это самое длинное слово в этой строке,
второй елемент массива это длина этого слова.
findLongestWord("The quick brown fox jumped over the lazy dog"); вернет ['jumped', 6]
findLongestWord("Google do a roll"); вернет ['Google', 6]
findLongestWord("May the force be with you"); вернет ['force', 5]*/
function findLongestWord(str) {
  var arr=str.split(' ');
  var arrWord = [];
  var z = 0;
  for (var i = 0; i < arr.length; i++) {
    var x = arr[i];
    var y = x.length;
    if (y>z) {
      arrWord = [x,y];
      z = y;
    }
  }
  console.log(arrWord);
}
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");

/*Написать функцию factorialize(num) которая получает число и возврашает факториал этого числа
1*2*3*4*5=120
factorialize(5); вернет 120
factorialize(10); вернет 3628800
factorialize(0); вернет 1*/
function factorialize(a) {
  var z = 1;
  for (var i = 1; i <= a; i++) {
    z = z * i;
  }
  console.log(z);
}
factorialize(5);
factorialize(10);
factorialize(0);
