// import React, { useState } from "react";
import FieldLayout from "./FieldLayout";

function Field({
	currentPlayer,
	setCurrentPlayer,
	field,
	setField,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // вертикали
		[0, 4, 8],
		[2, 4, 6], // диагонали
	];

	function checkWinner(field) {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a]; // возвращает 'X' или '0'
			}
		}
		return null; // если победителя нет
	}

	const handleClick = (index) => {
		// проверка: ячейки, ничьи, игра закончена
		if (field[index] !== null || isDraw || isGameEnded) return;

		const newCells = [...field];
		newCells[index] = currentPlayer; // присваиваем ячейке Х или 0
		setField(newCells); // рендерим поле заново

		const winner = checkWinner(newCells); // проверяем на победу
		if (winner) {
			setIsGameEnded(true);
			return;
		}

		if (!newCells.includes(null)) {       //проверяем на ничью
			setIsDraw(true);
			setIsGameEnded(true);
			return;
		}
											// меняем игрока
		setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "0" : "X"));
	};

	function resetGame() {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(null)); // пустое поле
	}

	return (
		<FieldLayout
			field={field}
			resetGame={resetGame}
			handleClick={handleClick}
		/>
	);
}

export default Field;

// const [field, setField] = useState(Array(9).fill(null)); // 3x3 = 9 ячеек
// const [isXTurn, setIsXTurn] = useState(true);

// const handleClick = (index) => {
// 	if (field[index] !== null) return; // нельзя перезаписывать ячейку

// 	const newCells = [...field];
// 	newCells[index] = isXTurn ? "X" : "O";
// 	setField(newCells);
// 	setIsXTurn(!isXTurn);
// };
