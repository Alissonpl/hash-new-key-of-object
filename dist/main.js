"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashModule_1 = require("./hash/hashModule");
class Main {
    execute() {
        const hashModule = new hashModule_1.default();
        const hash = hashModule.getHash();
        hash.setKeyOne(2);
        hash.setValueOne({ 11: "aaaaaaaaa" });
        hash.converterToHashOne();
        console.log(hash.getHashOne());
        hash.setKeyList(["aaa-11-11-1", "aaqq-11-11-22"]);
        hash.setValueList([{ 11: "aaaaaaaaa" }, 1211211]);
        hash.converterToHashList();
        console.log(hash.getHashList());
    }
}
const { execute } = new Main();
execute();
//# sourceMappingURL=main.js.map