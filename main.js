const imagensAnimes = document.querySelectorAll('.imagens-anime');
const videosAnimes = document.querySelectorAll('.videos');
const containerImagens = document.querySelector('.containerImagens');
const descricaoAnimes = document.querySelectorAll('.descricao');
let indice = 0;

//função responsável pelo carrossel
function carrossel(){

    indice++;

    if (indice > imagensAnimes.length - 1){
        indice = 0;
    }
    
    containerImagens.style.transform = `translateX(${-indice * 560}px)`;
}

//função que determina um intervalo para a execução da função 'carrossel'
setInterval(carrossel, 2500);


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

