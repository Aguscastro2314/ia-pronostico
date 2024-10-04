// Simulación de partidos próximos y predicciones
const pronosticos = [
    { partido: 'Barcelona vs Real Madrid', prediccion: 'Gana Barcelona', probabilidad: '60%' },
    { partido: 'Manchester City vs Liverpool', prediccion: 'Empate', probabilidad: '50%' },
    { partido: 'PSG vs Bayern Munich', prediccion: 'Gana Bayern Munich', probabilidad: '65%' },
];

// Llenado de la tabla con los pronósticos
const resultadosTabla = document.getElementById('resultados');

pronosticos.forEach((pronostico) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${pronostico.partido}</td>
        <td>${pronostico.prediccion}</td>
        <td>${pronostico.probabilidad}</td>
    `;
    resultadosTabla.appendChild(fila);
});