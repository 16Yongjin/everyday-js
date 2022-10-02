[수정 필요]
최소한 'ms` milliseconds가 마지막 호출 이후 경과 할 때까지 제공된 기능을 호출하는 데 지연되는 Defounced 함수를 만듭니다.

- Defounced 함수가 호출 될 때마다`cleartimeout ()`를 사용하여 현재 보류중인 시간 초과를 지우십시오. `settimeout ()`를 사용하여 최소한`ms` milliseconds가 경과 할 때까지 함수를 호출하는 새로운 시간 초과를 만듭니다.
-`function.prototype.apply ()`를 사용하여`this '컨텍스트를 함수에 적용하고 필요한 인수를 제공하십시오.
- 두 번째 인수 인`ms`를 생략하여`0` ms의 기본값으로 타임 아웃을 설정하십시오.