(function () {
	"use strict";

	//-----Возведение в степень-----
	// Ввод и проверка целого числа
	function integer(a) {
		var text = a;
		a = prompt(text);
		while ((a ^ 0) != a){
			alert ('Enter an integer!');
			a = prompt(text);
		}
		return a;
	}
	//Возведение в положительную степень
	function expoN(a,b) {
		var x = a;
		for (var i=1; i < b; i++){
			x = x * a;
		}
		return x;
	}
	//Возведение в отрицательную и положительную степень
	function pow() {
		var a = integer('Enter the number');
		var b = integer('Enter the degree');
		if (b >= 0) {
			var result = expoN(a,b);
		} else {
			b = -b;
			result = 1 / expoN(a,b);
		}
		console.log('result =', result);
	}
	pow();


	//-----Масив имён-----
	var nameN = [];
	var nameY;
	function namE() {
		for (var i=5; i > 0; i--){
			nameN.push(prompt('Enter any name'));
		}
		nameY = prompt('Enter Your name');
	}
	namE();
	//Вариант 1 - Хитрый =))
	// var z = false;
	// for (var i=0; i < 5; i++){
	// 	if (nameN[i] == nameY) {
	// 		alert(', вы успешно вошли');
	// 		z = true;
	// 	} else if (z == true){
	// 		z = true;
	// 	} else {
	// 		z = false;
	// 	}
	// }
	// if (z == false) alert('Error!');
	//Вариант 1 - Конец
	//Вариант 2 - Начало
	function search() {
		for (var i=0; i < 5; i++){
			if (nameN[i] == nameY) {
				alert("Здравствуйте "+ nameY +", вы успешно вошли!");
				return;
			}
		}
		alert('Error!');
	}
	search();
	//Вариант 2 - Конец
})();



