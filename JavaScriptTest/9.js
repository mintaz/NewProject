function ExtractUniqueCharacter(string){
	var result ="";
	var length = string.length;
	for(var i=0;i<length;i++){
		if(result.indexOf(string[i])<0){
			result+=string[i];
		}
	}
	return result;
}