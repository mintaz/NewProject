function SortArray(array){
	var length = array.length;
	for(var i=0;i<length-1;i++){
		for(var j =length-1; j>i;j--){
			if(array[j]<array[j-1]){
				var temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
			}
		}
	}
	return array;
}