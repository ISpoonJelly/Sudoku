import Cell from "./cell";
import BoardSolver from "../solvers/board_solver";

export default class Board {
  private _cells: Cell[];
  private limit: number;

  public get cells(): Cell[] {
    return this._cells;
  }

  constructor(configuration: BoardConfiguration) {
    this._cells = configuration.cells;
    this.limit = configuration.limit;
  }

  public solve(solver: BoardSolver<Board>): void {
    solver.solve(this, this.limit);
  }
}

export interface BoardConfiguration {
  cells: Cell[];
  limit: number;
}
