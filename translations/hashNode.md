[수정 필요]
[SHA-256] (https://en.wikipedia.org/wiki/sha-2) 알고리즘을 사용하여 값에 대한 해시를 만듭니다.
약속을 반환합니다.

-`crypto.createhash ()`를 사용하여 적절한 알고리즘으로`hash '객체를 만듭니다.
-`hash.update ()`를 사용하여`val '에서`hash`,`hash.digest ()에 데이터를 추가하여 데이터의 다이제스트를 계산하십시오.
- 긴 작동에서 차단을 방지하려면`settimeout ()`를 사용하십시오. 친숙한 인터페이스를 제공하려면 '약속'을 반환하십시오.