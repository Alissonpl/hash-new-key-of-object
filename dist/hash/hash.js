"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hash {
    setValueOne(valueOne) {
        this.valueOne = valueOne;
    }
    setValueList(valueList) {
        this.valueList = valueList;
    }
    setKeyOne(keyOne) {
        this.keyOne = keyOne;
    }
    setKeyList(keyList) {
        this.keyList = keyList;
    }
    converterToHashList() {
        this.hashList = [];
        for (let i = 0; i < this.keyList.length; i++) {
            let newObject2 = {};
            newObject2[this.keyList[i]] = this.valueList[i];
            this.hashList[i] = newObject2;
        }
    }
    converterToHashOne() {
        this.hashOne = {};
        this.hashOne[this.keyOne] = this.valueOne;
    }
    getHashOne() {
        return this.hashOne;
    }
    getHashList() {
        return this.hashList;
    }
}
exports.default = Hash;
//# sourceMappingURL=hash.js.map