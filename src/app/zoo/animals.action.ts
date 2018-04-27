export class AddAnimal {
  static readonly type = '[Zoo] Add Animals';
  constructor(public payload: string) {}
}
export class RemoveAnimal {
  static readonly type = '[Zoo] Remove Animals';
  constructor(public payload: string) {}
}
