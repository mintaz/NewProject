function flatten(array) {
	return array.reduce(function(memo,currentArray) {
		var items = Array.isArray(currentArray) ? flatten(currentArray) : [currentArray];
		return memo.concat(items);
	}, []);
}
function FindUniqueElementsInArray(){
	var args = [].slice.call(arguments);
	var newArray =flatten(args);
	var dictionary = {};
	var uniqueArray = [];
	for( var i = 0; i < newArray.length; i++ ) {
		var item = newArray[i];
		var replicate = item.toString();

		if (!dictionary[replicate]) {
			dictionary[replicate] = true;
			uniqueArray.push(item);
		}
	}
	return uniqueArray;
}
