
var regiao = ["111", "333", "555", "888", "000"];

var tipos = ["000", "111", "333", "555", "888"];


 var codigos = [
	 "888555555123888",
	 "333333555584333",
	 "222333555124000",
	 "000111555874555",
	 "111888555654777",
	 "111333555123333",
	 "555555555123888",
	 "888333555584333",
	 "111333555124000",
	 "333888555584333",
	 "555888555123000",
	 "111888555123555",
	 "888000555845333",
	 "000111555874000",
	 "111333555123555"
];

var codigosValidos = [];
var codigosInvalidos = [];


for (var i = 0; i<codigos.length; i++){
    var trinca1 = codigos[i].substr(0,3);
    var trinca2 = codigos[i].substr(3,3);
    var trinca3 = codigos[i].substr(6,3);
    var trinca4 = codigos[i].substr(9,3);
    var trinca5 = codigos[i].substr(12,3);


    if (trinca4 == 584 || tipos.includes(trinca5) == false){
    	codigosInvalidos.push(codigos[i]);
    }
    else {
    	codigosValidos.push(codigos[i]);
    }

	
}

console.log(codigosValidos, codigosInvalidos);

