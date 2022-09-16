/*
  1. 브라우저에서는 <input> 과 같은 DOM이나, prompt 같은 BOM을 통해 사용자로부터 편하게 입력받을 수 있지만 런타임에서는 약간 다릅니다.

  2. 백엔드에서는, 아무런 통역장치 없이 '컴퓨터'와 프로그래밍 언어를 사이에 두고 대화하는 것이기 때문에, '입력'이라는 것 자체가 이벤트로 처리 됩니다.
  node.js에서 이벤트는 .on()이라는 메서드로 마련되어 있습니다. addEventListener()는 DOM API, BOM API를 위한 이벤트 핸들러였다면, node.js에선 더욱 간결하게 'on' 이라는 이름입니다. 첫번째 인자는 문자열, 두번째 인자는 콜백함수인 점을 확인하면 addEventListener()와 매우 닯았습니다.

  3. process라는 객체에서 무언가 작성하는 것을 확인 할 수 있는데, 여기서 프로세스는 'node.js' 소프트웨어를 말합니다. 다행히 언어는 동일하게 자바스크립트이기 때문에, 객체접근법으로 이름 모를 어떤 속성(property)에 점표기법으로 접근하는 것을 확인 할 수 있습니다.
  
  4.하위로 stding 이라는 객체에 접근 한 것을 확인 할 수 있는데, 직역하면 '표준입력(standard input)'의 준말입니다. 다른 프로그래밍 언어나, OS에 직접 접근할때 흔하게 사용하는 명령용어 이지만, 개발자 편하게 축약해 놓았을뿐, '입력할게' 정도로 비유할 수 있습니다.

  5. stdin 이라는 입력기능을 하는 객체에 on() 이라는 이벤트를 '설치'하여 발생시킨 구조라고 할 수 있습니다. 그야말로 컴퓨터와 밀접하게 마주 앉아있기 때문에 입력도 '이벤트'를 일으켜 진행하는 느낌입니다.
*/

console.log('work test'); // 파일 만들때 습관처럼 하는 테스트입니다.

// unicode set, 해당 메서드를 선언하지 않으면 버퍼(buffer) 형식의 데이터를 받습니다.
process.stdin.setEncoding('utf8');

// console.log(process.stdin.setEncoding('utf8'))

// event
process.stdin.on('data', function(data) {
  console.time('monitor'); // 이벤트가 시작되자마자 시간을 잽니다.
  console.log('방금 입력받았습니다.');
  console.log('당신이 입력한 값은 혹시 이것입니까? :', data);
  console.log('지금 문자열변수에 입력받은 값을 넣었습니다.');
  console.timeEnd('monitor'); // 종료직전 걸린 시간을 콘솔에 기록을 남겨줍니다.
  process.exit(); // 입력이벤트를 종료합니다.
})