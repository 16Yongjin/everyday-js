[k-narest neighbors] (https://en.wikipedia.org/wiki/k-nearest_neighbors_algorithm) 알고리즘을 사용하여 레이블이 붙은 데이터 세트에 대한 데이터 포인트를 분류합니다.

-`array.prototype.map ()`를 사용하여`data '를 개체에 매핑하십시오. 각 객체에는`point '의 요소의 유클리드 거리가 포함되어 있으며`math.hypot ()`,`object.keys ()`및 그`label'을 사용하여 계산됩니다.
-`array.prototype.sort ()`및`array.prototype.slice ()`를 사용하여`point '의 가장 가까운 이웃을 얻으십시오.
-`array.prototype.reduce ()``object.keys ()`및`array.prototype.indexof ()`와 함께 가장 빈번한`라벨 '을 찾으십시오.