function pesquisar() {
    // Obtém a referência à seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (campoPesquisa == "") {
        section.innerHTML = `
            <div class="item-resultado">
                <p>Informe algum valor para pesquisar!</p> 
            </div>
        `;
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma variável para armazenar o HTML dos resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    // Itera sobre cada elemento 'dado' dentro do array 'dados' (que presumimos existir em outro lugar do código)
    dados.forEach(dado => {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.nome}</a> 
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta"><b>Ano:</b> ${dado.ano}</p>
                    <p class="descricao-meta"><b>Temporadas:</b> ${dado.temporadas}</p>
                    <a href=${dado.trailer} target="_blank">Trailer</a> 
                </div>
            `;
        }
    });

    if (!resultados) {
        resultados = `
            <div class="item-resultado">
                <p>Nada encontrado com para o valor pesquisado!</p> 
            </div>
        `;
    }

    // Define o conteúdo HTML da seção com os resultados da pesquisa gerados
    section.innerHTML = resultados;
}


