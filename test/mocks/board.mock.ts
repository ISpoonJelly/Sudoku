import Board from '../../src/models/board';
import { mockCells } from './cell.mock';
import Cell from '../../src/models/cell';

export function mockBoard(config: BoardConfiguration) {
  return new Board({
    cells: config.cells || mockCells(),
    limit: config.limit || 1
  });
}

interface BoardConfiguration {
  cells?: Cell[];
  limit?: number;
}
