export interface IServicio {
    id:           number;
    fecha:        string;
    monto:        number;
    tipoServicio: TipoServicio;
    eliminada:    boolean;
    isSelected:   boolean;
}

export interface TipoServicio {
    id:                 number;
    nombreTipoServicio: string;
}
