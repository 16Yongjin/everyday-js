[수정 필요]
문자열을 클립 보드에 복사합니다.
사용자 조치의 결과로만 작동합니다 (즉, '클릭'이벤트 리스너 내부).

- 새`<textArea>`요소를 만들고, 제공된 데이터로 채우고 HTML 문서에 추가하십시오.
- 선택한 범위 (있는 경우)를 저장하려면`selection.getRangeat ()`를 사용하십시오.
- 클립 보드에 복사하려면`document.execcommand ()`를 사용하십시오.
-HTML 문서에서`<TextArea> '요소를 제거하십시오.
- 마지막으로`selection.addrange ()`를 사용하여 원래 선택한 범위 (있는 경우)를 복구하십시오.
- ** 참고 : ** 대부분의 현재 브라우저에서 비동기 [클립 보드 API] (https://developer.mozilla.org/en-us/docs/web/api/clipboard_api)를 사용할 수 있습니다. [CopyToclipboardync 스 니펫] (/js/s/copy-to-clipboard-async)에서 자세한 내용을 확인할 수 있습니다.