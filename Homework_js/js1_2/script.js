//-----Возведение в степень-----
// Ввод и проверка целого числа
function integer(text) {
	"use strict";
	var a = +prompt(text);
	while ((a % 1) !== 0){
		alert ('Enter an integer!');
		a = +prompt(text);
	}
	return a;
}
//Возведение в положительную степень
function expoN(num,expo) {
	"use strict";
	var i,
			x = num;
	for (i=1; i < expo; i+=1){
		x *= num;
	}
	return x;
}
//Возведение в отрицательную и положительную степень
function pow() {
	"use strict";
	var result,
			num = integer('Enter the number'),
			expo = integer('Enter the exponent');
	if (expo === 0) {
		result = 1;
	} else if (expo > 0) {
			result = expoN(num,expo);
		} else {
		expo = -expo;
			result = 1 / expoN(num,expo);
		}
	console.log('result =', result);
}
pow();
//-----Масив имён-----
function namE() {
	"use strict";
	var i,
			nameY,
			nameN = [];
	for (i=5; i > 0; i-=1) {
		nameN.push(prompt('Enter any name'));
	}
	nameY = prompt('Enter Your name');
	function search() {
		for (i=0; i < 5; i+=1){
			if (nameN[i] === nameY) {
				alert("Здравствуйте "+ nameY +", вы успешно вошли!");
				return;
			}
		}
		alert('Error!');
	}
	search();
}
namE();




