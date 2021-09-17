//https://gist.github.com/meghalshah210/7e9ad7893bc4e9d97a343ce537177f37
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
function generateBoard(whiteQueen, blackQueen){
  const [row1, col1] = whiteQueen;
  const [row2, col2] = blackQueen;
  let board = [];
  for(let i = 0; i < 8; i++){
    board[i] = [];
    for(let j = 0;j < 8; j++){
      if(i === row1 && j === col1){
        board[i][j] = 1;
      }else if(i === row2 && j === col2){
        board[i][j] = 1;
      }else{
        board[i][j] = 0;
      }
    }
  }
  return board;
}
function queenThreat(generatedBoard){
  let diagonal = {diagonalElements: []};
  const [row1, col1] = whiteQueen;
  const [row2, col2] = blackQueen;
  let [row, col] = whiteQueen;
  while(col < 7){
    [...diagonal.diagonalElements, diagonal.diagonalElements.push([++row,++col])];
  }
  let [row4, col4] = whiteQueen;
  while(col4 > 0){
    [...diagonal.diagonalElements, diagonal.diagonalElements.push([++row4,--col4])];
  }
  const iterator = diagonal.diagonalElements.values();
  for (const value of iterator) {
    if(JSON.stringify(value) === JSON.stringify(blackQueen)){
      return true;
    }
  }
  if(row1 === row2 || col1 === col2){
    return true;
  } 
  return false;
}
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));