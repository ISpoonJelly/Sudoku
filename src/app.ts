import path from 'path';

import Board, { BoardConfiguration } from './models/board';
import BackTrackingSolver from './solvers/sudoku/back_tracking_solver';
import { readSudokuConfig } from './util/board_reader';
import { writeBoardSolution } from './util/board_writer';

async function solveSudokuPuzzle(directory: string) {
  const sudokuConfig: BoardConfiguration = await readSudokuConfig(
    path.join(directory, 'board.cells'),
    path.join(directory, 'board.regions')
  );

  const sudokuBoard: Board = new Board(sudokuConfig);
  const solved = sudokuBoard.solve(new BackTrackingSolver());

  if (solved) {
    const outputPath = path.join(directory, 'board.solution');
    await writeBoardSolution(outputPath, sudokuBoard);
    console.log('Solution written to:', outputPath);
  } else {
    console.log('Puzzle has no solution!');
  }
}

const args = process.argv;
if (args.length < 3) {
  throw Error('Pass config directory as an argument!');
} else {
  solveSudokuPuzzle(args[2]);
}
