function FindMostFrequent(array){
	var maxFrenquent =1;
	var maxCurrent = 0;
	var maxItem = array[0];
	var length = array.length;
	for(var i = 0; i<length;i++){
		for(j = i; j<length;j++){
			if(array[i]==array[j]){
				maxCurrent++;
			}
			if(maxFrenquent<maxCurrent){
				maxFrenquent = maxCurrent;
				maxItem = array[i];
			}
		}
    maxCurrent =0;
	}
	return maxItem+" ( "+maxFrenquent+" times )";
}