export interface IServicio {
    id:           number;
    fecha:        number;
    monto:        number;
    tipoServicio: TipoServicio;
    eliminada:    boolean;
}

export interface TipoServicio {
    id:                 number;
    nombreTipoServicio: string;
}
