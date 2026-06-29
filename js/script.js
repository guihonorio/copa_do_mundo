window.alert("Bem-vindo ao portal da Seleção Cabo-Verdiana de Futebol!");

function mudar_cor() {
    document.querySelector(".title").style.color = "#a08804";
}

function retornar_cor() {
    document.querySelector(".title").style.color = "#003594";
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