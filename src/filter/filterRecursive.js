'use strict';
const filter  = (arr, func) => {
  return (function FilterInternal (arrayInternal, counter){
    const [head, ...finalArray] = arrayInternal;
    return arrayInternal.length === 0
    ?[]
    :(func(head, counter, arr) ? [head] : []).concat(FilterInternal(finalArray, counter + 1))
  })(arr,0)
}

export default filter;
