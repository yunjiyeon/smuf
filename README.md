# MINI PROJECT | SMUF (Seoul Music Festival)
> 서울 뮤직 페스티벌 홍보용 반응형 웹 사이트 개발
<br>
* 기여도 : 개인 100% <br> 
* 기간 : 2022.10
<br>

## 📍 Overview

**Bootstrap**을 활용하여 보다 빠르게 **반응형 사이트**를 구축하였습니다. <br>
**AOS 플러그인**과 애니메이션으로 홍보용 홈페이지의 목적에 맞는 동적인 효과를 주었습니다. <br>
fixed를 이용하여 메인 화면에서 스크롤을 움직이더라도 고정된 예매 버튼을 통해 예매 페이지로 넘어갈 수 있도록 하였습니다.


## ❌ 발생 오류

~~스크롤시 사이드에 고정된 예매 버튼의 테두리를 감싼 이미지가 돌아가게끔 하고자 하였으나 세로값을 구하는 법이 올바르지 않아 스크롤을 돌려도 돌아가지 않는 문제 발생하였습니다.~~

## ✅ 해결 방안
문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환하여 값을 내고, body의 세로 값(패딩/보더 포함)을 구했습니다.<br>
body 의 세로 값 - window 의 세로 값을 뺀 후 실제 움직인 스크롤 값을 나누어 css 'transform' 을 360도로 움직이도록 설정하였습니다.
    
```js

$(window).scroll(function(){
  let yOffset = window.pageYOffset;
  let calc = yOffset / ($('body').outerHeight() - $(window).outerHeight());
  $('.onTkt .back').css({
      'transform' : `rotate(${calc*360}deg)`
  });
});
```

***

## ⏰ Timeline 
| Week | coding | git | 작업 내용 |
| ------ | -- | -- |----------- |
| 1주차 | ☑️ | ☑️ | 타깃 설정, Markup 홈페이지 스타일 구현  |
| 2주차 | ☑️ | ☑️ | Javascript 기능 구현 / 오류 수정 |

<br>

## 🚀 Skills 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white"> 
<br><br>
