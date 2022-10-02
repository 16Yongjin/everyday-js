[수정 필요]
주어진 업무 일을 추가 한 후 날짜를 계산합니다.

-`array.from ()`를 사용하여 추가 할 영업일의`count '와 같은`길이'가있는 배열을 구성하십시오.
-`array.prototype.reduce ()`를 사용하여`startDate`에서 시작하여`date.prototype.getDate ()`및`date.prototype.setDate ()`을 사용하여 배열을 반복합니다.
- 현재 '날짜'가 주말에 있으면 하루나 이틀을 추가하여 평일에 다시 업데이트하십시오.
- ** 참고 : **는 공식 휴가를 고려하지 않습니다.