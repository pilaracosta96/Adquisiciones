export interface IInfra {
    id:                 number;
    tipoEquipo:         TipoEquipo;
    fechaIncorporacion: string;
    monto:              number;
    descripcion:        string;
    numeroSerie:        string;
    eliminada:          boolean;
    isSelected:         boolean;
}

export interface TipoEquipo {
    id:               number;
    nombreTipoEquipo: string;
    cantidad:         number;
    precioUnitario:   number;
}

