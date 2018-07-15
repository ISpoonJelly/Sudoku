import Cell from '../../models/cell';

export default abstract class SudokuSolver {
  public abstract solve(cells: Cell[], alphabetMax: number): void;
}
