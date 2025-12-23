// Array com as imagens da forca
let imagens = ["images/parte2.png", "images/parte3.png", "images/parte4.png", "images/parte5.png", "images/parte6.png", "images/parte7.png", "images/parte8.png"]

// Saidas 
let letraJ = document.getElementById("primeiro") // Letra J

let letraAum = document.querySelector(".letraAum") // Letra A

let letraV = document.getElementById("segundo") // Letra V

let letraAdois = document.querySelector('.letraAdois') //LetraA

let letraS = document.getElementById("terceiro") // Letra S

let letraC = document.getElementById("quarto") // Letra C

let letraR = document.getElementById("quinto") // Letra R

let letraI = document.getElementById("sexto")   // Letra I

let letraP = document.getElementById("setimo")  // Letra P


let letraT = document.getElementById("ultimo") //Letra T

// Saida das letras que o usuario já digitou
let r = document.getElementById('resultado')


//###########################################
// Armazenando as letras digitadas 
//###########################################
let letraDigitada = []


//###########################################
// Função de verificar as letras e ver se o usuario acertou
//###########################################
function VerificarLetra() {
    // Input aode o usuario vai digitar 
    let input = document.getElementById('letras').value.toUpperCase()

    // Essa condição é para caso o usuario deixar o campo sem nada
    if (input === '') {
        alert('Preencha o Campo!')
    }

    // Essa condição é para caso o usuario digitar mais do que 1 letra
    if (input.length > 1) {
        alert('Escreva uma letra por vez!')
    }

    // lETRA
    // Verificando se tem a letra J
    if (input == 'J') {
        letraJ.innerText = 'J'
    }

    // lETRA
    if (input == 'A') {
        letraAum.innerHTML = 'A'
        letraAdois.innerHTML = 'A'
    }
    

    // lETRA
    if (input == 'V') {
        letraV.innerText = 'V'
    }

    // lETRA
    if (input == 'S') {
        letraS.innerText = 'S'
    }

    // lETRA
     if (input == 'C') {
        letraC.innerText = 'C'
    }

    // lETRA
     if (input == 'R') {
        letraR.innerText = 'R'
    }

    // lETRA
     if (input == 'I') {
        letraI.innerText = 'I'
    }

    // lETRA
     if (input == 'P') {
        letraP.innerText = 'P'
    }

    // lETRA T
     if (input == 'T') {
        letraT.innerText = 'T'
    }

    r.innerHTML = ''

    letraDigitada.push(input)

    r.innerText += (letraDigitada)


    // POR UMA CONDIÇÃO SÓ PARA O ERRO, AI EU COLOCO O INDICE E A CADA ERRO ELE PERCORRE 1 ITEM DO ARRAY É COMO SE FOSSE UM BOTAO PASSANDO A IMAGENS PARA FRENTE

    // Limpa os campos depois que o usuario clica no botão 
    document.getElementById('letras').value = ''

}

