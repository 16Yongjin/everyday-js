[수정 필요]
기능을 카레.

- 재귀를 사용하십시오.
- 제공된 인수 (`args`)가 충분한 경우 전달 된 기능`fn`을 호출하십시오.
- 그렇지 않으면`function.prototype.bind ()`를 사용하여 나머지 인수를 기대하는 Curried 함수`fn`을 반환하십시오.
- 가변 수의 인수 (variadic 함수, 예를 들어`math.min ()`)을 수락하는 함수를 카레를 만들려면 인수 수를 두 번째 매개 변수`arity '로 전달할 수 있습니다.