import Board from "../models/board";

export default abstract class BoardSolver<X extends Board> {
  protected board: X;

  constructor(board: X) {
    this.board = board;
  }

  public abstract solve(): X;
}
