---
제목 : Pascalcase String
태그 : 문자열, regexp
전문 지식 : 중간
표지 : blog_images/camera-zoom.jpg
FirstSene : 2021-09-08T19 : 21 : 13+00 : 00
---

문자열을 파스칼 케이스로 변환합니다.

-`string.prototype.match ()`를 사용하여 적절한 regexp를 사용하여 문자열을 단어로 나눕니다.
-`array.prototype.map ()`,`array.prototype.slice ()`,`array.prototype.join ()`,`string.prototype.touppercase ()``and`string.protopty.tolowercase ()를 사용하십시오. `그것들을 결합하고, 각 단어의 첫 글자를 활용하고 나머지를 낮추십시오.

```JS
const topascalcase = str =>
  스트리트
    .match (/[a-z] {2,} (? = [a-z] [a-z]+[0-9]*| \ b) | [a-z]? [a-z]+[0-9]*| [a-z] | [0-9]+/g)
    .map (x => x.charat (0) .toupperCase () + X.Slice (1) .TOLOWERCASE ())
    .가입하다('');
```

```JS
topascalcase ( 'nod_database_field_name'); // 'somedatabasefieldname'
Topascalcase ( '파스칼 화 해야하는 일부 레이블');
// 'somelabelthatneedstobepascalized'
Topascalcase ( 'Some-JavaScript-Property'); // 'somejavaScriptProperty'
Topascalcase ( 'spaces_underscores-and-hyphens를 가진 일부 mixed_string');
// 'somemixedstringwithspacesunderscoresandhyphens'