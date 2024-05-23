const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

  const flavArr = userInputString.split(",");
  
  const converToObj = function(arr) {
    const flavObj = {}; 
    for (let i = 0; i < arr.length; i++) {   
      if (flavObj[arr[i]] === undefined) {  
        flavObj[arr[i]] = 1;  
      } else {
        flavObj[arr[i]] += 1; 
      }
    };
  return flavObj;
  }

  console.table(converToObj(flavArr));