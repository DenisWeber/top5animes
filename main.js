const imagensAnimes = document.querySelectorAll('.imagens-anime');
const videosAnimes = document.querySelectorAll('.videos');
const containerImagens = document.querySelector('.containerImagens');
const descricaoAnimes = document.querySelectorAll('.descricao');
const botaoVoltar = document.querySelector('.voltar');
const botaoAvancar = document.querySelector('.avancar');
let indice = 0;
let intervalo = setInterval(carrossel, 2500);

//função responsável pelo carrossel
function carrossel(){

    indice++;

    if (indice > imagensAnimes.length - 1){
        indice = 0;
    }

    containerImagens.style.transform = `translateX(${-indice * 560}px)`;  
}

//função que determina um intervalo para a execução da função 'carrossel'

function resetarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(carrossel, 2500);
}

function voltarSlide() {
    if (indice > 0 && indice <= imagensAnimes.length - 1){
        indice--;
        containerImagens.style.transform = `translateX(${-indice * 560}px)`;
    }
    else {
        containerImagens.style.transform = `translateX(${-(imagensAnimes.length - 1) * 560}px)`;
        indice = imagensAnimes.length - 1;
    }

}
function proximoSlide() {
    if (indice < imagensAnimes.length - 1){
        indice++;
        }
    else {
            indice = 0;
        }

    containerImagens.style.transform = `translateX(${-indice * 560}px)`;    
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

botaoAvancar.addEventListener('click', function(){
    resetarIntervalo();
    proximoSlide();
})
botaoVoltar.addEventListener('click', function(){
    resetarIntervalo();
    voltarSlide();
})