document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('consulta-form');
    const consultasList = document.getElementById('consultas-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const local = document.getElementById('local').value;
        const medico = document.getElementById('medico').value;

        if (data && hora && local && medico) {
            const newRow = document.createElement('tr');

            const dataCell = document.createElement('td');
            dataCell.textContent = data;
            newRow.appendChild(dataCell);

            const horaCell = document.createElement('td');
            horaCell.textContent = hora;
            newRow.appendChild(horaCell);

            const localCell = document.createElement('td');
            localCell.textContent = local;
            newRow.appendChild(localCell);

            const medicoCell = document.createElement('td');
            medicoCell.textContent = medico;
            newRow.appendChild(medicoCell);

            consultasList.appendChild(newRow);

            // Limpar o formulário
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
