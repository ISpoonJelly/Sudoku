import SudokuBoard, { SudokuConfiguration } from "./models/sudoku_board";
import { readSudokuConfig } from "./util/board_reader";

async function main() {
  const sudokuConfig: SudokuConfiguration = await readSudokuConfig(
    __dirname,
    "sample_files/1.cells",
    "sample_files/1.regions"
  );

  const sudokuBoard: SudokuBoard = new SudokuBoard(sudokuConfig);
  console.log(sudokuBoard.solve());
}

main();
