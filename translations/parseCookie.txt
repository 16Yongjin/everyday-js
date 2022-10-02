HTTP 쿠키 헤더 스트링을 구문 분석하여 모든 쿠키 이름 값 쌍의 개체를 반환합니다.

-`string.prototype.split ()`를 사용하여 키 값 쌍을 서로 분리하십시오.
- 각 쌍의 값과 키를 분리하려면`array.prototype.map () 및`string.prototype.split ()`를 사용하십시오.
-`array.prototype.reduce ()`및`decodeUricomponent ()`를 사용하여 모든 키 값 쌍이있는 개체를 만듭니다.