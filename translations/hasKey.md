[수정 필요]
대상 값이 JSON 객체에 존재하는지 확인합니다.

- '키'가 비어 있지 않은지 확인하고`array.prototype.every ()`를 사용하여 객체의 내부 깊이에 대한 키를 순차적으로 점검하려면`obj`를 사용하십시오.
-`object.property.hasownproperty ()``obj`에 현재 키가 없거나 객체가 아닌지 확인하려면`object.prototype.hasownproperty ()`를 사용하십시오.
- 그렇지 않으면 다음 반복에서 사용할 키의 값을`obj`에 할당하십시오.
- 주어진 키 목록이 비어 있으면``false`.