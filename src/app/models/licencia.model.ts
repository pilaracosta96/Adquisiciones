export interface ILicencia {
    id:                number;
    nombre:            string;
    anio:              string;
    fechaOtorgamiento: string;
    fechaVencimiento:  string;
    fabricante:        Fabricante;
    numeroRelease:     string;
    version:           string;
    monto:             number;
    numeroSerie:       string;
    eliminada:         boolean;
    isSelected:        boolean;
}

export interface Fabricante {
    id:               number;
    nombreFabricante: string;
}
