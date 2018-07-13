export default class Cell {
  private _value?: number;
  private _guess?: number;

  constructor(fixedValue?: number) {
    if (fixedValue) {
      this.value = fixedValue;
    }
  }

  public get value(): number | undefined {
    return this._value;
  }

  public get guess(): number | undefined {
    return this._guess;
  }

  public set value(newValue: number | undefined) {
    if (this.value) {
      throw Error("Value for cell is already set");
    }
    if (!newValue) {
      throw Error("Cannot reset value of a set cell");
    }

    this._value = newValue;
  }

  public set guess(guess: number | undefined) {
    if (this.guess) {
      throw Error("Guess for cell is already set");
    }

    this._guess = guess;
  }
}
