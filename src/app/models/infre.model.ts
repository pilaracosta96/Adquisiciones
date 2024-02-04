export interface IInfra {
    id:                 number;
    tipoEquipo:         TipoEquipo;
    fechaIncorporacion: number;
    monto:              number;
    descripcion:        null | string;
    numeroSerie:        number | null;
    eliminada:          boolean;
}

export interface TipoEquipo {
    id:               number;
    nombreTipoEquipo: string;
}
