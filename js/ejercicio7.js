// ejercicio 7
let num1 = parseInt(prompt('ingrese un numero'))
let num2 = parseInt(prompt('ingrese otro numero'))
let num3 = parseInt(prompt('ingrese otro numero'))

if(num1 > num2 && num1 > num3){
    document.write('<p>El numero: '+ num1 + ' es mayor </p>')
}else if(num2 > num1 && num2 > num3){
    document.write('<p>El numero: '+ num2 + ' es mayor </p>')
}else if(num3 > num1 && num3 > num2){
    document.write('<p>El numero: '+ num3 + ' es mayor </p>')
}