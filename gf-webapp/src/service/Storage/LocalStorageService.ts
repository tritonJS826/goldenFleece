import {Storage} from "src/service/Storage/Storage";

export class LocalStorageService<Schema> implements Storage<Schema> {

  private readonly storage!: Storage<Schema>;

  constructor() {
    this.storage = window.localStorage as Storage<Schema>;
  }

  public getItem(key: keyof Schema): Schema[keyof Schema] | null {
    return this.storage.getItem(key);
  }

  public setItem(key: keyof Schema, value: Schema[keyof Schema]): void {
    this.storage.setItem(key, value);
  }

}