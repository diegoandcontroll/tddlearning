'use strict';
const map = (arr = [], func = (item) => item) => {
  return (function mapInternal(arrayInternal, counter){
    const [initialItem, ...finallyItem] = arrayInternal;
    return arrayInternal.length === 0 ? [] : [
      func(initialItem, counter, arr),
      ...mapInternal(finallyItem, counter + 1)
    ];
  })(arr, 0);
}

export default map;