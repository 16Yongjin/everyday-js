[수정 필요]
객체 또는 배열에서 모든 거짓 값을 깊이 제거합니다.

- 재귀를 사용하십시오.
- 희소 배열을 피하기 위해`array.isarray ()`,`array.prototyp.filter ()`및`boolean``를 사용하여 반복 가능한 데이터를 초기화하십시오.
-`object.keys ()`및`array.prototype.reduce ()`를 사용하여 각 키를 적절한 초기 값으로 반복하십시오.
-`boolean '을 사용하여 각 키의 값의 진실성을 결정하고 그것이 진실한 경우 축적기에 추가하십시오.
-`typeof`를 사용하여 주어진 값이`객체 '인지를 결정하고 함수를 다시 호출하여 깊이 압축하십시오.