function daysLeft (startDate, rentDays) {
	let temp = new Date(startDate.getTime());
	startDate.setDate(startDate.getDate() + parseInt(rentDays))

	const diffTime = Math.abs(startDate - temp);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	return diffDays;
}

module.exports = daysLeft;