import HashModule from "./hash/hashModule";

class Main {
  public execute(): void {
    const hashModule = new HashModule();
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
