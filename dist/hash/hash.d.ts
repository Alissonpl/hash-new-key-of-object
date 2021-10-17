import HashInterface from "../@types/hashInterface";
declare class Hash implements HashInterface {
    private keyOne;
    private keyList;
    private valueOne;
    private valueList;
    private hashList;
    private hashOne;
    setValueOne(valueOne: Array<string | Object | number> | string | number | Object): void;
    setValueList(valueList: Array<number | string | Object>): void;
    setKeyOne(keyOne: string | number): void;
    setKeyList(keyList: Array<number | string>): void;
    converterToHashList(): void;
    converterToHashOne(): void;
    getHashOne(): {
        [key: string]: Object | number | string;
    } | {
        [key: number]: Object | number | string;
    };
    getHashList(): Array<{
        [key: string]: Object | number | string;
    } | {
        [key: number]: Object | number | string;
    }>;
}
export default Hash;
