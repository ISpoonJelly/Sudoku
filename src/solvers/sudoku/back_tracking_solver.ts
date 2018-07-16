import Cell from '../../models/cell';
import SudokuSolver from './sudoku_solver';

export default class BackTrackingSolver extends SudokuSolver {
  public solve(cells: Cell[], alphabetMax: number): boolean {
    const emptyCells = cells.filter(cell => !cell.isFixed);
    try {
      populateEmptyCells(emptyCells, alphabetMax);
    } catch (e) {
      return false;
    }
    return true;
  }
}

function populateEmptyCells(cells: Cell[], alphabetMax: number): void {
  let i = 0;
  while (i < cells.length) {
    const current: Cell = cells[i];
    let testValue: number = current.value + 1;
    let isCorrect = false;
    while (!isCorrect && testValue <= alphabetMax) {
      if (!current.hasViolations(testValue)) {
        isCorrect = true;
        current.value = testValue;
        ++i;
        break;
      }

      ++testValue;
    }

    if (!isCorrect) {
      current.value = 0;
      --i;
    }
  }
}
