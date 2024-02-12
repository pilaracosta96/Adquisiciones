export interface IBibliografia {
    id:              number;
    titulo:          string;
    nombreAutor:     string;
    apellidoAutor:   string;
    anioPublicacion: string;
    editorial:       Editorial;
    isbn:            number;
    issn:            number;
    monto:           number;
    eliminada:       boolean;
    tipoMaterial:    TipoMaterial;
    isSelected:      boolean;
}

export interface Editorial {
    id:              number;
    nombreEditorial: string;
}

export interface TipoMaterial {
    id:                 number;
    nombreTipoMaterial: string;
}
