function ChopIntoChunk(string,value){
var chunks = [];
var index =0;
var length = string.length;
for (var i = 0; i < length; ++i) {
    chunks[i] = string.substr(index,value);
    index+=value;
    if(index>=length) break;
  }
return chunks;
}