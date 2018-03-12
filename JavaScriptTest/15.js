﻿function ConvertUnicodeToHyphen(execString){
	//var charArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "{", "}", "[", "]", "|", "\\", "'", ":", ";", "\"", "<", ",", ">", ".", "?", "/", " "];
	execString = execString.toLowerCase();
	execString = execString.replace(/[aàáảạãăắằẳẵặâấầẩẫậ]/g,"a");
	
	execString = execString.replace(/[uúùủũụưứừửữự]/g,"u");
	execString = execString.replace(/[iíìỉĩị]/g,"i");
	execString = execString.replace(/[oóòỏõọôốồổỗộơớờởỡợ]/g,"o");
	execString = execString.replace(/[yýỳỷỹỵ]/g,"y");
	execString = execString.replace(/[đ]/g,"d");
	execString = execString.replace(/[^a-zA-Z0-9_-]/g,"-");
	execString = execString.replace(/--+/g,"-");
	execString = execString.replace(/[đ]/g,"d");
	return execString;
}

