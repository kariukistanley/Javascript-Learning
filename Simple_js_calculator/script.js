//function to add using parameters(arguments)
console.log("Calculator")
function add() {
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let result =a+b
	document.getElementById('Result').innerHTML= result
}
function subtract() {
	
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let result = a-b
	document.getElementById('Result').innerHTML= result
}

function divide() {
	
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let result = a/b
	document.getElementById('Result').innerHTML= result
}

function mutiply() {
	
	let a = parseFloat(document.getElementById('num1').value)
	let b = parseFloat(document.getElementById('num2').value)

	let result =a*b
	document.getElementById('Result').innerHTML= result
}

