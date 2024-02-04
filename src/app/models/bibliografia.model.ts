export interface IBibliografia {
    id:              number;
    titulo:          string;
    nombreAutor:     string;
    apellidoAutor:   string;
    anioPublicacion: number;
    editorial:       Editorial;
    isbn:            number;
    issn:            number;
    monto:           number;
    eliminada:       boolean;
    tipoMaterial:    TipoMaterial;
}

export interface Editorial {
    id:              number;
    nombreEditorial: string;
}

export interface TipoMaterial {
    id:                 number;
    nombreTipoMaterial: string;
}
