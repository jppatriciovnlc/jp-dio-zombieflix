


movies = [
    {
        id: 0,
        name: 'black summer',
        description: 'Nos primeiros dias de um sombrio apocalipse zumbi, estranhos se unem para sobreviver e voltar para aqueles que amam.',
        image: '../img/blacksummer-01.jpg',
        mini: '../img/mini0.jpg'
    },
    {
        id: 1,
        name: 'the walking dead',
        description: 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.',
        image: '../img/twd-01.jpg',
        mini: '../img/mini1.jpg'
    },
    {
        id: 2,
        name: 'army of the dead',
        description: 'Após um surto de zumbis em Las Vegas, nos Estados Unidos, um grupo de mercenários faz uma aposta final, aventurando-se na zona de quarentena para tentar realizar o maior assalto de todos os tempos.',
        image: '../img/armyofthedead-01.jpg',
        mini: '../img/mini2.jpg'
    },
    {
        id: 3,
        name: 'madrugada dos mortos',
        description: 'Após mais um dia de trabalho, tudo que Ana quer é tomar um banho ao lado do marido e dormir. Mas nas primeiras horas da manhã, ela é violentamente atacada por uma legião de mortos-vivos, e se descobre um pesadelo real: o mundo inteiro está tomado por zumbis. Em fuga desesperada, Ana se une a um pequeno grupo de sobreviventes, que se refugiam num shopping center enquanto o mundo lá fora se transforma literalmente no inferno.',
        image: '../img/madrugadadosmortos-01.jpg',
        mini: '../img/mini3.jpg'
    },   
    {
        id: 4,
        name: 'guerra mundial z',
        description: 'Um vírus letal se espalha rapidamente e transforma seres humanos em zumbis. O ex-agente da ONU Gerry Lane é chamado para investigar a epidemia que está acabando com a humanidade, iniciando uma verdadeira corrida contra o tempo.',
        image: '../img/guerramundialz-01.jpg',
        mini: '../img/mini4.jpg'
    },  
    {
        id: 5,
        name: 'zombieland',
        description: 'A população foi infectada com um vírus que faz com que as pessoas se transformem em zumbis. Poucos são os humanos não infectados, entre eles Columbus, que deseja voltar para sua cidade natal na esperança de encontrar seus pais ainda vivos. No caminho, Columbus encontra Tallahassee, que está indo para a Flórida para aniquilar zumbis, e pega carona. Ao parar em uma mercearia, a dupla encontra Wichita e Little Rock, que aparenta ter sido mordida por um zumbi, o que divide o grupo sobre o que fazer.',
        image: '../img/zombieland-01.jpg',
        mini: '../img/mini5.jpg'
    },  
    {
        id: 6,
        name: 'as strippers zumbi',
        description: 'No futuro, os Estados Unidos estão em guerra com várias nações. Para compensar a perda de grande número de homens, o governo começa a fazer experimentos para reativar o cérebro desses soldados mortos, formando um exército de mortos-vivos. Mas o vírus acaba se espalhando numa boate de striptease na pequena cidade de Sartre, Nebraska, transformando as strippers do local em zumbis.',
        image: '../img/asstripperszumbi-01.jpg',
        mini: '../img/mini6.jpg'
    },  
    {
        id: 7,
        name: 'z nation',
        description: 'Um vírus letal se espalha rapidamente e transforma seres humanos em zumbis. O ex-agente da ONU Gerry Lane é chamado para investigar a epidemia que está acabando com a humanidade, iniciando uma verdadeira corrida contra o tempo.',
        image: '../img/znation-01.jpg',
        mini: '../img/mini7.jpg'
    },  
    {
        id: 8,
        name: 'uma noite alucinante: a morte do demônio',
        description: 'Ashley e um grupo de amigos vão para uma casa na floresta para uma noite de diversão. Lá, encontram um velho livro que, quando lido em voz alta, desperta a morte. Os amigos acabam libertando uma corrente de demônios e agora terão que lutar por suas vidas ou acabarão como um deles.',
        image: '../img/umanoitealucinante-01.jpg',
        mini: '../img/mini8.jpg'
    },  
    {
        id: 9,
        name: 'uma noite alucinante 2',
        description: 'Ash (Bruce Campbell) leva sua namorada Linda (Denise Bixler) até uma casa abandonada, onde encontra uma fita de áudio abandonada por um professor. Ash coloca a fita para tocar, ouvindo citações do livro dos mortos. Os encantamentos despertam as forças do mal na floresta ao lado, que transformam Linda em um monstruoso Deadite. O objetivo é fazer o mesmo com Ash, mas ele recebe a ajuda da filha do professor, de um mecânico que trabalhava com ele e sua namorada.',
        image: '../img/umanoitealucinante2-01.jpg',
        mini: '../img/mini9.jpg'
    },  

]

actualMovieId = 1;

function assistir(){
    alert('Melhor tentar a Netflix')
}

function info(){
    alert('É legal. Confia!')
}

function mainMovie(id){
    document.getElementById("main-title").innerHTML = movies[id].name;
    document.getElementById("main-desc").innerHTML = movies[id].description;
    url = movies[id].image;
    document.getElementById("main").style.background = "linear-gradient(rgba(0,0,0,.10), rgba(0,0,0,.10)100%), url(" + url + ")" ;
    document.getElementById("main").style.backgroundSize = "cover";
}

function generateMinis(){
    console.log(movies.length)    
    var owl = $("#minis");
    for(let i = 0; i < movies.length; i++){
        src = movies[i].mini;
        item = '<div id="' + i + '" class="item" onclick="selectMovie(this.id)"> <img class="box-movie" src="' + src + '" alt="mini-1"> </div>';
        owl.append(item);
    }   

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    })
}

function selectMovie (movie){    
    actualMovieId = movie;
    mainMovie(parseInt(movie))
}