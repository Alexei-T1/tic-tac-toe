class TicTacToe {
    
    constructor() {
        this.currentUser = '';
        this.firstUser = "x";
        this.secondUser = "o";
        this.steps = 0;
        this.markArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }

    getCurrentPlayerSymbol(current) {
        if (this.steps == 0 && !current) {
            this.currentUser = this.firstUser;
            return this.currentUser;
        }

        if (current) {
            if(this.currentUser == this.firstUser) {
                this.currentUser = this.secondUser;
            }
            else if (this.currentUser == this.secondUser) {
                this.currentUser = this.firstUser;
            }
            this.steps++;
        }
    return this.currentUser;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.markArray[rowIndex][columnIndex] == this.firstUser || this.markArray[rowIndex][columnIndex] == this.secondUser) {return}
        
        this.markArray[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.getCurrentPlayerSymbol(this.currentUser);
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) return true;
        return false;
    }

    getWinner() {
        let vert1User1 = 0;
        let vert2User1 = 0;
        let vert1User2 = 0;
        let vert2User2 = 0;
        
        for (let i = 0; i < this.markArray.length; i++ ) {
            if (this.markArray[i].every((v, index) => {
                return v == this.firstUser;
            })) {
                return this.firstUser;
            }
            if([this.markArray[0][i], this.markArray[1][i], this.markArray[2][i]].every((v, index) => {
                return  v == this.firstUser;
            })) {
                return this.firstUser;
            }

            if (this.markArray[i].every((v, index) => {
                return v == this.secondUser;
            })) {
                return this.secondUser;
            }
            if([this.markArray[0][i], this.markArray[1][i], this.markArray[2][i]].every((v, index) => {
                return  v == this.secondUser;
            })) {
                return this.secondUser;
            }

            for(let j = 0; j < this.markArray[i].length; j++ ) {

                if (i == j && (this.markArray[i][j] == this.firstUser)) {
                    vert1User1++;
                    if(vert1User1 == 3) return this.markArray[i][j];
                }
                if (i == Math.abs(j - 2) && this.markArray[i][j] == this.firstUser) {
                    vert2User1++;
                    if(vert2User1 == 3) return this.markArray[i][j];
                }

                if (i == j && (this.markArray[i][j] == this.secondUser)) {
                    vert1User2++;
                    if(vert1User2 == 3) return this.markArray[i][j];
                }
                if (i == Math.abs(j - 2) && this.markArray[i][j] == this.secondUser) {
                    vert2User2++;
                    if(vert2User2 == 3) return this.markArray[i][j];
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        if (this.steps === 9) {
            return true;
        }
        return false;
    }

    isDraw() {
        if (this.getWinner() || this.steps < 9) return false;
        if (this.steps === 9) return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.markArray[rowIndex][colIndex] == 0) return null;
        return this.markArray[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
