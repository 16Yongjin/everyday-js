[수정 필요]
주어진 인수가 숫자인지 확인합니다.

-`typeof`를 사용하여 값이 숫자 원시로 분류되어 있는지 확인하십시오.
-`nan`에 대항하여 보호하려면`val === val` (`nan`가`숫자 '와 같은'typeof '가`숫자'와 동일하고 그 자체와 동일하지 않기 때문에)를 확인하십시오.