const ReadableCodes = require("../lib/readable-codes");

const testGenerator = (length) => {
	const CodeGenerator = new ReadableCodes();
	let code = CodeGenerator.generateCode(length);
	console.log(`${length.toString().padStart(2, " ")} >> ${code}`);
};

testGenerator(5);
testGenerator(6);
testGenerator(7);
testGenerator(8);
testGenerator(9);
testGenerator(10);
testGenerator(11);
testGenerator(12);


