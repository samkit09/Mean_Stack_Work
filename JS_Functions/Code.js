/*
1. Filter 
*/
console.log('1. Filter function ->\n');
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
console.log('Filter - ',filterFunc([2,5,9,7,8,1,3,4,0], (n) => {return n%2;}));

/*
2. Map
*/
console.log('2. Map function ->\n');
function mapFunc(arr) {

}
// test
console.log('');

/*
3. Includes
*/
console.log('3. Includes function ->\n');
function includesFunc(arr) {

}
// test
console.log('');

/*
4. IndexOf
*/
console.log('4. IndexOf function ->\n');
function indexOfFunc(arr) {

}
// test
console.log('');

/*
5. Reduce
*/
console.log('5. Reduce function ->\n');
function reduceFunc(arr) {

}
// test
console.log('');

/*
6. Slice
*/
console.log('6. Slice function ->\n');
function sliceFunc(arr) {

}
// test
console.log('');

/*
7. Splice
*/
console.log('7. Splice function ->\n');
function spliceFunc(arr) {

}
// test
console.log('');
