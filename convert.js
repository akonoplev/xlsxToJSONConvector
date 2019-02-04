console.log("Converting to JSON...")
xlsxj = require("xlsx-to-json");
xlsxj({
	input: "input.xlsx",
	output: "output.json"
}, function (err, result) {
	if (err) {
		console.log("Error")
		console.error(err);
	} else {
		console.log("Done!")
	}
});