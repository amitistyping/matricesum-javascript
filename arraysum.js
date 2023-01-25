const mat1 = [
	[9, 3],
	[4, 7],
];

const mat2 = [
	[4, 5],
	[10, 1],
];

function addMatrices(mat1, mat2) {
	let sumMatrice = [];
	for (let i = 0; i < mat1.length; i++) {
		let sumRow = [];
		for (let j = 0; j < mat1[i].length; j++) {
			sumRow.push(mat1[i][j] + mat2[i][j]);
		}
		sumMatrice.push(sumRow);
	}
    return sumMatrice;
}

console.log(addMatrices(mat1, mat2));
