import fs from "fs";
import path from "path";

import Board from "../models/board";

export async function writeBoardSolution(
  outputFile: string,
  board: Board
): Promise<void> {
  const output: string = formatBoard(board);
  return await new Promise<void>((resolve, reject) => {
    fs.writeFile(outputFile, output, err => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
}

function formatBoard(board: Board): string {
  let result = "|-----------------|\n|";
  board.cells.forEach((cell, index, arr) => {
    index = index + 1;
    result += cell.value;
    if (index % 3 == 0) {
      result += "|";
    } else {
      result += ",";
    }
    if (index % 9 == 0) {
      result += "\n|";
    }
    if (index % 27 == 0) {
      result += "-----------------|";
      if (index != arr.length) {
        result += "\n|";
      }
    }
  });

  return result;
}
