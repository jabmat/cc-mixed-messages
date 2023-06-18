const whoComp = ['I', 'You', 'We', 'They'];
const orderComp = ['should', 'must', 'can', 'could'];
const howComp = ['imagine', 'destroy', 'build', 'let go', 'divide', 'share'];
const whatComp = ['knowledge', 'lore', 'dreams', 'responsibilities'];

const message = (who, order, how, what) => {
    const randomCompEl = (arr) => {
        let randomIndex = Math.floor(Math.random()*arr.length);
        return arr[randomIndex];
    };

    console.log(
			`${randomCompEl(who)} ${randomCompEl(order)} ${randomCompEl(
				how
			)} ${randomCompEl(what)}.`
		); 
    
};

message(whoComp, orderComp, howComp, whatComp);

