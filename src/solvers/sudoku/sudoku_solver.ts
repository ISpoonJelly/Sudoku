import BoardSolver from "../board_solver";
import SudokuBoard from "../../models/sudoku_board";

export default class SudokuSolver extends BoardSolver<SudokuBoard> {
  public solve(): SudokuBoard {
    throw Error("Not yet implemented!");
  }
}
