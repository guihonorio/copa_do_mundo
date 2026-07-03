function boasVindas(){
    carregarTema();
    alert("Bem-vindo ao portal da Seleção Cabo-Verdiana de Futebol!");
}

function mudar_cor() {
    document.querySelector(".title").style.setProperty("color", "#a08804", "important");
}

function retornar_cor() {
    document.querySelector(".title").style.removeProperty("color");
}

function mensagem() {
    alert("Federação Cabo-Verdiana de Futebol\n\n10 Ilhas. 1 Nação. Um Grande Sonho!\n\n Vai Tubarões Azuis! 🦈");
}

function nova_curiosidade() {
    document.getElementById("curiosidade").innerText =
    "A seleção de Cabo Verde fez história na Copa do Mundo de 2026 ao avançar para o mata-mata logo em sua primeira participação em Mundiais. A equipe garantiu a classificação ao terminar em segundo lugar no Grupo H e terá a Argentina como adversária na próxima fase.";
}

function trocar_imagem() {
    let foto = document.getElementById("foto-oficial");
    if (foto.src.includes("2026-06-15t160135z-603117079-up1em6f18il2g-rtrmadp-3-soccer-worldcup-esp-cpv.avif")) {
        foto.src = "./assets/imagens/2026-06-27t021418z-675805786-up1em6r067ss6-rtrmadp-3-soccer-worldcup-cpv-sau.avif";
    } else {
        foto.src = "./assets/imagens/2026-06-15t160135z-603117079-up1em6f18il2g-rtrmadp-3-soccer-worldcup-esp-cpv.avif";
    }
}

function aumentar_imagem() {
    document.getElementById("foto-oficial").style.transform = "scale(1.2)";
}

function diminuir_imagem() {
    document.getElementById("foto-oficial").style.transform = "scale(1)";
}

// Novas funções para a imagem dos convocados
function trocar_imagem_convocados() {
    let foto = document.getElementById("foto-convocados");
    if (foto.src.includes("convocados.jpeg")) {
        foto.src = "./assets/imagens/convocados_praia.jpeg";
    } else {
        foto.src = "./assets/imagens/convocados.jpeg";
    }
}

function aumentar_imagem_convocados() {
    document.getElementById("foto-convocados").style.transform = "scale(1.2)";
}

function diminuir_imagem_convocados() {
    document.getElementById("foto-convocados").style.transform = "scale(1)";
}

//alterar cor (tabela)
function mudar_cor1() {
    const brasil = document.getElementById("brasil");
    brasil.style.color = "#23c145";
    brasil.style.fontWeight = "bold";
}
function retornar_cor1() {
    const brasil = document.getElementById("brasil");
    brasil.style.color = "";
    brasil.style.fontWeight = "";
}

function mudar_cor2() {
    const escocia = document.getElementById("escocia");
    escocia.style.color = "#23c145";
    escocia.style.fontWeight = "bold";
}
function retornar_cor2() {
    const escocia = document.getElementById("escocia");
    escocia.style.color = "";
    escocia.style.fontWeight = "";
}

function mudar_cor3() {
    const marrocos = document.getElementById("marrocos");
    marrocos.style.color = "#23c145";
    marrocos.style.fontWeight = "bold";
}
function retornar_cor3() {
    const marrocos = document.getElementById("marrocos");
    marrocos.style.color = "";
    marrocos.style.fontWeight = "";
}

function mudar_cor4() {
    const haiti = document.getElementById("haiti");
    haiti.style.color = "#e81111";
    haiti.style.textDecoration = "line-through";
}
function retornar_cor4() {
    const haiti = document.getElementById("haiti");
    haiti.style.color = "";
    haiti.style.textDecoration = "";
}

//resultado
function getInput() {
    return {
        nome: document.getElementById("nome"),
        data_nascimento: document.getElementById("data_nascimento"),
        email: document.getElementById("email"),
        pais: document.getElementById("select_pais"),
        jogador_favorito: document.getElementById("select_jogador")
    }
}

function getValores({ nome, data_nascimento, email, pais, jogador_favorito }) {
    return {
        nome: nome.value.trim(),
        data_nascimento: data_nascimento.value.trim(),
        email: email.value.trim(),
        pais: pais.value.trim(),
        jogador_favorito: jogador_favorito.value.trim()
    };
}

document.addEventListener('DOMContentLoaded',function(){
    const botaoEnviar = document.getElementById("enviar")
    if(!botaoEnviar){
        return;
    }

botaoEnviar.addEventListener('click',function(event){
    event.preventDefault ();
    const Inputs = getInput();
    const dados = getValores(Inputs);

    console.log("Inputs:", Inputs)
    console.log("dados:", dados)
    
   window.location.href = `./resultado.html?nome=${encodeURIComponent(dados.nome)}&data_nascimento=${encodeURIComponent(dados.data_nascimento)}&email=${encodeURIComponent(dados.email)}&pais=${encodeURIComponent(dados.pais)}&jogador_favorito=${encodeURIComponent(dados.jogador_favorito)}`;
    });
});

function mostrarResultado() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    const data_nascimento = params.get("data_nascimento");
    const email = params.get("email");
    const pais = params.get("pais");
    const jogador_favorito = params.get("jogador_favorito");

    const hoje = new Date();
    const nascimento = new Date(data_nascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    let categoria = "";
    if (idade <= 16) {
        categoria = "Torcedor Mirim";
    } else if (idade <= 30) {
        categoria = "Torcedor Novato";
    } else {
        categoria = "Torcedor Experiente";
    }

    const resultadoDiv = document.getElementById("exibir_resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Data de Nascimento:</strong> ${data_nascimento}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Jogador Favorito:</strong> ${jogador_favorito}</p>
    `;
}

//Cadastro
function campoSelecionado() {
    document.getElementById("nome").style.backgroundColor = "#fff9c4";
    document.getElementById("nome").style.color = "#222";
}

function campoNormal() {
    document.getElementById("nome").style.backgroundColor = "";
    document.getElementById("nome").style.fontWeight = "";
    document.getElementById("nome").style.color = "";
}

function digitandoNome() {
    document.getElementById("nome").style.fontWeight = "bold";
}

function paisAlterado() {
    document.getElementById("select_pais").style.backgroundColor = "#d4edda";
    document.getElementById("select_pais").style.color = "#222";
}

//Tema escuro
function alternarTema() {
    document.body.classList.toggle("dark-mode");
    const botao = document.getElementById("tema");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "escuro");
        if (botao) {
            botao.innerText = "☀️ Tema Claro";
        }
    } else {
        localStorage.setItem("tema", "claro");
        if (botao) {
            botao.innerText = "🌙 Tema Escuro";
        }
    }
}

function carregarTema() {
    const tema = localStorage.getItem("tema");
    const botao = document.getElementById("tema");

    if (tema === "escuro") {
        document.body.classList.add("dark-mode");
        if (botao) {
            botao.innerText = "☀️ Tema Claro";
        }
    } else {
        document.body.classList.remove("dark-mode");
        if (botao) {
            botao.innerText = "🌙 Tema Escuro";
        }
    }
}

