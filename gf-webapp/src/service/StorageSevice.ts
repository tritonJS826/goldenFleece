interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export abstract class StorageService<T extends string> {

  private readonly storage!: IStorage;

  constructor(getStorage = (): IStorage => window.localStorage) {
    this.storage = getStorage();
  }

  protected get(key: T): string | null {
    return this.storage.getItem(key);
  }

  protected set(key: T, value: string): void {
    this.storage.setItem(key, value);
  }

}