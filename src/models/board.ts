import Cell from "./cell";

export default abstract class Board {
  protected cells: Map<string, Cell>;

  constructor(configuration: BoardConfiguration) {
    this.cells = configuration.cells;
  }

  public abstract solve(): Board;
}

export interface BoardConfiguration {
  cells: Map<string, Cell>;
}
