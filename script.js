// Variável para armazenar o nome do capítulo
const nomeCapitulo = document.getElementById("capitulo");

// Variável para armazenar o botao de play
const botaoPlayPause = document.getElementById("play-pause");

// Variável que armazenará o botão de avançar para o próximo capítulo
const botaoProximoCapitulo = document.getElementById("proximo");

// Variável que armazenará o botão de retrocedor para o capítulo anterior
const botaoCapituloAnterior = document.getElementById("anterior");

// Variável para armazenar o audio
const audio = document.getElementById("audio-capitulo");

// Variável para armazenar a quantidade de capítulos
const quantidadeCapitulos = 30;

// Variável indicando que a faixa não está sendo tocada
let taTocando = false;

// Variável para armazenar o capítulo
let capitulo = 1;


// Função chamada para tocar o audio
function tocarFaixa() {
    // Remove a classe "bi-play-circle" do botão, caso esteja presente
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    // Adiciona a classe "bi-pause-circle" ao botão, indicando visualmente que a faixa está sendo reproduzida e agora o botão representa uma opção de pausa
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    
    audio.play();

    // Função tocarFaixa = taTocando
    taTocando = true;
}

// Funçao chamada para pausar o audio
function pausarFaixa() {
    audio.pause();
    // Adiciona a classe "bi-play-circle" do botão, caso esteja presente
    botaoPlayPause.classList.add("bi-play-circle-fill");
    // Remove a classe "bi-pause-circle" ao botão, indicando visualmente que a faixa está sendo pausada e agora o botão representa uma opção de reprodução
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    
    audio.pause();

    // Função pausarFaixa = não taTocando
    taTocando = false;
}

// Função chamada para tocar ou pausar o audio
function tocarOuPausarFaixa() {
    // Se está tocando, é pausado
    if (taTocando === true) { 
        pausarFaixa(); 
    } 
    // Se não está tocando, toque
    else { 
        tocarFaixa();
    }
}


// Evento de quando clicar no botão de play, a função tocarFaixa é executada
botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);

// Evento de quando clicar no botão de proximo capitulo, a função proximoCapitulo é executada
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);

// Evento de quando clicar no botão de retroceder, a função capituloAnterior é executada
botaoCapituloAnterior.addEventListener("click", capituloAnterior);

// Evento para quando a reprodução do áudio atual chegar ao fim, a função proximoCapitulo é executada
audio.addEventListener("ended", proximoCapitulo);


// Se a quantidade de capítulos for menor que o capítulo atual = pula para o próximo capítulo e o reproduz
function proximoCapitulo() {
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    }
// Se não, volta para o primeiro capítulo e o reproduz
    else {
        capitulo = 1
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

// Função chamada para ir para o capitulo anterior quando clicar no botão
function capituloAnterior() {
    if (capitulo === 1) {
    capitulo = 1;
    }
    else {
        capitulo -= 1
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}