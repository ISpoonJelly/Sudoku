import Board from "../../models/board";
import BoardSolver from "../board_solver";

export default abstract class SudokuSolver extends BoardSolver<Board> {
  public abstract solve(board: Board, n: number): void;
}
