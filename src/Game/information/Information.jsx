import React, { useState } from "react";
import InformationLayout from "./InformationLayout";

function Information({ isDraw, isGameEnded, currentPlayer }) {

	let message = "";

		if (isDraw) {
			message = "Ничья";
		}
		else if (!isDraw && isGameEnded) {
			message = `Победа: ${currentPlayer}`;
		}
		else if (!isDraw && !isGameEnded) {
			message = `Ходит: ${currentPlayer}`;
		}

	return <InformationLayout message = {message} />;
}

export default Information;
