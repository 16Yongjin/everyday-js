[수정 필요]
원래 배열의 위치를 기반으로 그룹화 된 요소 배열을 생성하고 기능을 사용하여 그룹화 된 값을 결합하는 방법을 지정합니다.

- 제공된 마지막 인수가 함수인지 확인하십시오.
- 인수에서 가장 긴 배열을 얻으려면`math.max ()`를 사용하십시오.
-`array.from ()`를 사용하여 적절한 길이와 매핑 함수가있는 배열을 생성하여 그룹화 된 요소 배열을 만듭니다.
- 인수 배열의 길이가 바뀌면 값이없는 곳에 '정의되지 않은'이 사용됩니다.
- 함수는 각 그룹의 요소로 호출됩니다.