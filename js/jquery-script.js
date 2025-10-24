//efeito de esconder formulário de cadastro

// Estrutura padrão para inicialização do JQuery

$(document).ready(function() {

    $("#btn-register").click(function() {

        $("#section-register").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#btn-register").hide();
    });

});