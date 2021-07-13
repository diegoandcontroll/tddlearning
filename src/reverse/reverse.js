const reverse = (arr) => {
  if(arr.length === 0){
    return []
  }
  return [arr[arr.length - 1]].concat(reverse(arr.slice(0, -1)))
}

export default reverse;