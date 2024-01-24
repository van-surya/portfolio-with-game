var model = {
    grid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    winCombinations: [[0, 1], [0, 3], [0, 4], [1, 3], [2, 2], [2, 3], [3, 1], [6, 1]],
    xStrategy: {
        13: { 26: null, 46: null, 56: null, 64: { 25: null, 58: null, 75: null, 85: null }, 76: null, 86: null },
        23: { 16: null, 46: null, 56: null, 64: { 15: null, 58: null, 75: null, 85: null }, 76: null, 86: null },
        31: { 24: { 57: null, 67: null, 78: null, 87: null }, 42: null, 52: null, 62: null, 72: null, 82: null },
        41: { 26: { 35: { 78: null, 87: null }, 53: null, 73: null, 83: null }, 32: null, 52: null, 62: null, 72: null, 82: null },
        54: { 18: null, 28: null, 38: null, 68: null, 78: null, 82: { 16: null, 31: null, 61: null, 71: null } },
        61: { 24: { 37: null, 57: null, 78: null, 87: null }, 32: null, 42: null, 52: null, 72: null, 82: null },
        72: { 14: { 36: null, 56: null, 68: null, 86: null }, 31: null, 41: null, 51: null, 61: null, 81: null },
        82: { 16: { 34: null, 43: null, 53: null, 73: null }, 31: null, 41: null, 51: null, 61: null, 71: null }
    },
    oStrategy: {04: {
        12: { 36: null, 56: null, 63: { 57: null, 75: null, 85: null }, 76: null, 86: null },
        21: { 37: null, 57: null, 67: null, 73: { 58: null, 65: null, 85: null }, 87: null },
        36: { 12: null, 21: { 57: null, 75: null, 87: null }, 52: null, 72: null, 82: null },
        57: { 12: { 36: null, 63: null, 86: null }, 21: null, 31: null, 61: null, 81: null },
        63: { 15: null, 25: null, 52: { 27: null, 78: null, 87: null }, 75: null, 85: null },
        75: { 13: null, 23: null, 36: { 12: null, 21: null, 82: null }, 63: null, 83: null },
        81: { 27: null, 37: null, 57: null, 67: null, 76: { 25: null, 32: null, 52: null } }
    },
        14: {02: { 36: null, 56: null, 63: { 57: null, 75: null, 85: null }, 76: null, 86: null },
            20: { 38: null, 58: null, 68: null, 78: null, 85: { 36: null, 63: null, 73: null } },
            32: {06: null, 56: null, 60: { 58: null, 78: null, 87: null }, 76: null, 86: null },
            51: { 28: null, 38: null, 68: null, 78: null, 82: { 36: null, 67: null, 76: null } },
            65: {03: null, 23: null, 30: { 28: null, 78: null, 87: null }, 73: null, 83: null },
            71: { 28: null, 38: null, 58: null, 68: null, 86: { 23: null, 32: null, 52: null } },
            83: {05: null, 25: null, 52: {06: null, 67: null, 76: null }, 65: null, 75: null }
        },
        24: {01: { 37: null, 57: null, 67: null, 73: { 58: null, 65: null, 85: null }, 87: null },
            10: { 38: null, 58: null, 68: null, 78: null, 85: { 36: null, 63: null, 73: null } },
            37: {01: null, 10: { 58: null, 68: null, 85: null }, 51: null, 61: null, 81: null },
            58: {01: { 37: null, 67: null, 73: null }, 10: null, 30: null, 60: null, 70: null },
            61: {07: null, 37: null, 57: null, 78: {03: null, 30: null, 50: null }, 87: null },
            73: {05: null, 15: null, 58: {01: null, 10: null, 60: null }, 65: null, 85: null },
            85: {03: null, 13: null, 31: {07: null, 10: null, 60: null }, 63: null, 73: null }
        },
        34: {06: { 12: null, 21: { 57: null, 75: null, 87: null }, 52: null, 72: null, 82: null },
            12: {06: null, 56: null, 60: { 58: null, 78: null, 87: null }, 76: null, 86: null },
            27: {01: null, 10: { 58: null, 68: null, 85: null }, 51: null, 61: null, 81: null },
            50: { 18: null, 28: null, 68: null, 78: null, 82: { 16: null, 61: null, 71: null } },
            60: { 18: null, 28: null, 58: null, 78: null, 87: { 12: null, 21: null, 51: null } },
            70: { 18: null, 28: null, 58: null, 68: null, 86: { 12: null, 25: null, 52: null } },
            81: {07: null, 27: null, 57: null, 67: null, 76: {02: null, 25: null, 52: null } }
        },
        40: {
            17: {
                26: { 38: null, 53: null, 83: null },
                35: { 26: null, 62: null, 82: null },
                53: { 26: null, 62: null, 86: null },
                62: { 35: null, 53: null, 83: null },
                83: { 26: null, 56: null, 62: null }
            },
            26: { 13: null, 35: { 17: null, 71: null, 81: null }, 53: null, 73: null, 83: null },
            35: {
                17: { 26: null, 62: null, 82: null },
                26: { 17: null, 71: null, 81: null },
                62: { 18: null, 71: null, 81: null },
                71: { 26: null, 62: null, 82: null },
                81: { 26: null, 62: null, 72: null }
            },
            53: { 16: null, 26: null, 62: { 17: null, 71: null, 81: null }, 76: null, 86: null },
            62: { 17: { 35: null, 53: null, 83: null }, 31: null, 51: null, 71: null, 81: null },
            71: { 26: { 35: null, 53: null, 83: null }, 32: null, 52: null, 62: null, 82: null },
            82: { 17: { 35: null, 53: null, 63: null }, 31: null, 51: null, 61: null, 71: null }
        },
        54: {07: { 12: { 36: null, 63: null, 86: null }, 21: null, 31: null, 61: null, 81: null },
            10: { 28: null, 38: null, 68: null, 78: null, 82: { 36: null, 67: null, 76: null } },
            28: {01: { 37: null, 67: null, 73: null }, 10: null, 30: null, 60: null, 70: null },
            30: { 18: null, 28: null, 68: null, 78: null, 82: { 16: null, 61: null, 71: null } },
            61: {07: null, 17: null, 37: null, 78: {03: null, 20: null, 30: null }, 87: null },
            72: {06: null, 16: null, 36: null, 68: {03: null, 10: null, 30: null }, 86: null },
            82: {06: null, 16: null, 36: null, 67: {01: null, 10: null, 31: null }, 76: null }
        },
        64: {03: { 15: null, 25: null, 51: { 27: null, 78: null, 87: null }, 75: null, 85: null },
            15: {03: null, 23: null, 30: { 28: null, 78: null, 87: null }, 73: null, 83: null },
            21: {07: null, 37: null, 57: null, 78: {03: null, 30: null, 50: null }, 87: null },
            30: { 18: null, 28: null, 58: null, 78: null, 87: { 12: null, 21: null, 51: null } },
            51: {07: null, 27: null, 37: null, 78: {03: null, 20: null, 30: null }, 87: null },
            78: {03: { 15: null, 25: null, 51: null }, 10: null, 20: null, 30: null, 50: null },
            87: {01: null, 13: {05: null, 25: null, 52: null }, 21: null, 31: null, 51: null }
        },
        74: {05: { 13: null, 23: null, 36: { 12: null, 21: null, 82: null }, 63: null, 83: null },
            10: { 28: null, 38: null, 58: null, 68: null, 86: { 23: null, 32: null, 52: null } },
            23: {05: null, 15: null, 58: {01: null, 10: null, 60: null }, 65: null, 85: null },
            30: { 18: null, 28: null, 58: null, 68: null, 86: { 12: null, 25: null, 52: null } },
            52: {06: null, 16: null, 36: null, 68: {03: null, 10: null, 30: null }, 86: null },
            68: {03: { 15: null, 25: null, 51: null }, 10: null, 20: null, 30: null, 50: null },
            86: {02: null, 12: null, 25: {03: null, 13: null, 30: null }, 32: null, 52: null }
        },
        84: {01: { 27: null, 37: null, 57: null, 67: null, 76: { 25: null, 32: null, 52: null } },
            13: {05: null, 25: null, 52: {06: null, 67: null, 76: null }, 65: null, 75: null },
            25: {03: null, 13: null, 31: {07: null, 67: null, 76: null }, 63: null, 73: null },
            31: {07: null, 27: null, 57: null, 67: null, 76: {02: null, 25: null, 52: null } },
            52: {06: null, 16: null, 36: null, 67: {01: null, 10: null, 31: null }, 76: null },
            67: {01: null, 13: {05: null, 25: null, 52: null }, 21: null, 31: null, 51: null },
            76: {02: null, 12: null, 25: {03: null, 13: null, 30: null }, 32: null, 52: null }
        }
    },
    currentStrategy: null,
    winnedCombimation: [],
    movesHistory: [],

    getGrid: function () {
        return this.grid;
    },
    getWinnedCombination: function () {
        return this.winnedCombimation;
    },
    resetGameState: function (userPlaysX) {
        this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.winnedCombimation = [];
        this.movesHistory = [];
        this.currentStrategy = userPlaysX ? this.oStrategy : this.xStrategy;
    },
    makePlayerMove: function (id) {
        if (this.grid[id] === 0 && !this.checkGameIsOver()) {
            this.grid[id] = 1;
            this.movesHistory.push(parseInt(id));
            return true;
        }
        return false;
    },
    makeAiMove: function (userPlaysX) {
        while (!this.checkGameIsOver()) {
            var id = this.calculateMove(userPlaysX);
            if (this.grid[id] === 0) {
                this.grid[id] = 2;
                this.movesHistory.push(id);
                return true;
            }
        }
        return false;
    },
    calculateMove: function (userPlaysX) {
        if (userPlaysX) {
            for (var id in this.currentStrategy) {
                if (Math.floor(id / 10) === this.movesHistory[this.movesHistory.length - 1]) {
                    this.currentStrategy = this.currentStrategy[id];
                    return id % 10;
                }
            }
        } else {
            if (this.movesHistory.length === 0) {
                return 0;
            } else {
                for (var id in this.currentStrategy) {
                    if (Math.floor(id / 10) === this.movesHistory[this.movesHistory.length - 1]) {
                        this.currentStrategy = this.currentStrategy[id];
                        return id % 10;
                    }
                }
            }
        }
    },
    checkGameIsOver: function () {
        if (this.checkMoveAvailable()) {
            return this.checkSomebodyWin() !== 0;
        }
        return true;
    },
    checkMoveAvailable: function () {
        for (var i = 0; i < this.grid.length; i++) {
            if (this.grid[i] === 0) {
                return true;
            }
        }
        return false;
    },
    checkSomebodyWin: function () {
        for (var j = 0; j < this.winCombinations.length; j++) {
            var i = this.winCombinations[j][0];
            var factor = this.winCombinations[j][1];
            if (this.grid[i] !== 0 && this.grid[i + factor] * this.grid[i + 2 * factor]
                === Math.pow(this.grid[i], 2)) {
                // Math representation of the win formula
                this.winnedCombimation = [i, i + factor, i + 2 * factor];
                return this.grid[i];
            }
        }
        return 0;
    }
};



