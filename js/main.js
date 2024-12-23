$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            textArea: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, digite um e-mail válido',
            telefone: 'Por favor, digite o número do seu telefone',
            textArea: 'Sua mensagem é requerida'
        },

        submitHandler: function (form) {
            alert("Sua mensagem foi enviada com sucesso!");
            form.reset();
        }
    })
})