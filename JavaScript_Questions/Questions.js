/* 1. find the most frequently occurring number  */
console.log("1. Find the most frequently occurring number ->\n");
const findHighestFreq = (arr) => {
    let map = {};
    for(const i of arr){
        if(map[i]){
            map[i]++;
        }
        else{
            map[i]=1;
        }
    }
    let mx = 0;
    for(const i in map){
        if(map[i] > mx){
            mx = map[i];
        }
    }
    return mx;
    // console.log(map);
};
// /* test */
const arr1 = [...'317111'];
console.log('findHighestFreq: ', findHighestFreq(arr1)); // 4: has 4 of 1

/*
  2. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
*/
console.log("2. Get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2 ->\n");
const getDiffBetweenDigonal = (matrix) => {
  let n = matrix.length;
  let d1 = 0;
  let d2 = 0;
  for(let i=0; i<n; i++){
      d1 = d1+matrix[i][i]
      d2 = d2+matrix[i][n-i-1]
  }
  // console.log(d1, d2, d1-d2)
  return Math.abs(Math.abs(d1)-Math.abs(d2))
};
// /* test */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log('getDiffBetweenDigonal: ', getDiffBetweenDigonal(matrix));

/* 3. Count the number of 3 as digit in all numbers from 0 to 50. */
console.log("3. Count the number of 3 as digit in all numbers from 0 to 50. ->\n");
const find3 = (start, end) => {
  let count = 0;
  for(let i=start; i<end; i++){
    let temp = String(i);
    // console.log(temp);
    for(j of temp){
      if (j==3){
        count++;
      }
    }
  }
  return count;
};
/* test */
console.log('find3: ', find3(0, 50)); // 15

/* 4. give a string “cvs health”, change it to “Cvs Health” */
console.log("4. Give a string “cvs health”, change it to “Cvs Health” ->\n");
const capitalFirstLetter = (str) => {
  let temp = str.trim().split(' '); 
  console.log(temp);
  for(let i=0; i<temp.length; i++){
    if(temp[i].length > 0){
      temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
    }
  }
  return temp.join(' ');
}
/* test */
const str2 = 'cvs health';
console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

/*
  5. give a str: wave
  Output: ["Wave", "wAve", "waVe", "wavE"]
*/
console.log("5. Give a str: wave; Output: ['Wave', 'wAve', 'waVe', 'wavE'] ->\n");
const capEachCharInStr = (str) => {
  let n = str.length;
  const ans = [];
  for(let i=0; i<n; i++){
    let t = str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1);
    // console.log(t);
    ans.push(t);
  }
  return ans;
}
/* test */
const str3 = 'wave';
console.log('capEachCharInStr: ', capEachCharInStr(str3));

/*
  6. give a string, only have (){}[], create a function check if the string is valid
*/
console.log("6. give a string, only have (){}[], create a function check if the string is valid ->\n");
const isValid = (str) => {
  let arr = [];
  let mp = new Map([
    [']', '['],
    ['}', '{'],
    [')', '(']
  ]);
  for(i of str){
    if(i == '[' || i=='{' || i=='('){
      arr.push(i);
    } else {
      let t = arr.pop();
      // console.log(t, mp.get(i));
      if(t != mp.get(i)){
        return false;
      }
    }
  }
  return true;
};
/* test */
console.log('isValid: ', isValid('()[{}{}]')); // true

/* 7. Fibonacci */
console.log("7. Fibonacci (Loop/Recursive) ->\n");
// Returning the whole fibonacci sequence till the nth term.
const fibonacci1 = n => {
  // for loop
  let ans = [1];
  for(let i=1; i<n; i++){
    ans.push(Number(ans.slice(-1))+Number(ans.slice(-2,-1)));
  }
  return ans;
}
// Returning only the nth term in the fibonacci sequence
const fibonacci2 = (num) => {
  // recursion
  if (num<2){
    return num;
  }
  return fibonacci2(num-1)+fibonacci2(num-2);
}
/* test */
console.log('fibonacci seq till nth term: ', fibonacci1(4), ' fibonacci nth term: ', fibonacci2(4)); // [1, 1, 2, 3, 5, 8]

/* 8. looking for most close 3 numbers to the target */
console.log("8. Looking for most close 3 numbers to the target ->\n");
const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
function findCloseNums(givenNum, givenArr, find) {
  
  let diff = givenArr.map((num) => ({
    og: num,
    d: Math.abs(num-givenNum)
  }));

  diff.sort((x,y) => x.d - y.d);

  let ans = diff.slice(0,find).map(item => (item.og));
  return ans;
}
console.log('findCloseNums: ', findCloseNums(30, givenArr, 3)); //[32, 27, 25];

/* 9. given the out string length, and how many char you have to use, create a function to generate the random string */
/*
  @param [number, number] N, K
  @return [string]
*/
console.log("Given the out string length, and how many char you have to use, create a function to generate the random string ->\n");
function createRandomStr(N, K) {
  let letters = [];
    for(let i=0; i<K; i++){
      letters.push(String.fromCharCode(97+i));
    }
    let ans = '';
    for(let i=0; i<N; i++){
      let idx = Math.floor(Math.random() * K);
      ans += letters[idx];
    }
    return ans;
}
console.log('createRandomStr: ', createRandomStr(8, 3)); // acbaabca


/* 10. sort the array by the given sequence */
console.log("10. Sort the array by the given sequence ->\n");
function sortBySeq(arr, sqs) {
  let order = {};
  for(let i=0; i<sqs.length; i++){
    order[sqs[i]] = i;
  }
  arr.sort((x,y) => order[x] - order[y]);
  return arr;
}
const sqs = 'qwertyuiopasdfghjklzxcvbnm';
console.log('sortBySeq: ', sortBySeq([...'hello'], sqs));  // ["e", "o", "h", "l", "l"];
  