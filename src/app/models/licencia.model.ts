export interface ILicencia {
    id:                number;
    nombre:            string;
    anio:              string;
    fechaOtorgamiento: string;
    fechaVencimiento:  string;
    fabricante:        Fabricante;
    numeroRelease:     null | string;
    version:           null | string;
    monto:             number;
    eliminada:         boolean;
    isSelected:        boolean;
}

export interface Fabricante {
    id:               number;
    nombreFabricante: string;
}