var view = { 
    drawGrid: function (grid, userPlaysX) {
        document.getElementById('restart').style.display = 'none';
        for (var i = 0; i < grid.length; i++) {
            switch (grid[i]) {
                case 0:
                    document.getElementById('cell-' + i).innerHTML = '';
                    break;
                case 1:
                    document.getElementById('cell-' + i).innerHTML = userPlaysX ? 'X' : 'O';
                    break;
                case 2:
                    document.getElementById('cell-' + i).innerHTML = userPlaysX ? 'O' : 'X';
                    break;
            }
            document.getElementById('cell-' + i).style.background = '';
            document.getElementById('cell-' + i).style.color = '';
        }
    },
    showStatus: function (status) {
        document.getElementById('status').innerHTML = status;
    },
    showScore: function (xScore, oScore) {
        document.getElementById('x-score').innerHTML = xScore;
        document.getElementById('o-score').innerHTML = oScore;
    },
    showNextRoundButton: function () {
        document.getElementById('restart').style.display = 'inline';
    },
    highlightWinnedCombination: function (combination) {
        for (var i = 0; i < combination.length; i++) {
            document.getElementById('cell-' + combination[i]).style.background = '#607274';
            document.getElementById('cell-' + combination[i]).style.color = '#f99417';
        }
    },
    highlightUserLetter: function (userPlaysX) {
        if (userPlaysX) {
            document.getElementById('scores-x').style.fontWeight = 'bold';
            document.getElementById('scores-o').style.fontWeight = 'normal';
        } else {
            document.getElementById('scores-x').style.fontWeight = 'normal';
            document.getElementById('scores-o').style.fontWeight = 'bold';
        }
    }
};



