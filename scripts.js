//Variaveis
let totalPontos = 0;
    document.getElementById('resposta1').addEventListener('keyup', (ev) => {
        const input = ev.target;
        input.value = input.value.toUpperCase();
    });
    document.getElementById('resposta2').addEventListener('keyup', (ev) => {
        const input = ev.target;
        input.value = input.value.toUpperCase();
    });
    document.getElementById('resposta3').addEventListener('keyup', (ev) => {
        const input = ev.target;
        input.value = input.value.toUpperCase();
    });
    document.getElementById('resposta4').addEventListener('keyup', (ev) => {
    const input = ev.target;
    input.value = input.value.toUpperCase();
    document.getElementById('resposta5').addEventListener('keyup', (ev) => {
        const input = ev.target;
        input.value = input.value.toUpperCase();
    });
});

//Primeira pergunta
let respostaCorreta1= 'C';
let respostaInformada1 = document.getElementById('resposta1');

function botaoClicado1() {
    if (respostaCorreta1 == respostaInformada1.value) {
        alert('Resposta Correta. 10 pontos');
        totalPontos=10;
        console.log(totalPontos);
    } else {
        alert('Que pena, você errou.');
    }
}
let botaoConfira1 = document.getElementById('conferir1');
	botaoConfira1.onclick = botaoClicado1;

//Segunda pergunta
let respostaCorreta2= 'D';
let respostaInformada2 = document.getElementById('resposta2');

function botaoClicado2() {
    if (respostaCorreta2 == respostaInformada2.value) {
        alert('Resposta Correta. 10 pontos');
        totalPontos+=10;
        console.log(totalPontos);
    } else {
        alert('Que pena, você errou.');
    }
}
let botaoConfira2 = document.getElementById('conferir2');
	botaoConfira2.onclick = botaoClicado2;
//Terceira pergunta
let respostaCorreta3= 'A';
let respostaInformada3 = document.getElementById('resposta3');

function botaoClicado3() {
    if (respostaCorreta3 == respostaInformada3.value) {
        alert('Resposta Correta. 10 pontos');
        totalPontos+=10;
        console.log(totalPontos);
    } else {
        alert('Que pena, você errou.');
    }
}
let botaoConfira3 = document.getElementById('conferir3');
	botaoConfira3.onclick = botaoClicado3;

//Quarta pergunta
let respostaCorreta4= 'TEMPO';
let respostaInformada4 = document.getElementById('resposta4');

function botaoClicado4() {
    if (respostaCorreta4 == respostaInformada4.value) {
        alert('Resposta Correta. 10 pontos');
        totalPontos+=10;
        console.log(totalPontos);
    } else {
        alert('Que pena, você errou.');
    }
}
let botaoConfira4 = document.getElementById('conferir4');
	botaoConfira4.onclick = botaoClicado4;

//Quinta pergunta
let respostaCorreta5= 'C';
let respostaInformada5 = document.getElementById('resposta5');

function botaoClicado5() {
    if (respostaCorreta5 == respostaInformada5.value) {
        alert('Resposta Correta. 10 pontos');
        totalPontos+=10;
        console.log(totalPontos);
    } else {
        alert('Que pena, você errou.');
    }
}
let botaoConfira5 = document.getElementById('conferir5');
	botaoConfira5.onclick = botaoClicado5;

//Conferir total de pontos

function botaoTotalPontos(){
    alert('Seu total de pontos foi: '+totalPontos);
}
let botaoConferirTotal= document.getElementById('btnConferirPontos');
    botaoConferirTotal.onclick =botaoTotalPontos;