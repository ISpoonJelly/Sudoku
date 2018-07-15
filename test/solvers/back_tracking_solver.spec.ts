import { expect } from 'chai';

import BackTrackingSolver from '../../src/solvers/sudoku/back_tracking_solver';
import { emptyCell } from '../mocks/cell.mock';

describe('Back Tracking', () => {
  it('solves a board of 4 cells', () => {
    const solver = new BackTrackingSolver();

    const cells = [emptyCell(), emptyCell(), emptyCell(), emptyCell()];
    cells[0].addRegion([cells[0], cells[1]]);
    cells[0].addRegion([cells[0], cells[2]]);

    cells[1].addRegion([cells[0], cells[1]]);
    cells[1].addRegion([cells[1], cells[3]]);

    cells[2].addRegion([cells[0], cells[2]]);
    cells[2].addRegion([cells[2], cells[3]]);

    cells[3].addRegion([cells[2], cells[3]]);
    cells[3].addRegion([cells[1], cells[3]]);

    solver.solve(cells, 2);
    expect(cells[0].value).to.eq(1);
    expect(cells[1].value).to.eq(2);
    expect(cells[2].value).to.eq(2);
    expect(cells[3].value).to.eq(1);
  });

  it('solves a board of 9 cells', () => {
    const cells = [
      emptyCell(),
      emptyCell(),
      emptyCell(),
      emptyCell(),
      emptyCell(),
      emptyCell(),
      emptyCell(),
      emptyCell(),
      emptyCell()
    ];

    const row1 = [cells[0], cells[1], cells[2]];
    const row2 = [cells[3], cells[4], cells[5]];
    const row3 = [cells[6], cells[7], cells[8]];
    const col1 = [cells[0], cells[3], cells[6]];
    const col2 = [cells[1], cells[4], cells[7]];
    const col3 = [cells[2], cells[5], cells[8]];

    cells[0].addRegion(row1);
    cells[0].addRegion(col1);
    cells[1].addRegion(row1);
    cells[1].addRegion(col2);
    cells[2].addRegion(row1);
    cells[2].addRegion(col3);
    cells[3].addRegion(row2);
    cells[3].addRegion(col1);
    cells[4].addRegion(row2);
    cells[4].addRegion(col2);
    cells[5].addRegion(row2);
    cells[5].addRegion(col3);
    cells[6].addRegion(row3);
    cells[6].addRegion(col1);
    cells[7].addRegion(row3);
    cells[7].addRegion(col2);
    cells[8].addRegion(row3);
    cells[8].addRegion(col3);

    new BackTrackingSolver().solve(cells, 3);
    expect(cells[0].value).to.eq(1);
    expect(cells[1].value).to.eq(2);
    expect(cells[2].value).to.eq(3);
    expect(cells[3].value).to.eq(2);
    expect(cells[4].value).to.eq(3);
    expect(cells[5].value).to.eq(1);
    expect(cells[6].value).to.eq(3);
    expect(cells[7].value).to.eq(1);
    expect(cells[8].value).to.eq(2);
  });
});
