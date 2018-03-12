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

function SortTitleObject(array){
	return array.sort(function(value1,value2){
		return CaseCompare(value1.title,value2.title);
	});
}