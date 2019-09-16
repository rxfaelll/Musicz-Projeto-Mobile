//Cria objetos HTML com as informação dos objetos JSON. mas como isso, Rafael? Calma lá, minha Beldade
for(let i=0; i<songsObj.length; i++){
    let musicBtn = document.createElement("div"); //Primeiro a gente cria a "gaiola" que vai representar o botão
    musicBtn.classList.add("music-btn"); //Depois, coloca uma classe nele, pra estilizar no css
    document.getElementById("containerPlaylist").appendChild(musicBtn); //Agora a gente seleciona o container que vai guardar os botões e coloca nosso botão dentro dele

    let songName = document.createElement("h2");//Agora é criar o H2 que vai ser o nome da música
    songName.innerHTML = songsObj[i]["name"];//Fazer o nosso H2 receber a informação do Objeto JSON
    musicBtn.appendChild(songName);//E pimba, colocar dele dentro da gaiolinha que foi criada lá em cima

    let authorName = document.createElement("h3");//E aqui é só repetir o processo pro H3 do artista
    authorName.innerHTML = songsObj[i]["author"];
    musicBtn.appendChild(authorName);

    let audioTag = document.createElement("audio");
    audioTag.setAttribute("id", "musica"+i)
    musicBtn.appendChild(audioTag)

    let audioUrl = document.createElement("source");
    audioUrl.setAttribute("src", songsObj[i]["url"])
    audioTag.appendChild(audioUrl);
}