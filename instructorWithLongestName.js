//https://gist.github.com/meghalshah210/12cf818fec80605052be0dd313e29084
const instructorWithLongestName = function(instructors) {
let length = 0, nameLength = [];
  for(let i = 0;i < instructors.length;i++){
    nameLength[i] = instructors[i].name.length;
  }
  length = Math.max(...nameLength);
  for(let i = 0;i < instructors.length;i++){
    if(nameLength[i] === length){
      return instructors[i];
    }
  }
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));