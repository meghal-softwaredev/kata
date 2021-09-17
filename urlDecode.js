//https://gist.github.com/meghalshah210/89b215bf083c0033f948be43c7542f20
function keyValue(text){
  let key = '', value ='';
  let chars = text.split('');
  for(let i = 0; i < chars.length; i++){
    if(chars[i] === "="){
      key = chars.slice(0,i);
      value = chars.slice(i+1,chars.length);
      break;
    }
  }
  return [key.join(''), value.join('').replace(/%20/g, ' ')];
}
const urlDecode = function(text) {
  let rest = '', keyVal, keyValuePair = {};
  if(text.includes('&')){
    keyVal = text.split('&');
    for(let input of keyVal){
      const [key, value] =  keyValue(input);
      keyValuePair[key] = value;
    }
  }else{
    const [key, value] =  keyValue(text);
    keyValuePair[key] = value;
  }

  return keyValuePair;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
