interface IStorage<T> {
  getItem(key: T): T[keyof T] | null;
  setItem(key: T, value: T[keyof T]): void;
}

export abstract class StorageService<T> {

  private readonly storage!: IStorage<T>;

  constructor(getStorage = (): IStorage<T> => window.localStorage as unknown as IStorage<T>) {
    this.storage = getStorage();
  }

  protected get(key: T): T[keyof T] | null {
    return this.storage.getItem(key);
  }

  protected set(key: T, value: T[keyof T]): void {
    this.storage.setItem(key, value);
  }

}