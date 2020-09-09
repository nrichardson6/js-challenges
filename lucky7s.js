function luckySevens(numbers) {
	for (var idx = 0; idx < numbers.length - 2; idx ++) {
		if (numbers[idx] + numbers[idx + 1] + numbers[idx + 2] === 7) {
			return true
		}
	}
	return false
}

luckySevens([2, 5, 0, 1, 3])