import {StateObjectsCache} from "./StateObjectsCache";

//TODO use map from some lib
interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value?: V): Map<K, V>;
    size: number;
}

export class MapCache implements StateObjectsCache{
    constructor(private map: Map<any, any> | WeakMap<any, any>) {
    }

    saveObject(keyObject: any, valueObject: any) {
        this.map.set(keyObject, valueObject);
    }

    hasObject(keyObject: any): boolean {
        return this.map.has(keyObject);
    }

    getValue(keyObject: any): any {
        return this.map.get(keyObject);
    }

    deleteObject(keyObject: any) {
        this.map.delete(keyObject);
    }
}