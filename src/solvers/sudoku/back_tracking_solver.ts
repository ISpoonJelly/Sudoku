import SudokuSolver from "./sudoku_solver";
import Cell from "../../models/cell";
import Board from "../../models/board";

export default class BackTrackingSolver extends SudokuSolver {
  public solve(board: Board, n: number): void {
    const emptyCells = board.cells.filter(cell => !cell.isFixed);
    recursionSolving(emptyCells, n);
  }
}

function recursionSolving(cells: Cell[], n: number): void {
  let i = 0;
  while (i < cells.length) {
    const current = cells[i];
    let testValue = current.value + 1;
    let found = false;
    while (!found && testValue <= n) {
      if (!current.hasViolations(testValue)) {
        found = true;
        current.value = testValue;
        ++i;
      } else {
        ++testValue;
      }
    }

    if (!found) {
      current.value = 0;
      --i;
    }
  }
}
