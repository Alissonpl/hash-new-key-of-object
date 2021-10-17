import Hash from "./hash";

class HashModule {
  public getHash(): Hash {
    const hash = new Hash();
    return hash;
  }
}

export default HashModule;
