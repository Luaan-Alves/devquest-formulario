let validacao = true;
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let telefoneRegex = /^[0-9]{10,11}$/;
let mensagem = document.getElementById("mensagem");



let avisos = document.querySelectorAll(".aviso");
avisos.forEach(aviso => {
    aviso.classList.remove("ativado");
})

nome.addEventListener("input", function(){
    if (nome.value.length > 0) {
        nome.style.border = "2px solid #00C22B";
        avisos[0].classList.remove("ativado");
    } else {
        nome.style.borderColor = "";
    }
})

email.addEventListener("input", function(){
    if (email.value.length > 0) {
        email.style.border = "2px solid #00C22B";
        avisos[1].classList.remove("ativado");
    } else {
        email.style.borderColor = "";
    }
})


telefone.addEventListener("input", function(){
    if (telefoneRegex.test(telefone.value)) {
        telefone.style.border = "2px solid #00C22B";
        avisos[2].classList.remove("ativado");
    } else {
        telefone.style.borderColor = "#F52E2E";
        avisos[2].classList.add("ativado");
    }
})

mensagem.addEventListener("input", function(){
    if (mensagem.value.length > 0) {
        mensagem.style.border = "2px solid #00C22B";
        avisos[3].classList.remove("ativado");
    } else {
        mensagem.style.borderColor = "";
    }
})

document.getElementById("formulario").addEventListener("submit", function(envioForm) {
    envioForm.preventDefault();

    validacaoNome();

    validacaoEmail();

    validacaoTelefone();

    validacaoMensagem();

    validacaoPreenchida();    
});

function validacaoPreenchida() {
    if (validacao) {
        alert("Parabéns! Formulário enviado com sucesso");
        nome.style.borderColor = "";
        email.style.borderColor = "";
        telefone.style.borderColor ="";
        mensagem.style.borderColor = "";
        formulario.reset();
        return;
    }
}

function validacaoMensagem() {
    
    if (mensagem.value.length < 15) {
        mensagem.style.border = "2px solid #F52E2E";
        avisos[3].classList.add("ativado");
        validacao = false;
        return;
    } else {
        avisos[3].classList.remove("ativado");
        mensagem.style.borderColor = " #00C22B";
    }
}

function validacaoTelefone() {

    if (!telefoneRegex.test(telefone.value)) {
        telefone.style.border = "2px solid #F52E2E";
        avisos[2].classList.add("ativado");
        validacao = false;
        return;
    } else {
        avisos[2].classList.remove("ativado");
        telefone.style.borderColor = " #00C22B";
        validacao = true;
    }
}

function validacaoEmail() {

    if (!email.value.includes("@")) {
        email.style.border = "2px solid #F52E2E";
        avisos[1].classList.add("ativado");
        validacao = false;
        return;
    } else {
        avisos[1].classList.remove("ativado");
        email.style.borderColor = "#00C22B";
        validacao = true;
    }
}

function validacaoNome() {

    if (nome.value.length < 3) {
        nome.style.border = "2px solid #F52E2E";
        avisos[0].classList.add("ativado");
        validacao = false;
        return;
    } else {
        nome.style.borderColor = "#00C22B";
        avisos[0].classList.remove("ativado");
        validacao = true;
    }
}