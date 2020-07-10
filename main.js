let name = document.querySelector("#name");
let job = document.querySelector("#job");
let form = document.querySelector("#form");

// console.log(name, job);

/*  
    Ao pressionar o botão submit do formulário a página automaticamente é recarregada
    É necessário evitar essa ação padrão
    O addEventiListener registra um evento -> recebe dois parâmetros (evento e função)
    A função fará com que ao submeter os dados preenchidos evite o padrão que é
    recarregar a página
*/

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let dados = {
        name: name.value,
        job: job.value,
    };

    /*
                  enviar dados para o servidor
                  fetch recebe como parâmetro o link onde será feita a requisição
                  e também como segundo parâmetro uma objeto de dois índices: method e body          
              */

    fetch("https://reqres.in/api/users", {
            method: "POST",
            body: JSON.stringify(dados),
        })
        .then(function(response) {
            // o retorno do response precisa ser transformado em json
            // para isso o objeto precisa ser mapeado
            return response.json();
        })
        .then(function(response) {
            //agora a resposta já foi tratada como JSON e será exibida neste formato
            alert("Cadastro realizado com sucesso!");
            console.log(response);
        });
});