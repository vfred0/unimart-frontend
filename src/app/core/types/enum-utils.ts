export namespace EnumUtils {
    export function getLength<T extends object>(enumeration: T): number {
        return Object.keys(enumeration).length / 2;
    }

    export function getAllValues<T extends object, K extends keyof T>(enumeration: T): T[K][] {
        return Object.values(enumeration).filter(value => typeof value === 'string') as T[K][];
    }

    export function getAllKeys<T extends object, K extends keyof T>(enumeration: T): K[] {
        return Object.keys(enumeration).filter(key => typeof enumeration[key as K] === 'string') as K[];
    }

    export function containsKey<T extends object, K extends keyof T>(enumeration: T, key: K): boolean {
        return key in enumeration;
    }

    export function containsValue<T extends object, K extends keyof T>(enumeration: T, value: string): boolean {
        return EnumUtils.getAllValues(enumeration).includes(value as T[K]);
    }
}
