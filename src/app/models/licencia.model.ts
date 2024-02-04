export interface ILicencia {
    id:                number;
    nombre:            string;
    anio:              number;
    fechaOtorgamiento: number;
    fechaVencimiento:  number;
    fabricante:        Fabricante;
    numeroRelease:     number;
    version:           number;
    monto:             number;
    eliminada:         boolean;
}

export interface Fabricante {
    id:               number;
    nombreFabricante: string;
}
