# Sudoku

## Testing

Run `npm test` for unit tests

## Running

You can run the code using `npm start {board_config_directory}` or `BOARD_DIR={board_config_directory} docker-compose up`

Examples:

- `npm start ./sample_files/1`
- `npm start ./sample_files/hard`
- `BOARD_DIR=1 docker-compose up`
- `BOARD_DIR=hard docker-compose up`

## Input Files

The input files are compromised of 2 files as a Sudoku board configuration. The `*.cells` and `*.regions` files.

- The `*.cells` file contains the alphabet characters limit (e.g. 9 for ordinary sudoku) in the first line and a comma-separted array of cells that may or may not contain values in the second line
- The `*.regions` file contains the regions that all the cells belong to. It has a comma-separted array of cell-region, where each cell-region is a `|`-separated array of numbers, where each number represents a unique region. (e.g. in the case of ordinary sudoku, there are 27 regions which are 9 rows, 9 columns and 9 3x3 squares)

## Output File

After the apps solves the puzzle, it's written to a `*.solution` files that is printed in an ordinary 3x3 Sudoku format.

## Limitations

- The current file writer can only output a solved puzzle of the ordinary 3x3 Sudoku format.
- To Solve puzzle with different alphabet(not numbers), some sort of encoder module should be plugged in before solving the puzzle to convert the puzzle alphabet to numerics and then convert the solved numerics back to the puzzle alphabet.
