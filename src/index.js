// import * as bootstrap from 'bootstrap';
// import  test from './json/cards.json';
// import {
//   Tooltip as Tooltip,
//   Toast as Toast,
//   Popover as Popover,
// } from 'bootstrap';

// const cards =()=>{
//     console.log(test);
//  const tester = test.map(el=>{
//     const tt=`gsjfh ${el.id},fffgf ${el.description}`
//     return tt
// }
//     )
//     console.log(tester);
// }

// cards()

// const loadGrain = function (levels) {
//   let l = 0;
//   let r = levels.length - 1;
//   let currentLevel = 0;
//   let totalGrain = 0;
//   while (l < r) {
//     if (levels[l] < levels[r]) {
//       if (levels[l] > currentLevel) currentLevel = levels[l];
//       else totalGrain += currentLevel - levels[l];
//       l += 1;
//     } else {
//       if (levels[r] > currentLevel) currentLevel = levels[r];
//       else totalGrain += currentLevel - levels[r];
//       r -= 1;
//     }
//   }
//   console.log(`test(${levels}) ---->`, totalGrain);
//   return totalGrain;
// };

// loadGrain([4, 1, 3]);
// loadGrain([2, 1, 5, 2, 7, 4, 10]);
// loadGrain([2, 0, 1, 5, 2, 7]);
// loadGrain([2, 4, 2]);
// loadGrain([3, 7]);
// loadGrain([]);

//   let accom = [];

//   const sumLvl = levels.reduce((pevLevels, levl) => {
//     return (pevLevels += levl);
//   }, 0);

//   const maxLevel = Math.round(sumLvl / levels.length);

//   levels
//     .filter(lv => lv < maxLevel)
//     .forEach(element => accom.push(maxLevel - element));

//   maxAmountGrain = accom.reduce((pevLevels, levl) => (pevLevels += levl), 0);

//   console.log(`test(${levels}) ---->`, maxAmountGrain);
//   return maxAmountGrain;
