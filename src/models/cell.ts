export default class Cell {
  private _value: number = 0;
  private readonly _fixed: boolean;
  private readonly _regions: Cell[][] = [];

  constructor(configuration: { fixed: boolean; value?: number }) {
    if (configuration.fixed && !configuration.value) {
      throw Error('Cell cannot be fixed without a value');
    }

    this._fixed = configuration.fixed;
    if (configuration.value) {
      this.value = configuration.value;
    }
  }

  public regionExist(region: Cell[]) {
    return this._regions.indexOf(region) != -1;
  }

  public addRegion(region: Cell[]) {
    this._regions.push(region);
  }

  public hasViolations(n: number): boolean {
    let found = false;
    this._regions.forEach(region => {
      region.forEach(cell => {
        if (cell.value == n) {
          found = true;
        }
      });
    });

    return found;
  }

  public get value(): number {
    return this._value;
  }

  public get isFixed(): boolean {
    return this._fixed;
  }

  public set value(newValue: number) {
    this._value = newValue;
  }
}
