import fs from 'fs';

import { BoardConfiguration } from '../models/board';
import Cell from '../models/cell';

export async function readSudokuConfig(
  boardFile: string,
  regionsFile: string
): Promise<BoardConfiguration> {
  const boardConfig = await readCellsFile(boardFile);
  return readRegionsFile(regionsFile, boardConfig);
}

async function readCellsFile(filepath: string): Promise<BoardConfiguration> {
  return new Promise<BoardConfiguration>((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        return reject(err);
      }

      const content = data.toString();
      const limit = parseInt(content.split('\n')[0]);
      const cellString = content.split('\n')[1];

      const cells = parseCellsFileContent(cellString);
      resolve({ cells, limit });
    });
  });
}

async function readRegionsFile(
  filepath: string,
  board: BoardConfiguration
): Promise<BoardConfiguration> {
  return new Promise<BoardConfiguration>((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        return reject(err);
      }

      parseRegionsFileContent(data.toString(), board);
      resolve({ cells: board.cells, limit: board.limit });
    });
  });
}

function parseCellsFileContent(content: string): Cell[] {
  var result: Cell[] = [];
  const values = content.split(',');
  values.forEach(value => {
    const cellValue = isNumber(value) ? parseInt(value) : undefined;
    const cell = new Cell({
      fixed: cellValue != undefined,
      value: cellValue
    });
    result.push(cell);
  });

  return result;
}

function parseRegionsFileContent(
  content: string,
  board: BoardConfiguration
): void {
  let regions: Cell[][] = [];
  const values = content.split(',');
  values.forEach((value, valueIndex) => {
    const cell: Cell = board.cells[valueIndex];
    const groups = value.split('|');
    groups.forEach(group => {
      const groupNum = parseInt(group);
      if (!regions[groupNum]) {
        regions[groupNum] = [];
      }
      const region = regions[parseInt(group)];
      region.push(cell);
      if (!cell.regionExist(region)) {
        cell.addRegion(region);
      }
    });
  });
}

function isNumber(value: string): boolean {
  return /^[0-9]+$/.test(value);
}
