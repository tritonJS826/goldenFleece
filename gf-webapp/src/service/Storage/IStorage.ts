export interface IStorage<Schema> {
  getItem(key: keyof Schema): Schema[keyof Schema] | null;
  setItem(key: keyof Schema, value: Schema[keyof Schema]): void;
}
