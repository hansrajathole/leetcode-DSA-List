/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    
    function isValid(r, c, ch) {
        for (let i = 0; i < 9; i++) {
            // Check row and column
            if (board[r][i] === ch) return false;
            if (board[i][c] === ch) return false;

            // Check 3x3 box
            const boxRow = 3 * Math.floor(r / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(c / 3) + i % 3;
            if (board[boxRow][boxCol] === ch) return false;
        }
        return true;
    }

    function backtrack() {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let ch = 1; ch <= 9; ch++) {
                        let char = ch.toString();
                        if (isValid(r, c, char)) {
                            board[r][c] = char;
                            if (backtrack()) return true;
                            board[r][c] = '.';
                        }
                    }
                    return false; // No valid number found, backtrack
                }
            }
        }
        return true; // Solved
    }

    backtrack();
};
