function validSolution(board){
    //Horizontal check
    var rowcheck = function(br) {
        for(var i = 0; i < br.length; i++) {
            for(var j = 1; j < br[i].length; j++) {
                if(br[i][j] != 0) {
                    if(br[i][j] === br[i][j-1]) return false;
                }
            }
        }
        return true;
    };
    //vertical check
    var colcheck = function(br){
        for(var i = 0; i < br.length; i++) {
            for(var j = 1; j < br[i].length; j++) {
                if(br[j][i] != 0) {
                    if(br[j][i] === br[j-1][i]) return false;
                }
            }
        }
        return true;
    };
    var diagonalcheck = function(br){
        var res = [];
        for(var i = 0; i < br.length; i++) {
            for(var j = 0; j < br[i].length; j++) {
                res.push(br[i][j]);
            }
        }
        res = res.sort();
        for(var k = 1; k < res.length; k++) {
            if(res[k] != 0) {
                if(res[k] === res[k-1]) return false;
            }
        }
        return true;
        
    }
    //3 x 3 grid check
    var brslice = function(row, column){
        var br = [];
        br.push([board[row][column], board[row][column+1], board[row][column+2]]);
        br.push([board[row+1][column], board[row+1][column+1], board[row+1][column+2]]);
        br.push([board[row+2][column], board[row+2][column+1], board[row+2][column+2]]);
        return rowcheck(br) && colcheck(br) && diagonalcheck(br);
    }
    return colcheck(board) && rowcheck(board) && brslice(0,0) && brslice(0,3) && brslice(0,6) && brslice(3,0) && brslice(3,3) && brslice(3,6) && brslice(6,0) && brslice(6,3) && brslice(6,6);
}
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 7, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
