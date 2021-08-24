const repeatingNumbers = function (data) {
  let output = "";
  //loop though outer array
  for (const array of data) {
    // console.log(array);
    if (data.length === 1) {
      //establish value to repeat and number of reps
      const num = array[0];
      const reps = array[1];

      let str = `${num}`;
      return str.repeat(reps);
    } else {
      const num = array[0];
      const reps = array[1];
      // console.log(array)
      let str = `${num}`;
      superStr = str.repeat(reps);
      output += superStr.concat(", ")
    }
    
  }

  //confirm that output is string and print
  return output.slice(0, -2);
};

// console.log(repeatingNumbers([[1, 10]]));
console.log(repeatingNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatingNumbers([[17, 34]]));
