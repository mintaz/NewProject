function GetFunctionName(functionInput){
	if(typeOf(functionInput)=== function){
		console.log(functionInput.name);
	}
	else{
		console.log("It's not function");
	}
}
