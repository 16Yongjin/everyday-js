주어진 모든 URL 세그먼트를 함께 결합 한 다음 결과 URL을 정규화합니다.

-`string.prototype.join ()`를 사용하여 URL 세그먼트를 결합하십시오.
-String.prototype.replace ()`다양한 regexps로 호출하여 결과 URL을 정규화하기 위해 일련의`string.prototype.replace ()`호출을 사용합니다 (이중 슬래시 제거, 프로토콜에 대한 적절한 슬래시 추가, 매개 변수 전에 슬래시를 제거하고 매개 변수를`& '`와 결합하고 먼저 정규화하십시오. 매개 변수 구분자).