[수정 필요]
쉼표로 구분 된 값 (CSV) 문자열을 2D 배열의 객체로 변환합니다.
문자열의 첫 번째 행은 제목 행으로 사용됩니다.

-`array.prototype.indexof ()`를 사용하여 첫 번째 Newline 문자 (`\ n`)을 찾으십시오.
-`array.prototype.slice ()`를 사용하여 첫 번째 행 (제목 행) 및`string.prototype.split ()`를 제거하여 제공된 'Delimiter'를 사용하여 값으로 분리하십시오.
-`string.prototype.split ()`를 사용하여 각 행에 문자열을 만듭니다.
-`string.prototype.split ()`를 사용하여 제공된 'Delimiter'를 사용하여 각 행의 값을 분리하십시오.
-`array.prototype.reduce ()`를 사용하여 각 행 값에 대한 객체를 만들고 키는 제목 행에서 구문 분석됩니다.
-`,`의 기본 구분기를 사용하려면 두 번째 인수`Delimiter '를 생략하십시오.