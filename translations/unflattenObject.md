[수정 필요]
열쇠 경로가있는 물체를 플랫 트.

- 평평한 경로를 리프 노드로 변환하려면 중첩`array.prototyp.reduce ()`를 사용하십시오.
-`string.prototype.split ()`를 사용하여 각 키를 도트 구분 기호 및`array.prototyp.reduce ()로 분할하여 키에 대한 개체를 추가하십시오.
- 전류 축적기에 이미 특정 키에 대한 값이 포함 된 경우 다음 축합기로 값을 반환하십시오.
- 그렇지 않으면 적절한 키 값 쌍을 축합기 개체에 추가하고 값을 축합기로 반환하십시오.