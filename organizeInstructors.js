//https://gist.github.com/meghalshah210/d168f7a1368d59174bfe36323a7f13fd
const organizeInstructors = function(instructors) {
  let courseWiseInstructor = {}, web = [], ios = [], blockchain=[];
  for(let instructor of instructors){
    if(instructor.course === "iOS"){
      courseWiseInstructor["iOS"] = ios;
      courseWiseInstructor["iOS"].push(instructor.name);
    }else if(instructor.course === "Web"){
      courseWiseInstructor["Web"] = web;
      courseWiseInstructor["Web"].push(instructor.name);
    }else if(instructor.course === "Blockchain"){
      courseWiseInstructor["Blockchain"] = blockchain;
      courseWiseInstructor["Blockchain"].push(instructor.name);
    }
  }
  return courseWiseInstructor;
};
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));