// Input array for testing
const arr = [2,5,9,7,8,1,3,4,0]
// const arr = [0,1,2,3,4,5,6,7,8,9]
console.log("Testing array = ", arr, '\n');
/*
1. Filter 
*/
console.log('1. Filter function ->');
function filterFunc(arr, cb) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
          ans.push(arr[i]);
        }
      }
      return ans;
}
// test
const filt = (n) => {return n%2;}
console.log('MyFilter - ',filterFunc(arr, filt)); 
console.log('Builtin  - ',arr.filter(filt));

/*
2. Map
*/
console.log('\n2. Map function ->');
function mapFunc(arr, cb) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(cb(arr[i]));
  }
  return ans;
}
// test
const mp = (n) => {return 2*n;}
console.log('MyMap    - ',mapFunc(arr, mp)); 
console.log('Builtin  - ',arr.map(mp));

/*
3. Includes
*/
console.log('\n3. Includes function ->');
function includesFunc(arr, num) {
  for(let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
// test
let num = 5;
console.log('MyIncludes - ',includesFunc(arr,num)); 
console.log('Builtin    - ',arr.includes(num));

/*
4. IndexOf
*/
console.log('\n4. IndexOf function ->');
function indexOfFunc(arr, num) {
  for(let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
// test
num = 8;
console.log('MyIndex  - ',indexOfFunc(arr, num)); 
console.log('Builtin  - ',arr.indexOf(num));

/*
5. Reduce
*/
console.log('\n5. Reduce function ->');
function reduceFunc(arr, cb) {
  let ans = arr[0];
  for(let i = 1 ; i < arr.length; i++) {
    ans = cb(ans,arr[i]);
  }
  return ans;
}
// test
const rd = (x,y) => {return x+y};
console.log('MyReduce - ',reduceFunc(arr, rd)); 
console.log('Builtin  - ',arr.reduce(rd));

/*
6. Slice
*/
console.log('\n6. Slice function ->');
function sliceFunc(arr, beg, end) {
  // console.log('e-  ',end);
  if ( beg < 0 ) { beg = arr.length + beg; }
  if ( end < 0 ) { end = arr.length + end; }
  if ( typeof(end) == "undefined" ) { end = arr.length; }
  let ans = [];
  // console.log(beg, end);
  if ( beg > arr.length || beg > end ) { return ans; }
  for( let i = beg; i < end && i < arr.length; i++ ) {
    ans.push(arr[i]);
  }
  return ans;
}
// test
let beg = 3;
let end = 6;
console.log('MySlice  - ',sliceFunc(arr, beg, end)); 
console.log('Builtin  - ',arr.slice(beg, end));
/*
7. Splice
*/
console.log('\n7. Splice function ->');
function spliceFunc(arr,st,dc,...item) {
  if ( st < 0 ) { st = arr.length + st; }
  if (st >= arr.length) {
    st = arr.length;
  }
  if (dc === undefined) {
    dc = arr.length - st;
  }
  dc = Math.max(0,Math.min(dc, arr.length - st));
  let ans = [];
  ans = sliceFunc(arr, 0, st);
  ans.push(...items);
  ans.push(...sliceFunc(arr, st+dc));
  console.log('Modified arr  => ', ans);
  return sliceFunc(arr,st,st+dc);
}
// test
let start = 7;
let deleteCount = 1;
const items = [3];
console.log('MySplice  - ',spliceFunc(arr, start, deleteCount, ...items)); 
console.log('Builtin  - ',arr.splice(start, deleteCount, ...items), arr);