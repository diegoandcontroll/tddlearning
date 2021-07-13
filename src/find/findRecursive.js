const find = (arr, func) => {
  return (function findInternal(arrayInternal, counter){
    const [head, ...finalItem] = arrayInternal;
    return arrayInternal.length === 0
    ? undefined
    : func(head, counter, arr)
      ? head
      : findInternal(finalItem, counter + 1)
  })(arr, 0)
}

export default find;