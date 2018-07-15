import { expect } from 'chai';

import Board from '../../src/models/board';
import { mockCells } from '../mocks/cell.mock';

describe('Board', () => {
  describe('Create', () => {
    it('throws error for creating a board with invalid limit', () => {
      expect(() => new Board({ cells: [], limit: -1 })).to.throw(
        'limit must be an integer greater than 0!'
      );
    });

    it('creates a new board with empty cells', () => {
      const board: Board = new Board({ cells: [], limit: 1 });
      expect(board).to.deep.eq({
        _cells: [],
        limit: 1
      });
    });

    it('creates a new board with some cells', () => {
      const cells = mockCells();
      const board: Board = new Board({
        cells: cells,
        limit: 1
      });
      expect(board).to.deep.eq({
        _cells: cells,
        limit: 1
      });
    });
  });
});
