//https://gist.github.com/meghalshah210/96cc5d712cee05ee4845e83c017e18ce
const squareCode = function(message) {
  const str = message.replace(/ /g,"");
  const lengthStr = str.length;
  const col = (Math.ceil(Math.sqrt(lengthStr)));
  const row = Math.ceil(lengthStr/col);
  let chars = str.split('');
  const lengthChars = chars.length;
  let encode = [], k = 0, encodedStr = '';
  for(let i = 0; i < row; i++){
    encode[i] = [];
    for(let j = 0; j < col; j++){
     if(k < lengthChars){
        encode[i][j] = chars[k++];
      }else{
        encode[i][j] = '';
      }
    }
  }
  for(let j = 0; j < col; j++){
    for(let i = 0; i < row; i++){
      encodedStr += encode[i][j];
    }
    encodedStr += " ";
  }
  return encodedStr;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
