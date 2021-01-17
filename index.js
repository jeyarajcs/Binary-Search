function binarySearch(array, item){
  let low = 0;
  let high = array.length - 1;
  while(low<=high){
    let mid = Math.floor((low + high)/2);
    if(array[mid] == item){
      return mid;
    }else if(array[mid] < item){
      low = mid + 1;
    }else{
      high = mid - 1;
    }
  }
  return -1;
}

const array = [1,2,3,4,6,8,10,45,67,68,78];
console.log(binarySearch(array, 2));