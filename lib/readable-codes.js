class ReadableCodes {

	C = "BCDFGHJKLMNPQRSTVWXYZ";
	V = "AEIOU";


	constructor() {
	}

	generateCode = (length) => {
		let code = "";
		if (Math.round(Math.random())) {
			for (let index = 0; index < length; index++) {
				code += index % 2 === 0 ? this.C[Math.floor(Math.random() * this.C.length)] : this.V[Math.floor(Math.random() * this.V.length)];
			}
		}
		else {
			for (let index = 0; index < length; index++) {
				code += index % 2 === 0 ? this.V[Math.floor(Math.random() * this.V.length)] : this.C[Math.floor(Math.random() * this.C.length)];
			}
		}
		return code;
	};

}


module.exports = ReadableCodes;

