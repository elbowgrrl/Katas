const talkingCalendar = function(date) {
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  const day = date.slice(8, 10).replace("0", "");
  // console.log(`month${month}, year${year}, day${day}`);

  //prep month
  let monthString = "";
  if (month === "12") {
    monthString = "December"
  };
  if (month === "11") {
    monthString = "November"
  };
  if (month === "08") {
    monthString = "August"
  }; //you get the idea

  //prep day
  let dayString = "";
  if (day === "1") {
    dayString += `${day}st`
  } else if (day === "2") {
    dayString += `${day}nd`
  } else if (day === "3") {
    dayString += `${day}rd`
  } else {
    dayString += `${day}th`
  };

  return `${monthString} ${dayString}, ${year}`
};  

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));