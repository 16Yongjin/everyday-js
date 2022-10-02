Pub/Sub ([publish-subscribe] (https://en.wikipedia.org/wiki/publish%E2%80%93subscribe_pattern))) 이벤트 허브를`emit`,`on` 및`onfl` 메소드를 만듭니다.

-`객체 .create ()`의 인수와 함께`객체.
-`emit '의 경우,'이벤트 '인수를 기반으로 핸들러 배열을 해결 한 다음 데이터를 인수로 전달하여`array.prototype.foreach ()`를 사용하여 각각을 실행하십시오.
-`on '의 경우, 이벤트가 아직 존재하지 않는 경우 이벤트 배열을 만듭니다. 그런 다음`array.prototype.push ()`를 사용하여 핸들러를 추가하십시오.
- 배열로.
-`off`의 경우`array.prototype.findindex ()`를 사용하여`atray.prototype.splice ()`을 사용하여 핸들러의 인덱스를 찾아 제거하십시오.