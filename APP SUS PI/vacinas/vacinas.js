document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('vacina-form');
    const vacinasList = document.getElementById('vacinas-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const vacina = document.getElementById('vacina').value;
        const data = document.getElementById('data').value;
        const local = document.getElementById('local').value;

        if (vacina && data && local) {
            const newRow = document.createElement('tr');

            const vacinaCell = document.createElement('td');
            vacinaCell.textContent = vacina;
            newRow.appendChild(vacinaCell);

            const dataCell = document.createElement('td');
            dataCell.textContent = data;
            newRow.appendChild(dataCell);

            const localCell = document.createElement('td');
            localCell.textContent = local;
            newRow.appendChild(localCell);

            vacinasList.appendChild(newRow);

            // Limpar o formulário
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
