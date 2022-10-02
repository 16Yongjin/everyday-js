[수정 필요]
문자열에서 패턴의 마지막 발생을 대체합니다.

-`typeof '를 사용하여`Pattern`이 문자열인지 정규 표현인지를 결정하십시오.
- '패턴'이 문자열 인 경우 '매치'로 사용하십시오.
- 그렇지 않으면`regeexp` 생성자를 사용하여`pattern '의`regexp.prototype.source`를 사용하여 새로운 정규 표현식을 만들고`'g '플래그를 추가하십시오. `string.prototype.match ()`및`array.prototype.slice ()`를 사용하여 마지막 일치를 얻으십시오.
- 문자열에서 일치의 마지막 발생을 찾으려면`string.prototype.lastindexof ()`를 사용하십시오.
- 일치가 발견되면`string.prototype.slice ()`및 템플릿 리터럴을 사용하여 일치하는 하위 문자열을 주어진`대체 '로 바꾸십시오.
- 일치가 발견되지 않으면 원래 문자열을 반환하십시오.