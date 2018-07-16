import { expect } from 'chai';

import Board from '../../src/models/board';
import { mockBoard } from '../mocks/board.mock';

describe('Board', () => {
  describe('Create', () => {
    it('throws error for creating a board with invalid limit', () => {
      expect(() => mockBoard({ cells: [], limit: -1 })).to.throw(
        'limit must be an integer greater than 0!'
      );
    });

    it('creates a new board with empty cells', () => {
      const board: Board = mockBoard({ cells: [] });
      expect(board).to.deep.eq({
        _cells: [],
        limit: 1
      });
    });

    it('creates a new board with some cells', () => {
      const board: Board = mockBoard({});
      expect(board).to.deep.eq({
        _cells: board.cells,
        limit: 1
      });
    });
  });
});
