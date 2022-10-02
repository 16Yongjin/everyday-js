주어진 문자열이 단순화 된 확장 ISO 형식 (ISO 8601)에서 유효한 지 확인합니다.

- '날짜'생성자를 사용하여 주어진 문자열에서 '날짜'객체를 만듭니다.
-`date.prototype.valueof ()`및`number.isnan ()`를 사용하여 생성 된 날짜 개체가 유효한지 확인하십시오.
-`date.prototype.toisoString ()`를 사용하여 날짜의 ISO 형식 문자열 표현을 원래 문자열과 비교하십시오.