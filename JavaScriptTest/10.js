function SumOfMultiple3and5(){
	var sum =0;
	var max = 1000;
	var maxOfThree = 1000/3;
	var maxOfFive = 1000/5;
	var maxOfBoth = 1000/(3*5);
	var sumOfThree =0;
	var sumOfFive = 0;
	var sumOfLDM = 0;
	for(var i=1;i<=maxOfThree;i++){
		sumOfThree += i;
	}
	for(var j =1; j<=maxOfFive;j++){
		sumOfFive +=j;
	}
	for(var m =1; m<=maxOfBoth;m++){
		sumOfLDM +=m;
	}
	return sum += 3*sumOfThree + 5*sumOfFive - 15*sumOfLDM;
}