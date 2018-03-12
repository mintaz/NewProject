function FindSecondNumbers(array){
	var sortedArray = array.sort(function(value1,value2)
		{return value1-value2};
		);
	return sortedArray[1]+","+ sortedArray[sortedArray.length-2];
}