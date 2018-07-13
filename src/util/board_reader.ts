import fs from "fs";
import path from "path";

import Cell from "../models/cell";
import { BoardConfiguration } from "../models/board";
import { SudokuConfiguration } from "../models/sudoku_board";

export async function readSudokuConfig(
  parentDir: string,
  boardFile: string,
  regionsFile: string
) {
  const boardConfig = await readCellsFile(path.join(parentDir, boardFile));
  return await readRegionsFile(path.join(parentDir, regionsFile), boardConfig);
}

async function readCellsFile(filepath: string): Promise<BoardConfiguration> {
  return await new Promise<BoardConfiguration>((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        reject(err);
      }

      const parsed = parseCellsFileContent(data.toString());
      resolve({ cells: parsed });
    });
  });
}

async function readRegionsFile(
  filepath: string,
  board: BoardConfiguration
): Promise<SudokuConfiguration> {
  return await new Promise<SudokuConfiguration>((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        reject(err);
      }

      const parsed = parseRegionsFileContent(data.toString(), board);
      resolve({ cells: board.cells, regions: parsed });
    });
  });
}

function parseCellsFileContent(content: string): Map<string, Cell> {
  var result = new Map<string, Cell>();
  const lines = content.split("\n");
  lines.forEach((line, lineIndex) => {
    const values = line.split(",");
    values.forEach((value, valueIndex) => {
      const cellValue = isNumber(value) ? parseInt(value) : undefined;
      const cell = new Cell(cellValue);
      result.set(lineIndex + "," + valueIndex, cell);
    });
  });

  return result;
}

function parseRegionsFileContent(
  content: string,
  board: BoardConfiguration
): Cell[][] {
  const lines = content.split("\n");
  const groupNum = parseInt(lines[0]);
  let regions: Cell[][] = Array(groupNum)
    .fill(null)
    .map(() => Array());

  lines.shift();
  lines.forEach((line, lineIndex) => {
    const values = line.split(",");
    values.forEach((value, valueIndex) => {
      const cell: Cell = board.cells.get(lineIndex + "," + valueIndex)!;
      const groups = value.split("|");
      groups.forEach(group => {
        regions[parseInt(group)].push(cell);
      });
    });
  });

  return regions;
}

function isNumber(value: string): boolean {
  return /^[0-9]+$/.test(value);
}
