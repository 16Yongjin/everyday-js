문자열을 클립 보드에 복사하여 클립 보드의 내용이 업데이트되었을 때 해결되는 약속을 반환합니다.

- [Clipboard API] (https://developer.mozilla.org/en-us/web/api/clipboard_api)를 확인하십시오. `if` 문을 사용하여 'navigator',`navigator.clipboard '및`navigator.clipboard.writetext'를 확인하십시오.
-`clipboard.writetext ()`를 사용하여 주어진 값`str`를 클립 보드에 씁니다.
-`clipboard.writetext ()`의 결과를 반환합니다. 이것은 클립 보드의 내용이 업데이트되었을 때 해결되는 약속입니다.
- 클립 보드 API를 사용할 수없는 경우`promy.reject ()`를 사용하여 적절한 메시지를 거부하십시오.
- ** 참고 : ** 이전 브라우저를 지원 해야하는 경우 대신`oc [CopyToclipboard 스 니펫] (/js/s/copy-to-clipboard)에서 자세한 내용을 확인할 수 있습니다.