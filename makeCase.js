//https://gist.github.com/meghalshah210/4ca103dae3124470cbedf4c7827de624
const makeCase = function(input, caseTypes) {
  var finalStr = '', finalStr1 = '', finalStr2 = '', cases = [];
  const priority1 = ["camel", "pascal", "snake", "kebab", "title"];
  const priority2 = ["vowel", "consonant"];
  const priority3 = ["upper", "lower"];

  if(typeof caseTypes === "string"){
    cases.push(caseTypes);
  }else{
    for(let i = 0; i < priority1.length;i++){
      if(caseTypes.includes(priority1[i])) 
        cases.push(priority1[i]);
    }
    for(let i = 0; i < priority2.length;i++){
      if(caseTypes.includes(priority2[i])) 
        cases.push(priority2[i]);
    }
    for(let i = 0; i < priority3.length;i++){
      if(caseTypes.includes(priority3[i])) 
        cases.push(priority3[i]);
    }
  }
  for(let caseType of cases){
    finalStr = '';
    switch(caseType){
      case "camel":
        for(let i = 0;i < input.length; i++){
          if(input[i] === " "){
            finalStr += input[i+1].toUpperCase(); 
            i++;
          }else{
            finalStr += input[i];
          }
        }
        break;
      case "pascal":
        finalStr = input[0].toUpperCase();
        for(let i = 1;i < input.length; i++){
          if(input[i] === " "){
            finalStr += input[i+1].toUpperCase(); 
            i++;
          }else{
            finalStr += input[i];
          }
        }
        break;
      case "snake":
        finalStr = input.split(" ").join("_");
        break;
      case "kebab":
        finalStr = input.split(" ").join("-");
        break;
      case "title":
        finalStr = input[0].toUpperCase();
        for(let i = 1;i < input.length; i++){
          if(input[i] === " "){
            finalStr += " " + input[i+1].toUpperCase(); 
            i++;
          }else{
            finalStr += input[i];
          }
        }
        break;
    }
    if(finalStr !== ''){
      input = finalStr;
    }
    switch(caseType){
      case "vowel":
        for(let i = 0;i < input.length; i++){
          if(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u'){
            finalStr += input[i].toUpperCase();
          }else{
            finalStr += input[i];
          }
        }
        break;
      case "consonant":
        for(let i = 0;i < input.length; i++){
          if(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u'){
            finalStr += input[i];
          }else{
            finalStr += input[i].toUpperCase();
          }
        }
        break;
    }
    if(finalStr !== ''){
      input = finalStr;
    }
    switch(caseType){
      case "upper":
        for(let i = 0;i < input.length; i++){
          finalStr += input[i].toUpperCase();
        }
        break;
      case "lower":
        finalStr += input;
        break;
    }
    if(finalStr !== ''){
      input = finalStr;
    }
  }
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
