var palavraAleatoria= Math.floor(Math.random() * 100) +1;

var palpites = document.querySelector('.palpites');
var ultimaPalavra = document.querySelector('.ultimaPalavra');
var certoOuErrado = document.querySelector('.certoOuErrado');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalavra = document.querySelector('.campoPalavra');

var contagemPalavra = 1;
var botaoReinicio;

function conferirPalindromo() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalavra === 1) {
        palpites.textContent = 'Palavras anteriores: ';
    }

    if (palpiteUsuario === palavraAleatoria) {
        ultimaPalavra.textContent = 'Parabéns! Voce acertou!';
        ultimaPalavra.style.backgroundColor = 'green';
        certoOuErrado.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } else if(palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }

  function reiniciarJogo() {
    contagemPalpites = 1;
  
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
  
    ultimoResultado.style.backgroundColor = 'white';
  
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }
