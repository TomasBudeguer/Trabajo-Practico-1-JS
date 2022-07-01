let num1 = parseInt(prompt('ingrese un numero'))

if(num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0){
    if(num1 % 2 === 0){
        document.write('<p>El numero: '+ num1 + ' es divisible por 2 </p>')
    }if(num1 % 3 === 0){
        document.write('<p>El numero: '+ num1 + ' es divisible por 3 </p>')
    }if(num1 % 5 === 0){
        document.write('<p>El numero: '+ num1 + ' es divisible por 5 </p>')
    }if(num1 % 7 === 0){
        document.write('<p>El numero: '+ num1 + ' es divisible por 7 </p>')
    }
}else{
    document.write('<p>El numero: '+ num1 + ' NO divisible por 2, 3, 5 ni 7 </p>')
}