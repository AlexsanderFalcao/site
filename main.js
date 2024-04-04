
$(document).ready(function(){
    $('#Carrossel-imagens').slick();
});

$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
});

$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '( ) _____-____'
    });
});

$('form').validate({
    rules:{
        Nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true
        }
    },
    messages: {
        Nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
    }
});

setInterval(function() {
    $('#Carrossel-imagens').slick('slickNext');
}, 2000);


$('.lista-veiculos button').click(function(){
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#VeiculoDeInteresse').val(nomeVeiculo);

    $('html, body').animate({
        scrollTop: destino.offset().top
    }, 1000);
});
