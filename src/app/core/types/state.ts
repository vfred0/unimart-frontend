import {EnumUtils} from "@core/types/enum-utils";

export enum State {
    New = 'Nuevo',
    Preowned = 'Seminuevo',
    Used = 'Usado',
    LowQuality = 'Baja calidad'
}

export namespace State {
//     I want next list:
//     Ordernar por estado: nuevo
    export function getAllValues(): Array<string> {
        return EnumUtils.getAllValues(State).map((value) => "Ordenar por estado: " + value);
    }
}