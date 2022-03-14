const imagensAnimes = document.querySelectorAll('.imagens-anime');
const videosAnimes = document.querySelectorAll('.videos');
const containerImagens = document.querySelector('.containerImagens');
const descricaoAnimes = document.querySelectorAll('.descricao');
const botaoVoltar = document.querySelector('.voltar');
const botaoAvancar = document.querySelector('.avancar');
let larguraTela = window.innerWidth;

let indice = 0;
let intervalo = setInterval(carrossel, 2500);
  

//função responsável pelo carrossel
function carrossel(){

    indice++;

    if (indice > imagensAnimes.length - 1){
        indice = 0;
    }

    retornarCarrossel(larguraTela);
}

//retorna para a primeira imagem do carrossel
function retornarCarrossel(largura) {

    if (largura < 1366){
    
    containerImagens.style.transform = `translateX(${-indice * larguraTela}px)`; 
    }
    else {
    containerImagens.style.transform = `translateX(${-indice * 560}px)`;
    }
}

//retrocede uma imagem no carrossel
function voltarSlide() {
    if (indice > 0 && indice <= imagensAnimes.length - 1){
        indice--;
        retornarCarrossel(larguraTela);
    }
    else {
        containerImagens.style.transform = `translateX(${-(imagensAnimes.length - 1) * larguraTela}px)`;
        indice = imagensAnimes.length - 1;
    }

}

//avança uma imagem do carrossel
function proximoSlide() {
    if (indice < imagensAnimes.length - 1){
        indice++;
        }
    else {
        indice = 0;
        }

    retornarCarrossel(larguraTela);   
}

//zera o intervalo e depois indica que o intervalo volta a ter 2,5 segundos
function resetarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(carrossel, 2500);
}


//recebe como parametro o nome do anime que irá exibir o vídeo e a descrição
function exibirInformacoes(nomeAnime){
    document.querySelector(`.sobre-${nomeAnime}`).removeAttribute('hidden');
    document.querySelector(`.video-${nomeAnime}`).removeAttribute('hidden');
}

//oculta a descrição e vídeo de todos os animes
function ocultarInformacoes() {
    for (let i = 0; i < imagensAnimes.length; i++){
        descricaoAnimes[i].setAttribute('hidden', 'hidden');
        videosAnimes[i].setAttribute('hidden', 'hidden');
    }
}

//monitora o evento de click nas imagens e exibe suas informações na página
for (let i = 0; i < imagensAnimes.length; i++){

    const anime = imagensAnimes[i];

    anime.addEventListener('click', function(){
        ocultarInformacoes();
        exibirInformacoes(anime.classList[1]);
    })
}

//Recebem o evento de click e executa as funções
botaoAvancar.addEventListener('click', function(){
    resetarIntervalo();
    proximoSlide();
})
botaoVoltar.addEventListener('click', function(){
    resetarIntervalo();
    voltarSlide();
})

window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    larguraTela = window.innerWidth;
})