function HasMoney(lastcall){
	console.log("Có tiền thì làm gì?");
	lastcall();
}
function Traveling(){
	console.log("Đi du lịch.");
}
var Calling = function(){
	Traveling();
}
HasMoney(Calling);