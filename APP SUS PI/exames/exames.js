document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exame-form');
    const examesList = document.getElementById('exames-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const exame = document.getElementById('exame').value;
        const data = document.getElementById('data').value;
        const resultado = document.getElementById('resultado').value;

        if (exame && data && resultado) {
            const newRow = document.createElement('tr');

            const exameCell = document.createElement('td');
            exameCell.textContent = exame;
            newRow.appendChild(exameCell);

            const dataCell = document.createElement('td');
            dataCell.textContent = data;
            newRow.appendChild(dataCell);

            const resultadoCell = document.createElement('td');
            resultadoCell.textContent = resultado;
            newRow.appendChild(resultadoCell);

            examesList.appendChild(newRow);

            // Limpar o formulário
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
