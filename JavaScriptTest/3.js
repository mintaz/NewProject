function FindLongestWord(string){
	var longestWord = string.split(" ").reduce(function(longest,currentWord){
		return currentWord.length > longest.length ? currentWord : longest;
	},"");
	return longestWord;
}