/*
  순서 기반인 동기방식과 실행 기반인 비동기 방식은, 런타임이 알아서 순식간에 실행을 끝내버리기 때문에 직관의 한계가 있는 개발자에게는 상당히 헷갈리고 어렵기로 정평이 난 개념이다.

  코드 작성은 모두 '동기'처리가 되지만, 일부 특정 내장함수는 '비동기'처리가 조건이기 때문에, 엉뚱한 실행을 종종 목격하곤 한다. 디버거(debugger)의 유연한 활용도 필요하면서, 본질적인 특성도 살펴볼 필요가 있다.

  일반적인(프론트) javascript는 비동기 처리가 setTimeout, setInterval 정도로 국한되지만, node.js에서는 같은 성격의 함수도 동기와 비동기 두개를 나누어 지원하는 것이 상당히 많은 특징때문에 해당 개념은 자바스크립트 엔진의 본질적인 처리 방식과 매우 밀접하며, node.js는 거의 대부분이 실행 기반인 '비동기' 처리를 기본으로 하고 있어, 정성들여서 익힐 필요성이 상당히 높다.
*/

let first = setTimeout(() => {
  console.log('첫번째 setTimeout입니다. 3초뒤에 실행됩니다.');
}, 3000);

let second = setTimeout(() => {
  console.log('두번째 setTimeout입니다. 2초뒤에 실행됩니다.');
}, 2000);

let third = setTimeout(() => {
  console.log('세번째 setTimeout입니다. 1초뒤에 실행됩니다.');
}, 1000);

// let first = setTimeout(() => {
//   console.log('first');
//   let second = setTimeout(() => {
//     console.log('second');
//     let third = setTimeout(() => {
//       console.log('third');
//       let fourth = setTimeout(() => {
//         console.log('fourth');
//         let fifth = setTimeout(() => {
//           console.log('fifth');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 2000);
// }, 3000);

// let first = setTimeout(() => {

// }, 3000);

// function exe(resolve, reject) {

// }

// let test = new Promise((resolve, reject) => {
//   console.log(typeof resolve);
//   console.log(typeof reject);
//   console.dir(resolve);
// });
// console.dir(test);