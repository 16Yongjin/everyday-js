[수정 필요]
[SHA-256] (https://en.wikipedia.org/wiki/sha-2) 알고리즘을 사용하여 값에 대한 해시를 만듭니다.
약속을 반환합니다.

- [subtlecrypto] (https://developer.mozilla.org/en-us/web/api/subtlecrypto)를 사용하여 주어진 값에 대한 해시를 만듭니다.
- 새`TextEncoder '를 만들어`val'을 인코딩하는 데 사용하십시오. 주어진 데이터의 다이제스트를 생성하려면 값을`subtlecrypto.digest ()`에 전달하십시오.
-`dataview.prototype.getuint32 ()`를 사용하여 해결 된`arraybuffer`의 데이터를 읽으십시오.
-`number.prototype.tostring ()`을 사용하여 데이터를 16 진 표현으로 변환하십시오. `array.prototype.push ()`을 사용하여 배열에 데이터를 추가하십시오.
- 마지막으로`array.prototype.join ()`를 사용하여`hexes`의 배열의 값을 문자열로 결합하십시오.