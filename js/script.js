//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth"
        }
    )
}

//Validação de Login
function login() {
    const loged = false;
    const user = document.getElementById("login-usuario").value;
    const password = document.getElementById("login-senha").value;

    if (user == 'admin' && password == '123456') {
        window.location = "index.html";
        loged = true
    }

    if (loged == false) {
        alert("Acesso Negado. Usuário ou senha incorretos");
    }
}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro com sucesso");
    window.location.href = "index.html";
}

//Ativar botão de voltar da seção de cadastro

function voltarLogin() {
    window.location.href = "login.html";
}


