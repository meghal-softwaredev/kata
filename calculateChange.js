//https://gist.github.com/meghalshah210/689219a518a2f053356172e93a4e07e1
const calculateChange = function(total, cash) {
  let twentyDollar = 0, tenDollar = 0, fiveDollar = 0, twoDollar = 0, oneDollar = 0, quarter = 0, dime = 0, nickel = 0, penny = 0;
  let amt = cash - total;
  let returnAmt = {};
  while(amt >=2000){
    amt -= 2000;
    twentyDollar++;
  }
  if(twentyDollar !== 0){
    returnAmt  = { twentyDollar: twentyDollar};
  }
  while(amt >= 1000){
    amt -= 1000;
    tenDollar++;
  }
  if(tenDollar !== 0){
    returnAmt = {...returnAmt, tenDollar: tenDollar};
  }
  while(amt >= 500){
    amt -= 500;
    fiveDollar++;
  }
  if(fiveDollar !== 0){
    returnAmt = {...returnAmt, fiveDollar: fiveDollar};
  }
  while(amt >= 200){
    amt -= 200;
    twoDollar++;
  }
  if(twoDollar !== 0){
    returnAmt = {...returnAmt, twoDollar: twoDollar};
  }
  while(amt >= 100){
    amt -= 100;
    oneDollar++;
  }
  if(oneDollar !== 0){
    returnAmt = {...returnAmt, oneDollar: oneDollar};
  }
  while(amt >= 25){
    amt -= 25;
    quarter++;
  }
  if(quarter !== 0){
    returnAmt = {...returnAmt, quarter: quarter};
  }
  while(amt >= 10){
    amt -= 10;
    dime++;
  }
  if(dime !== 0){
    returnAmt = {...returnAmt, dime: dime};
  }
  while(amt >= 5){
    amt -= 5;
    nickel++;
  }
  if(nickel !== 0){
    returnAmt = {...returnAmt, nickel: nickel};
  }
  while(amt >= 1){
    amt -= 1;
    penny++;
  }
  if(penny !== 0){
    returnAmt = {...returnAmt, penny: penny};
  }
  return returnAmt;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
