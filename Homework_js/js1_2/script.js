(function () {
	"use strict";

	//-----Возведение в степень-----
	// Ввод и проверка целого числа
	function integer(text) {
		var a = prompt(text);
		while ((a ^ 0) != a){
			alert ('Enter an integer!');
			a = prompt(text);
		}
		return a;
	}
	//Возведение в положительную степень
	function expoN(num,expo) {
		var x = num;
		for (var i=1; i < expo; i++){
			x *= num;
		}
		return x;
	}
	//Возведение в отрицательную и положительную степень
	function pow() {
		var num = integer('Enter the number'),
				expo = integer('Enter the exponent');
		if (expo == 0) {
			result = 1;
		} else if (expo > 0) {
				var result = expoN(num,expo);
			} else {
			expo = -expo;
				result = 1 / expoN(num,expo);
			}
		console.log('result =', result);
	}
	pow();

	//-----Масив имён-----
	function namE() {
		var nameN = [];
		for (var i=5; i > 0; i--){
			nameN.push(prompt('Enter any name'));
		}
		var nameY = prompt('Enter Your name');
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
	}
	namE();
})();



