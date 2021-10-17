export default interface HashInTerface {
    setValueOne: (valueOne: Array<string | Object | number> | string | number | Object) => void;
    setValueList: (valueList: Array<number | string | Object>) => void;
    setKeyOne: (keyOne: string | number) => void;
    setKeyList: (keyList: Array<number | string>) => void;
    converterToHashList: () => void;
    getHashOne: () => {
        [key: string]: Object | number | string;
    } | {
        [key: number]: Object | number | string;
    };
    getHashList: () => Array<{
        [key: string]: Object | number | string;
    } | {
        [key: number]: Object | number | string;
    }>;
}
