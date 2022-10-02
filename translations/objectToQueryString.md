[수정 필요]
주어진 객체의 키 값 쌍에서 쿼리 문자열을 생성합니다.

-`queryparameters '에서 쿼리 문자열을 만들려면`array.prototype.reduce ()``on 객체.entries ()`를 사용하십시오.
-`symplic '을``querystring'의 길이를 기준으로`?`또는`&`을 결정하십시오.
- 문자열 인 경우에만`val '을`querystring`을 연결하십시오.
-`QueryString '또는`QueryParameters'가 거짓일 때 'QueryString'또는 빈 문자열을 반환하십시오.