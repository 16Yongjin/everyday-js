가능하면 흰색 스페이스를 존중하여 지정된 길이까지 문자열을 자릅니다.

-`string.prototype.length`가`lim '과 크거나 같은지 결정하십시오. 그렇지 않다면, 그것을 반환하십시오.
-`string.prototype.slice ()`및`string.prototype.lastIndexof ()`를 사용하여 원하는`lim '아래의 마지막 공간의 색인을 찾으십시오.
-`string.prototype.slice ()`를 사용하여 가능한 경우 whitespace를 존중하고 끝에`ending`을 추가하십시오.
- 세 번째 인수 인`ending`을 생략하여` '...'`의 기본 종료를 사용하십시오.