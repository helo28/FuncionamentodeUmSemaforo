let milisegundos = 0;

window.onload = function() { // FUNÇÃO ANONIMA ELA EXECUTA UMA ÚNICA VEZ
    // ONLOAD SIGNIFICA QUE ELA FUNCIONA APENAS QUANDOA PESSOA ESTÁ NA TELA DELA

    intervalo = setInterval(iniciarContagem, 100) //100 É O TEMPO TOTAL DE CONTAGEM EM MILISEGUNDOS
}

    function iniciarContagem() {
        milisegundos++ // ACRESCENTA UM VALOR A VÁRIAVEL DE LÁ DE CIMA

        if(milisegundos ==30) { // QUANDO ESSA CONTAGEM DE 100 CHEGA AO 30 ELE TROCA PARA VERDE
           document.querySelector('#status').src = "img/farolVerde.jpg";
        }

        if(milisegundos === 40){ // QUANDO ESSA CONTAGEM DE 100 CHEGA AO 40 ELE TROCA PARA AMARELO
            document.querySelector('#status').src = "img/farolAmarelo.jpg";
        }

        if(milisegundos === 50){ // QUANDO ESSA CONTAGEM DE 100 CHEGA AO 50 ELE TROCA PARA VERMELHO
            document.querySelector('#status').src = "img/farolVermelho.jpg";
            milisegundos=0; // REINICIA A CONTAGEM
        }
}
