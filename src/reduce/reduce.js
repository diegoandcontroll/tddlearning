const reduce = (arr, func, acc) => {
  let initialValue = acc;
  let arrCopy = arr;
  if(acc === undefined){
    initialValue = arr[0];
    arrCopy = arr.slice(1);
  }
  for(let i = 0; i < arrCopy.length; i++){
    initialValue = func(initialValue, arrCopy[i], i, arrCopy);
  }
  return initialValue;
}

export default reduce;