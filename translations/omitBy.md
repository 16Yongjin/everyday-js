[수정 필요]
주어진 함수가 거짓을 반환하는 객체의 키에 해당하는 키 값 쌍을 생략합니다.

-`object.keys ()`및`array.prototype.filter ()`를 사용하여`fn`가 진실한 값을 반환하는 키를 제거하십시오.
-`array.prototype.reduce ()`를 사용하여 필터링 된 키를 해당 키 값 쌍의 객체로 다시 변환하십시오.
- 콜백 함수는 두 가지 인수로 호출됩니다. (값, 키).