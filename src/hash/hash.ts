import HashInterface from "../@types/hashInterface";

class Hash implements HashInterface {
  private keyOne: string | number;
  private keyList: Array<number | string>;
  private valueOne: Array<string | Object | number> | string | number | Object;
  private valueList: Array<number | string | Object>;

  private hashList: Array<
    | { [key: string]: Object | number | string }
    | { [key: number]: Object | number | string }
  >;
  private hashOne:
    | { [key: string]: Object | number | string }
    | { [key: number]: Object | number | string };

  public setValueOne(
    valueOne: Array<string | Object | number> | string | number | Object
  ): void {
    this.valueOne = valueOne;
  }

  public setValueList(valueList: Array<number | string | Object>): void {
    this.valueList = valueList;
  }

  public setKeyOne(keyOne: string | number): void {
    this.keyOne = keyOne;
  }

  public setKeyList(keyList: Array<number | string>): void {
    this.keyList = keyList;
  }

  public converterToHashList(): void {
    this.hashList = [];
    for (let i: number = 0; i < this.keyList.length; i++) {
      let newObject2 = {};
      newObject2[this.keyList[i]] = this.valueList[i];
      this.hashList[i] = newObject2;
    }
  }
  public converterToHashOne(): void {
    this.hashOne = {};
    this.hashOne[this.keyOne] = this.valueOne;
  }

  public getHashOne():
    | { [key: string]: Object | number | string }
    | { [key: number]: Object | number | string } {
    return this.hashOne;
  }

  public getHashList(): Array<
    | { [key: string]: Object | number | string }
    | { [key: number]: Object | number | string }
  > {
    return this.hashList;
  }
}

export default Hash;
