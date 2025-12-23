// Array com as imagens da forca
let imagens = ["parte2.png", "parte3.png", "parte4.png", "parte5.png", "parte6.png", "parte7.png", "parte8.png"]

// Palavra escolhida!
let palavra = ['J','A','V','A','S','C','R','I','P','T']


// Inidice para percorrer 
indice = 0

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


    // Para não repetir as letras
    r.innerHTML = ''

    // Essa condição é para caso o usuario digitar mais do que 1 letra
    if (input.length > 1) {
        alert('Escreva uma letra por vez!')
    }

    // lETRA 'J'
    // Verificando se tem a letra J
    if (input == 'J') {
        letraJ.innerText = 'J'
    }

    // lETRA 'A'
    if (input == 'A') {
        letraAum.innerHTML = 'A'
        letraAdois.innerHTML = 'A'
    }
    

    // lETRA 'V'
    if (input == 'V') {
        letraV.innerText = 'V'
    }

    // lETRA 'S'
    if (input == 'S') {
        letraS.innerText = 'S'
    }

    // lETRA 'C'
     if (input == 'C') {
        letraC.innerText = 'C'
    }

    // lETRA 'R'
     if (input == 'R') {
        letraR.innerText = 'R'
    }

    // lETRA 'I'
     if (input == 'I') {
        letraI.innerText = 'I'
    }

    // lETRA 'P'
     if (input == 'P') {
        letraP.innerText = 'P'
    }

    // lETRA 'T'
     if (input == 'T') {
        letraT.innerText = 'T'
    }

    // Pegando o valor digitado no input colocando no array e mostrando na tela
    letraDigitada.push(input)

    // Mostrando as letras digitadas na tela 
    r.innerText += (letraDigitada)

    //###########################################
    //Agora é se o usuario acertou
    //###########################################
    
    const ganhou = palavra.every(letra => letraDigitada.includes(letra))

    if (ganhou) {
    alert('Parabéns, você acertou a palavra!')
    }


    
    //###########################################
    //Agora é se o usuario errou
    //###########################################

    if (!palavra.includes(input)) {
    img.src = imagens[indice]
    indice++
}




    // POR UMA CONDIÇÃO SÓ PARA O ERRO, AI EU COLOCO O INDICE E A CADA ERRO ELE PERCORRE 1 ITEM DO ARRAY É COMO SE FOSSE UM BOTAO PASSANDO A IMAGENS PARA FRENTE

    // Limpa os campos depois que o usuario clica no botão 
    document.getElementById('letras').value = ''

}

