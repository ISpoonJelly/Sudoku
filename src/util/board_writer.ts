import fs from 'fs';

import Board from '../models/board';

export async function writeBoardSolution(
  outputFile: string,
  board: Board
): Promise<void> {
  const formattedBoard: string = formatBoard(board);
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(outputFile, formattedBoard, err => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
}

function formatBoard(board: Board): string {
  let result = '';
  board.cells.forEach((cell, index, arr) => {
    index = index + 1;
    result += cell.value;

    if (index % 9 == 0) {
      result += '\n';
    } else {
      if (index % 3 == 0) {
        result += ' | ';
      } else {
        result += ' ';
      }
    }

    if (index % 27 == 0) {
      if (index != arr.length) {
        result += '------+-------+------';
        result += '\n';
      }
    }
  });

  return result;
}
