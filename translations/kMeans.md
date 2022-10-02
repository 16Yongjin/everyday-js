[수정 필요]
주어진 데이터를 [k-means 클러스터링] (https://en.wikipedia.org/wiki/k-means_clustering) 알고리즘을 사용하여`k` 클러스터로 그룹화합니다.

-`array.from ()`및`array.prototype.slice ()`를 사용하여 클러스터`centroids`,`distances '및`class'에 적합한 변수를 초기화합니다.
-`while 'loop을 사용하여`itr'로 표시된대로 이전 반복에 변경 사항이있는 한 할당을 반복하고 업데이트 단계를 반복하십시오.
-`math.hypot ()`,`object.keys ()`및`array.prototyp.map ()`을 사용하여 각 데이터 포인트와 중심 사이의 유클리드 거리를 계산하십시오.
- 가장 가까운 중심을 찾으려면`array.prototype.indexof ()`및`math.min ()`를 사용하십시오.
-`array.from ()`및`array.prototyp.reduce ()`및`parsefloat ()`및`number.prototype.tofixed ()`를 사용하여 새 중심을 계산하십시오.