import { Serie } from './serie.js';
import { dataSeries } from './data.js';


const seriesTbody: HTMLElement = document.getElementById('series')!;

function crearTabla(series: Serie[]): void {
    
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

function promTemporadas(series: Serie[]): number {
    const totalPrices: number = series.reduce((total, serie) => total + serie.temporadas, 0);
    return totalPrices / series.length;
}

crearTabla(dataSeries);

const avgSpan: HTMLElement = document.getElementById('temporadas-avg')!;
avgSpan.innerHTML = `${promTemporadas(dataSeries).toFixed(2)}`;
