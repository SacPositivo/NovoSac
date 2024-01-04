document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let state = 0;

    button1.addEventListener("click", mudarpara1);
    button2.addEventListener("click", mudarpara2);

    function mudarpara1() {
        button2.style.backgroundColor = 'transparent';
        button1.style.backgroundColor = '#6c757d';
        state = 0;
    }

    function mudarpara2() {
        button1.style.backgroundColor = 'transparent';
        button2.style.backgroundColor = '#6c757d';
        state = 1;
    }

    let data = [
        //... (seu array de dados)
    ];

    document.getElementById('calculateButton').addEventListener('click', calcular);

    function calcular() {
        // Lógica de cálculo aqui
        // Atualize os resultados usando document.getElementById('firstResult').textContent = resultado;
    }

    // Função de seleção de input
    function selecionarInput(id) {
        let input = document.getElementById(id);
        if (input) {
            input.checked = true;
        }
    }

    // Função de seleção de input adicional
    function selecionarInputAdd(id) {
        let input = document.getElementById(id);

        if (input) {
            input.checked = !input.checked;
        }
    }
});
