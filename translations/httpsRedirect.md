현재 HTTP에있는 경우 페이지를 HTTPS로 리디렉션합니다.

-`location.protocol’을 사용하여 현재 사용중인 프로토콜을 사용하십시오.
-HTTPS가 아닌 경우`location.replace ()`를 사용하여 기존 페이지를 HTTPS 버전의 페이지로 바꾸십시오.
-`location.href`를 사용하여 전체 주소를 얻고`string.prototype.split ()`로 분할하고 URL의 프로토콜 부분을 제거하십시오.
- 뒤로 버튼을 누르면 히스토리에서 대체 된대로 HTTP 페이지로 다시 가져 오는 것은 아닙니다.