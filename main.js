import { dataSeries } from "./data.js";
const seriesTbody = document.getElementById('series');
function crearTabla(series) {
    console.log('Cargando series...');
    series.forEach((serie) => {
        const elemento = document.createElement('tr');
        elemento.innerHTML = `<td>${serie.numero}</td>
                               <td>${serie.nombre}</td>
                               <td>${serie.canal}</td>
                               <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(elemento);
    });
}
function promTemporadas(series) {
    const totalPrices = series.reduce((total, serie) => total + serie.temporadas, 0);
    return totalPrices / series.length;
}
crearTabla(data_js_1.dataSeries);
const avgSpan = document.getElementById('temporadas-avg');
avgSpan.innerHTML = `${promTemporadas(data_js_1.dataSeries).toFixed(2)}`;
