$(document).ready(function() {
    $('#form').submit(function(event) {
        // Récupérer les valeurs des champs
        const prenom = $('#prenom').val().trim();
        const num = $('#numero').val().trim();

        // Vérifier si les champs obligatoires sont remplis
        if (prenom === '' || num === '') {
            alert('Veuillez remplir tous les champs obligatoires.');
            event.preventDefault(); // Empêche la soumission
        }
    });
});