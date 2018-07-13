export default class Cell {
  private _value: number = 0;
  private readonly _fixed: boolean;
  private readonly _regions: Cell[][] = [];

  constructor(config: { fixed: boolean; value?: number }) {
    this._fixed = config.fixed;
    if (config.value) {
      this.value = config.value;
    }
  }

  public regionExist(region: Cell[]) {
    return this._regions.indexOf(region) == -1;
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
