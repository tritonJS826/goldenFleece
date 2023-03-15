import {IStorage} from "src/service/Storage/IStorage";

export class LocalStorageService<Schema> implements IStorage<Schema> {

  private readonly storage!: IStorage<Schema>;

  constructor() {
    this.storage = window.localStorage as IStorage<Schema>;
  }

  public getItem(key: keyof Schema): Schema[keyof Schema] | null {
    return this.storage.getItem(key);
  }

  public setItem(key: keyof Schema, value: Schema[keyof Schema]): void {
    this.storage.setItem(key, value);
  }

}