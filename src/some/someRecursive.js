'use strict';

const some = (arr, func) => {
  return (function someInternal(arrayInternal, counter){
    const [head, ...finallyArray] = arrayInternal;
    return arrayInternal.length === 0
    ? false
    : func(head, counter, arr)
      ? true
      : someInternal(finallyArray, counter + 1)
  })(arr, 0)
}

export default some;