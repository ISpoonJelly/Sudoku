import Cell from '../../src/models/cell';

export function emptyCell(): Cell {
  return new Cell({
    fixed: false
  });
}

export function mockCell(): Cell {
  return new Cell({
    fixed: Math.random() >= 0.5,
    value: Math.floor(Math.random() * 9) + 1
  });
}

export function mockCells(): Cell[] {
  const result: Cell[] = [];
  const count = Math.floor(Math.random() * 9) + 1;
  for (let i = 0; i < count; ++i) {
    result.push(mockCell());
  }
  return result;
}
