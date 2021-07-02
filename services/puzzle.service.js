const { genericService } = require("../util");
const { puzzleDb } = require("../db");


const puzzleService = {
    get: () => {
		return puzzle.puzzleState;
	},
    update: (query, body) => {
		if('currentPosition' in body) {
			puzzle.rotateRunes();
		}

		if('connect' in body) {
			puzzle.dragDots(body.connect[0], body.connect[1]);
		}
		return puzzle.puzzleState;
	},
	reset: () => {
		puzzle = new PuzzleManager();
		return puzzle.puzzleState;
	}
}
module.exports = puzzleService;


class PuzzleManager {
	constructor() {
		this.puzzleState = {
			correctDots: 0,
			newDots: 0,
			currentPosition: 0
		};
		this.correctGuesses = 0;
		this.correctConnections = new Set();
		this.initializePuzzleSteps();

	}

	initializePuzzleSteps() {
		this.puzzleSteps = [];
		this.puzzleSteps.push(new PuzzleStep(6, 0, 2));
		this.puzzleSteps.push(new PuzzleStep(3, 2, 1));
		this.puzzleSteps.push(new PuzzleStep(8, 3, 3));
		this.puzzleSteps.push(new PuzzleStep(1, 6, 2));
		this.puzzleSteps.push(new PuzzleStep(0, 8, 1));
		this.puzzleSteps.push(new PuzzleStep(5, 9, 2));
		this.puzzleSteps.push(new PuzzleStep(4, 11, 3));
		this.puzzleSteps.push(new PuzzleStep(9, 14, 2));
		this.puzzleSteps.push(new PuzzleStep(7, 16, 2));
	}

	rotateRunes() {
		this.puzzleState.currentPosition++;
		if(this.puzzleState.currentPosition >= 10) {
			this.puzzleState.currentPosition = 0;
		}
		this.updateDots();
	}

	updateDots() {
		if(this.correctGuesses === this.puzzleSteps.length) {
			const currentStep = this.puzzleSteps[this.correctGuesses - 1];
			this.puzzleState.correctDots = currentStep.correctDots + currentStep.newDots;
			this.puzzleState.newDots = 0;
			this.puzzleState.completed = true;
			return;
		}
		const currentStep = this.puzzleSteps[this.correctGuesses];
		this.puzzleState.correctDots = currentStep.correctDots;
		if(this.puzzleState.currentPosition === currentStep.colorPosition) {
			this.puzzleState.newDots = currentStep.newDots;
		} else {
			this.puzzleState.newDots = 0;
		}
	}

	dragDots(dot1, dot2) {
		const currentStep = this.puzzleSteps[this.correctGuesses];	
		if(this.correctGuesses === 0) {
			this.correctGuesses++;
			this.correctConnections = new Set();
			this.updateDots();
			return;
		}
		const maxDotIndex = currentStep.correctDots - 1;
		if(dot1 <= maxDotIndex && dot2 > maxDotIndex) {
			this.correctConnections.add(dot2);
		}

		if(dot2 <= maxDotIndex && dot1 > maxDotIndex) {
			this.correctConnections.add(dot1);
		}
		
		if(this.correctConnections.size >= currentStep.newDots) {
			this.correctGuesses++;
			this.correctConnections = new Set();
			this.updateDots();
		}
	}

}

class PuzzleStep {
	constructor(colorPosition, correctDots, newDots) {
		this.colorPosition = colorPosition;
		this.correctDots = correctDots;
		this.newDots = newDots;
	}
}

let puzzle = new PuzzleManager();
