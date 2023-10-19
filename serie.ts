export class Serie{
    numero: number;
    nombre: String;
    canal: String;
    temporadas: number;
    descripcion: String
    pagina: String;
    imagen: String;

    constructor(numero: number, nombre: String, canal: String, temporadas: number, descripcion: String, pagina: String, imagen: String){
        this.numero = numero;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.pagina = pagina;
        this.imagen = imagen;

    }

}