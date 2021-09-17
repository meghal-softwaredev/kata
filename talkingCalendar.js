//https://gist.github.com/meghalshah210/c872520762d89e266c6cc73185db6aa4
const talkingCalendar = function(date) {
  const d = new Date(date);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const year = d.getFullYear();
  const monthName = months[d.getMonth()];
  const day =  d.getDate();
  let resultDate = '', add = "";
  if(day === 1 || day === 21 || day === 31){
    add = "st";
  }else if(day === 2 || day === 22){
    add = "nd";
  }else if(day === 3 || day === 23){
    add = "rd";
  }else{
    add = "th";
  }
  resultDate = `${monthName} ${day}${add}, ${year}`;
  return resultDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
