const botaoAlterarTema = document.getElementById("butao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-butao")

botaoAlterarTema.addEventListener("click", () =>{
    const modoEscuroEstaAtivado = body.classList. contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivado) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});