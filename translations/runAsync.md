[수정 필요]
[Web Worker] (https://developer.mozilla.org/en-us/docs/web/api/web_workers_api/using_web_workers)을 사용하여 별도의 스레드에서 함수를 실행하여 장기 실행 기능이 UI를 차단하지 않도록합니다.

-`blob '객체 URL을 사용하여`worker'를 만들고, 그 내용은 제공된 함수의 줄무늬 버전이어야합니다.
- 함수를 다시 호출하는 반환 값을 즉시 게시하십시오.
-`Promise '를 반환하고,`onmessage'및`onerror '이벤트를 듣고, 작업자로부터 게시 된 데이터를 해결하거나, 오류를 던지십시오.