양식 요소 세트를 쿼리 문자열로 인코딩합니다.

-`formdata` 생성자를 사용하여 HTML` form`을`formdata '로 변환하십시오.
-`array.from ()`를 사용하여 배열로 변환하고 맵 함수를 두 번째 인수로 전달하십시오.
- 각 필드의 값을 인코딩하려면`array.prototype.map () 및`encodeUricomponent ()`를 사용하십시오.
- 적절한 쿼리 문자열을 생성하기 위해 적절한 인수와 함께`array.prototype.join ()`를 사용하십시오.