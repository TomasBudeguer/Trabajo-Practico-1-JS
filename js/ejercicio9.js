// ejercicio 9
let frase = prompt('Escriba su frase: ')
frase = frase.toLowerCase()

for(i = 0; i < frase.length; i++){
    if( frase.charAt(i,frase.length)=== 'a' || frase.charAt(i,frase.length)=== 'e' || frase.charAt(i,frase.length)=== 'i' || frase.charAt(i,frase.length)=== 'o' || frase.charAt(i,frase.length)=== 'u'){
        document.write(frase.charAt(i,frase.length))
    }
}