[수정 필요]
객체 배열을``열 '지정된'열 '만 포함하는 쉼표로 구분 된 값 (CSV) 문자열로 변환합니다.

-`array.prototype.join ()`를 사용하여`columns`의 모든 이름을 결합하여 제공된 'Delimiter'를 사용하여 첫 번째 행을 만듭니다.
-`array.prototype.map ()`및`array.prototype.reduce ()`를 사용하여 각 객체에 대한 행을 만듭니다. 비어있는 값을 빈 문자로 대체하고 '열'에서 값 만 대체합니다.
-`array.prototype.join ()`를 사용하여 모든 행을 문자열에 결합하여 각 행을 Newline (`\ n`)으로 분리하십시오.
-`, ','`의 기본 구분 기자를 사용하려면 세 번째 인수 'Delimiter'를 생략하십시오.