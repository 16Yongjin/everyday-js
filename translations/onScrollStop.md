사용자가 스크롤을 중지 할 때마다 콜백을 실행합니다.

-`eventTarget.addeventListener ()`를 사용하여` 'scroll' '이벤트를 들으십시오.
-`settimeout ()`를 사용하여 주어진`콜백 '을 호출 할 때까지`150` ms를 기다립니다.
-`reclimeout ()`를 사용하여 새로운` '스크롤'이벤트가`150` ms에서 발사되면 타임 아웃을 지우십시오.