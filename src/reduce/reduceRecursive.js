const isInitialValueUndefined = (initialValue) => initialValue === undefined;
const reduce = (arr, func, acc) => {
  const initialValue = isInitialValueUndefined(acc) ? arr[0] : acc;
  const arrCopy = isInitialValueUndefined(acc) ? arr.slice(1) : arr;
  return (function reduceInternal(accInternal, arrInternal, counter) {
    const [head, ...finalItem] = arrInternal;
    return arrInternal.length === 0 
    ? accInternal
    : reduceInternal(func(accInternal, head, counter, arrCopy), finalItem, counter + 1); 
  })(initialValue, arrCopy, 0)
}

export default reduce;