var controller = {
    userPlaysX: true,
    xWins: 0,
    oWins: 0,

    restartGame: function () {
        model.resetGameState(this.userPlaysX);
        view.highlightUserLetter(this.userPlaysX);
        view.showScore(this.xWins, this.oWins);
        view.showStatus('');
        view.drawGrid(model.getGrid(), this.userPlaysX);
        if (!this.userPlaysX) {
            model.makeAiMove(this.userPlaysX);
            view.drawGrid(model.getGrid(), this.userPlaysX);
        }
    },
    makeOneTurn: function (id) {
        if (model.makePlayerMove(id)) {
            view.drawGrid(model.getGrid(), this.userPlaysX);
            model.makeAiMove(this.userPlaysX);
            view.drawGrid(model.getGrid(), this.userPlaysX);
            if (model.checkGameIsOver()) {
                this.calculateScore();
                view.showNextRoundButton();
                view.highlightWinnedCombination(model.getWinnedCombination());
            }
        }
    },

    changeXO: function (playX) {
        if (this.userPlaysX !== playX) {
            this.userPlaysX = playX;
            this.xWins = 0;
            this.oWins = 0;
            this.restartGame();
        }
    },

    calculateScore: function () {
        switch (model.checkSomebodyWin()) {
            case 0:
                view.showStatus('It\'s a tie!');
                break;
            case 1:
                // User wins
                view.showStatus('You win this round!');
                if (this.userPlaysX) {
                    this.xWins++;
                } else {
                    this.oWins++;
                }
                break;
            case 2:
                view.showStatus('Surya wins this round!');
                if (this.userPlaysX) {
                    this.oWins++;
                } else {
                    this.xWins++;
                }
                break;
        }
        view.showScore(this.xWins, this.oWins);
    },
    handlerOnload: function () {
        this.restartGame();
    },
    handleClick: function (target) {
        switch (target.id) {
            case 'app-title':
                view.toggleEasterEgg(target);
                break;
            case 'cell-0':
            case 'cell-1':
            case 'cell-2':
            case 'cell-3':
            case 'cell-4':
            case 'cell-5':
            case 'cell-6':
            case 'cell-7':
            case 'cell-8':
                // Distinct with regex number from 'cell-0' etc.
                this.makeOneTurn(target.id.match(/\d+/)[0]);
                break;
            case 'scores-x':
            case 'x-score':
                this.changeXO(true);
                break;
            case 'scores-o':
            case 'o-score':
                this.changeXO(false);
                break;
            case 'restart':
                this.restartGame();
                break;
            case 'credits':
                break;
            default:
                break;
        }
    },
};



(function () {
    var app = {
        init: function () {
            this.main();
            this.control();
            this.event();
        },
        main: function () {
        },
        control: function () {
            controller.handlerOnload();
        },
        event: function () {
            document.getElementById('app-title').addEventListener('click', function (e) {
                controller.handleClick(e.target);
            });
            for (var i = 0; i < 9; i++) {
                // Add click event handlers for each cell
                document.getElementById('cell-' + i).addEventListener('click', function (e) {
                    controller.handleClick(e.target);
                });
            }
            document.getElementById('scores-x').addEventListener('click', function (e) {
                controller.handleClick(e.target);
            });
            document.getElementById('scores-o').addEventListener('click', function (e) {
                controller.handleClick(e.target);
            });
            document.getElementById('restart').addEventListener('click', function (e) {
                controller.handleClick(e.target);
            });

            window.addEventListener('click', function (e) {
                if (e.target.tagName.toLowerCase() === '.body') {
                    controller.handleClick(e.target);
                }
            });
        }
    }

    app.init();

}());
