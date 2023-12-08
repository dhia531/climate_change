document.addEventListener('DOMContentLoaded', function () {
    // Exemple de graphique avec Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temperature', 'CO2 Levels', 'Sea Level Rise'],
            datasets: [{
                label: 'Global Climate Statistics',
                data: [39.5, 300, 52.5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // ... Votre autre
    // Ajout d'une fonction pour masquer et afficher le contenu des articles
    $('.article').on('click', function () {
        $(this).find('.article-content').toggle();
    });
});