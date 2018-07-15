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
  sudokuBoard.solve(new BackTrackingSolver());

  const outputPath = path.join(directory, 'board.solution');
  await writeBoardSolution(outputPath, sudokuBoard);
  console.log('solution written to:', outputPath);
}

solveSudokuPuzzle(path.join(__dirname, '..', 'sample_files', '1'));
