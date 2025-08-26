document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputNome = document.getElementById("inNome");
  const mensagem = document.querySelector("h3");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); //evita o envio do formulário

    const nome = inputNome.value.trim();

    if (nome) {
      mensagem.textContent = `Olá, ${nome}!`;
    } else {
      mensagem.textContent = "Por favor, digite um nome.";
    }
  });
});
