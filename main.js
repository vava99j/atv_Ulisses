// Simula se o usuário está logado ou não
const usuarioLogado = true; // Troque para false para testar

// Se o usuário estiver logado, mostra o formulário de cadastro de pet
if (usuarioLogado) {
    document.getElementById('cadastrar-pet').style.display = 'block';
}

// Função para mostrar mais animais ao clicar no botão "Mostrar mais animais"
document.getElementById('mostrar-mais-animais').onclick = function() {
    // Exibe todos os elementos com a classe 'animal-extra'
    document.querySelectorAll('.animal-extra').forEach(function(div) {
        div.style.display = 'flex';
    });
    // Esconde o botão "Mostrar mais animais"
    this.style.display = 'none';
    // Mostra o botão "Mostrar menos"
    document.getElementById('mostrar-menos-animais').style.display = 'block';
};

// Função para mostrar menos animais ao clicar no botão "Mostrar menos"
document.getElementById('mostrar-menos-animais').onclick = function() {
    // Esconde todos os elementos com a classe 'animal-extra'
    document.querySelectorAll('.animal-extra').forEach(function(div) {
        div.style.display = 'none';
    });
    // Mostra o botão "Mostrar mais animais"
    document.getElementById('mostrar-mais-animais').style.display = 'block';
    // Esconde o botão "Mostrar menos"
    this.style.display = 'none';
};
