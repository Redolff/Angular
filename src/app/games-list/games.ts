export interface Game {
    nombre: string;
    categoria: string;
    precio: number;
    stock: number;
    imagen: string;
    oferta: boolean;
    cantidad: number;
};

export interface newGame{
    imagen: string;
    nombre: string;
    descripcion: string;
    fecha: string;
    boton: string;
}