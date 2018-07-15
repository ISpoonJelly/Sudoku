import SudokuSolver from '../solvers/sudoku/sudoku_solver';
import Cell from './cell';

export default class Board {
  private _cells: Cell[];
  private limit: number;

  public get cells(): Cell[] {
    return this._cells;
  }

  constructor(configuration: BoardConfiguration) {
    if (configuration.limit < 1) {
      throw Error('limit must be an integer greater than 0!');
    }

    this._cells = configuration.cells;
    this.limit = configuration.limit;
  }

  public solve(solver: SudokuSolver): void {
    solver.solve(this.cells, this.limit);
  }
}

export interface BoardConfiguration {
  cells: Cell[];
  limit: number;
}
