import Board, { BoardConfiguration } from "./board";
import Cell from "./cell";
import SudokuSolver from "../solvers/sudoku/sudoku_solver";

export default class SudokuBoard extends Board {
  private regions: Cell[][];

  constructor(configuration: SudokuConfiguration) {
    super({ cells: configuration.cells });
    this.regions = configuration.regions;
  }

  public solve(): SudokuBoard {
    const solver = new SudokuSolver(this);
    return solver.solve();
  }
}

export interface SudokuConfiguration extends BoardConfiguration {
  regions: Cell[][];
}
