//https://gist.github.com/meghalshah210/8cbebf56316be83ced819d416e23c92e
const blocksAway = function(directions) {
  let direction = '', prevDirection = '', moveAxis = '', moves = 0, k = 0, x = 0, y = 0, finalDirection = {};
  while(k < directions.length){
    direction = directions[k++];
    moves = directions[k++];
    if(direction === 'right'){
      if(x === 0 && prevDirection === ''){
        x = x + moves;
        moveAxis = 'x';
      }else if(prevDirection === 'left' && moveAxis === 'y'){
        x = x + moves;
        moveAxis = 'x';
      }else if(prevDirection === 'left' && moveAxis === 'x'){
        y = y + moves;
        moveAxis = 'y';
      }else if(prevDirection === 'right' && moveAxis === 'x'){
        y = y - moves;
        moveAxis = 'y';
      }else if(prevDirection === 'right' && moveAxis === 'y'){
        x = x - moves;
        moveAxis = 'x';
      }
      prevDirection = 'right';
    }else if(direction === 'left'){
      if(y === 0 && prevDirection === ''){
        y = y + moves;
        moveAxis = 'y';
      }else if(prevDirection === 'left' && moveAxis === 'y'){
        x = x - moves;
        moveAxis = 'x';
      }else if(prevDirection === 'left' && moveAxis === 'x'){
        y = y - moves;
        moveAxis = 'y';
      }else if(prevDirection === 'right' && moveAxis === 'x'){
        y = y + moves;
        moveAxis = 'y';
      }else if(prevDirection === 'right' && moveAxis === 'y'){
        x = x + moves;
        moveAxis = 'x';
      }
      prevDirection = 'left';
    }
  }
  finalDirection["east"] = x;
  finalDirection["north"] = y;
  return finalDirection;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
