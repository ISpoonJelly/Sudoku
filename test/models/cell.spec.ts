import { expect } from 'chai';

import Cell from '../../src/models/cell';
import { mockCell } from '../mocks/cell.mock';

describe('Cell', () => {
  describe('Create', () => {
    it('throws an error for creating fixed cell with no value', () => {
      expect(() => new Cell({ fixed: true })).to.throw(
        'Cell cannot be fixed without a value'
      );
    });

    it('creates a fixed cell', () => {
      const cell = new Cell({ fixed: true, value: 5 });
      expect(cell).to.deep.eq({
        _fixed: true,
        _value: 5,
        _regions: []
      });
    });

    it('creates a non-fixed cell', () => {
      const cell = new Cell({ fixed: false });
      expect(cell).to.deep.eq({
        _fixed: false,
        _value: 0,
        _regions: []
      });
    });
  });

  describe('Regions', () => {
    it('adds a region to a cell', () => {
      const cell = mockCell();
      const region = [mockCell()];
      cell.addRegion(region);

      expect(cell).to.deep.include({
        _regions: [region]
      });
    });

    it('checks cell for existing regions', () => {
      const cell = mockCell();
      const region = [mockCell()];
      cell.addRegion(region);

      expect(cell.regionExist(region)).to.eq(true);
    });

    it('check violations with other cells in a region', () => {
      const cell = mockCell();
      const region = [mockCell()];
      cell.addRegion(region);

      expect(cell.hasViolations(region[0].value)).to.eq(true);
    });
  });
});
