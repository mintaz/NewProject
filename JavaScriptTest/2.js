function CaseCompare(charA,charB){
	var compare = charA.toLowerCase().localeCompare(charB.toLowerCase());
	if(compare!=0){
		return compare;
	}
	if(charA > charB){
		return 1;
	}
	else if(charA<charB){
		return -1;
	}
	else{
		return 0;
	}
}


function AlphabeOrder(string){
	return string.split("").sort(CaseCompare).join("");
}