import Board from "../models/board";

export default abstract class BoardSolver<X extends Board> {
  public abstract solve(board: X, n: number): void;
}
