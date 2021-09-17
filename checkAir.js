//https://gist.github.com/meghalshah210/1ce35de7d2c433683d6451dc58d3cecd
const checkAir = function (samples, threshold) {
  let clean = 0, dirty = 0;
  for(let i = 0;i < samples.length;i++){
    if(samples[i] === "clean"){
      clean++;
    }else{
      dirty++;
    }
  }
  let polluted = dirty/samples.length;
  if(polluted < threshold){
    return "Clean";
  }else{
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))