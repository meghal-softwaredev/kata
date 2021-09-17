//https://gist.github.com/meghalshah210/49c13d0203d92f860025e509f3749efc
const whereCanIPark = function (spots, vehicle) {
  let row = 0,col = 0;
  for(row = 0;row < spots.length;row++){
    for(col = 0;col < spots[row].length;col++){
      if(spots[row][col] === 'R' && vehicle === "regular"){
        return [row, col];
      }else if(vehicle === "small"){
        if(spots[row][col] === 'S'){
          return [row, col];
        }else if(spots[row][col] === 'R'){
          return [row, col];
        }
      }else if(vehicle === "motorcycle"){
        if(spots[row][col] === 'M'){
          return [row, col];
        }else if(spots[row][col] === 'S'){
          return [row, col];
        }else if(spots[row][col] === 'R'){
          return [row, col];
        }
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))