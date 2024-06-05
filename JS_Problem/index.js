/* 
1. Concatenate the two arrays ->
*/
const names = [
    { userid: 2, name: "Velen" },
    { userid: 56, name: "Illidan" },
    { userid: 23, name: "Muradin" },
    { userid: 12, name: "Sylvanas" },
    { userid: 44, name: "Cenarius" },
    { userid: 4, name: "Gul'Dan" },
  ];
  const roles = [
    { userid: 2, role: "Mage" },
    { userid: 4, role: "Worlock" },
    { userid: 56, role: "Demon Hunter" },
    { userid: 66, role: "Druid" },
    { userid: 87, role: "Shaman" },
    { userid: 12, role: "Hunter" },
  ];
/* Expected Output -
[
  { userid: 2, name: "velen", role: "Mage"},
  { userid: 44, name: "Cenarius", role: null},
]
*/
const join = function (arr1, arr2){
  let ans = [];
  arr1.forEach(nameObj => {
    let matchRole = arr2.find((roleObj) => roleObj.userid === nameObj.userid);
    ans.push({
      userid: nameObj.userid,
      name: nameObj.name,
      role: matchRole ? matchRole.role : null,
    });
  });
  return ans;
}
// test
console.log("Output 1 => \n", join(names, roles));

//###########################################################################################################

/*
2. Write a function that takes a initial number and return another function 
that takes multiple callback functions as parameters and call those callback functions in a sequence as well. 
The previous result of callback function will pass to the next callback as parameter 
and return the final result for the last callback function ->
*/
const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10
console.log("\nOutput 2 => ", runAll(4)(callback1, callback2, callback3)); // 10
function runAll(initNum) {
  return function(...args) {
    //  4 [cb1, cb2, cb3]
    //  cb1(4) [cb2, cb3] > cb2(cb1(4)) [cb3] > cb3(cb2(cb1(4))) []
    return args.reduce((cbx, cby) => { return cby(cbx)}, initNum);
  }
}

//###########################################################################################################

/*
3. Change the data ->
*/
source = [
  ['Foley', 'Chemicals', 'CHEM'],
  ['Foley', 'Chemicals', 'CTO'],
  ['Foley', 'Chemicals', 'LK'],
  ['Foley', 'Chemicals', 'R8'],
  ['Foley', 'Chemicals', 'WT'],
  ['Foley', 'Finishing', 'LB2'],
  ['Foley', 'Finishing', 'LB4'],
  ['Foley', 'Finishing', 'RW1'],
  ['Foley', 'Finishing', 'RW2'],
  ['Foley', 'Line 3', 'LN3'],
  ['Foley', 'Line 3', 'Production Process'],
  ['Foley', 'Line 4', 'LN4'],
  ['Foley', 'Line 4', 'Prod Process'],
  ['Foley', 'Mill General', 'Wastewater Treatment'],
  ['Foley', 'Powerhouse', 'BB1'],
  ['Foley', 'Powerhouse', 'BB2'],
  ['Foley', 'Powerhouse', 'EV5'],
  ['Foley', 'Powerhouse', 'FWE'],
  ['Foley', 'Powerhouse', 'PB1'],
  ['Foley', 'Powerhouse', 'PB2'],
  ['Foley', 'Powerhouse', 'RB2'],
  ['Foley', 'Powerhouse', 'RB3'],
  ['Foley', 'Powerhouse', 'RB4'],
  ['Foley', 'Powerhouse', 'TG2'],
  ['Foley', 'Powerhouse', 'TG3'],
  ['Foley', 'Powerhouse', 'TG4'],
];
/*
Expected Output - change the data: 
example: [['Foley', 'Powerhouse', 'TG3', 'Bright']...] (source) --->
[{
name:'Foley',
children: [
  {
    name: 'Powerhouse',
    children: [
      {
        name: 'TG3',
        children: [
          {name: 'Bright', children: []}
        ]
      }
    ]
  }
] 
},
...]
*/

function change(source) {
  const ans = [];

  source.forEach(obj => {
    let curr = ans;

    obj.forEach((ele, idx) => {
      let exist = curr.find(item => item.name === ele);

      if (!exist) {
        exist = {
          name:ele,
          children: []
        }
        curr.push(exist);
      }

      if (idx < obj.length - 1) {
        curr = exist.children;
      }

    });
  });

  return ans;
}
//
console.log("\nOutput 3 => \n", JSON.stringify(change(source),null,2));