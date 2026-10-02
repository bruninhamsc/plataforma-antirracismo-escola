document.addEventListener('DOMContentLoaded', function() {
    const isAnonymousCheckbox = document.getElementById('isAnonymous');
    const nameContainer = document.getElementById('nameContainer');
    const studentInput = document.getElementById('studentName');
    const complaintForm = document.getElementById('complaintForm');

    // Alterna exibição do campo de nome
    if (isAnonymousCheckbox) {
        isAnonymousCheckbox.addEventListener('change', function() {
            if (this.checked) {
                nameContainer.style.display = 'none';
                studentInput.value = '';
            } else {
                nameContainer.style.display = 'block';
            }
        });
    }

    // Submissão do formulário
    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const isAnon = isAnonymousCheckbox.checked;
            const name = isAnon ? "Anônimo" : (studentInput.value.trim() || "Não informado");
            const type = document.getElementById('incidentType').value;
            const description = document.getElementById('description').value;
            const protocol = 'DEN-' + Math.floor(100000 + Math.random() * 900000);

            const newComplaint = {
                protocol: protocol,
                name: name,
                type: type,
                description: description,
                date: new Date().toLocaleString('pt-BR'),
                status: 'Pendente'
            };

            // Salva os dados no LocalStorage
            let storage = JSON.parse(localStorage.getItem('denuncias_escola')) || [];
            storage.push(newComplaint);
            localStorage.setItem('denuncias_escola', JSON.stringify(storage));

            // Exibe o protocolo e limpa o formulário
            document.getElementById('protocolNumber').innerText = protocol;
            document.getElementById('successMessage').style.display = 'block';
            
            complaintForm.reset();
            nameContainer.style.display = 'block';
        });
    }
});
