const imagensAnimes = document.querySelectorAll('.imagens-anime');

function exibirInformacoes(nomeAnime){
    document.querySelector(`.sobre-${nomeAnime}`).removeAttribute('hidden');
    document.querySelector(`.video-${nomeAnime}`).removeAttribute('hidden');
}

function ocultarInformacoes(nomeAnime){
    document.querySelector(`.sobre-${nomeAnime}`).setAttribute('hidden', 'hidden');
    document.querySelector(`.video-${nomeAnime}`).setAttribute('hidden', 'hidden');
}

for (let i = 0; i < imagensAnimes.length; i++){
    const anime = imagensAnimes[i];
    let ativo = 0;

    anime.addEventListener('click', function(){
        if (ativo == 0){
        exibirInformacoes(anime.classList[1]);
        ativo++;
        }
        else {
            ocultarInformacoes(anime.classList[1]);
            ativo--;
        }
    })
}

