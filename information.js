let student = {
    name: 'Tibo',
    campus: 'Orléans'};

const myInfos = () => {
    console.log(`Hi I'm ${student.name} from ${student.campus} !`);
};

module.exports = myInfos;

let cowsay = require("cowsay");

console.log(cowsay.say({
    
	text : `Hi I'm ${student.name} from ${student.campus} !`,
	e : "oO",
	T : "U "
}));