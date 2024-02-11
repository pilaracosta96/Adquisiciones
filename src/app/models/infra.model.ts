export interface IInfra {
    id:                 number | null;
    tipoEquipo:         TipoEquipo;
    fechaIncorporacion: number;
    monto:              number;
    descripcion:        string;
    numeroSerie:        number;
    eliminada:          boolean;
    isSelected:         boolean;
}

export interface TipoEquipo {
    id:               number;
    nombreTipoEquipo: string;
    cantidad:         number;
    precioUnitario:   number;
}
