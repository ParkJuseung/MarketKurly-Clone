# MarketKurly-Clone 프론트엔드 
<h2>사이트설명</h2>
MarketKurly 클론코딩입니다.<br>
https://kurly.com/shop/main/index.php<br>

<h2>제작기간 팀원소개</h2> 
<li> 2021 10월18일 ~ 2021 10월 22일</li> 
<li>5인 1조 팀프로젝트<br>
  front-end: 김덕현, 김범수, 박주승 <br> 
  back-end: 김혜림, 하원빈<br>
  
<details markdown = "1">
 <summary>
사용기술
</summary>

  - javascript
  - React 
  - Redux
  - react-router-dom
  - axios
 </details>
<br>
  
  
  <details markdown = "2">
 <summary>
주요기능
</summary>
<br>
  - 상품 읽기
  - 회원가입, 로그인, 로그아웃, 로그인유지
  - 댓글추가
  - 장바구니 추가, 삭제
  - 무한 스크롤
 </details>
<br>
  
   <details markdown = "3">
<summary>
문제점 / 해결과정
</summary>

 - 문제 1 제품 상세정보를 눌렀을 때 axios를 통해 받아온 값을 리덕스에 넣고, 그 값을 바로 state에 저장하려고 하면 왜 undefined가 뜰까?

    #### 문제의 원인 추정
    리액트는 비동기처리를 하기 때문에 페이지를 렌더링 할 때, 값을 모두 받아오기 전에 setState를 실행하기 때문에 undefinded가 뜬다.
     <br>
     #### 문제의 해결방법
      - 1. 해당 컴포넌트 안에서 async await을 통해 불러온 후, try구문으로 setState값을 지정한다. (선택함)
      - 2. 코드의 짜임새를 보니 특정한 카드가 onClick 됐을때, 그 컴포넌트에서 바로 history.push가 일어났다. 이를 thunk를 이용하여 모듈 컴포넌트로 dispatch하여 axios
            통신이 모두 끝났을때 .then을 사용하여 history.push를 일으킨다. (값을 모두 받아온 뒤 페이지 이동)
      
     #### 앞으로의 이 문제발생의 방지 방안
     - 해당 내용이 리덕스에 넣을 필요가 없다면 따로 모듈을 빼지 않더라도 async await을 사용할 수 있겠으나, 해당 함수가 다른 함수에서 호출 될 경우를 대비한다면 모듈을 따로
      빼서 작업하여 재사용성을 높일 수 있을 것 같다. 또한 데이터를 모두 로드한 뒤 페이지 이동을 위해 thunk를 이용하여 history를 모듈 안에 then 에서 사용한다.
     
   <br>
     - 문제 2 인피니티 스크롤이 구현된 후, 검색한 내용 또한 인피니티 스크롤이 실행 되었을 때, 이전의 상품들로 대체되는 현상 발생
     
      #### 문제의 원인 추정
     

    
```
testUser = new User(requestDto);
mockUserDetails = new UserDetailsImpl(testUser);
```
   SecurityContext에 담으면 테스트 실행시 실제 코드에서 사용되는 @AuthenticationPrincipal에 위에서 생성한 커스텀 UserDetails 객체가 주입되어 사용됩니다. 
```
private void authenticated() {
    Authentication authentication = new UsernamePasswordAuthenticationToken(mockUserDetails, "", mockUserDetails.getAuthorities());
    securityContext = SecurityContextHolder.getContext();
    securityContext.setAuthentication(authentication);
}
```

    참고 : https://newbedev.com/spring-test-security-how-to-mock-authentication
</details>

  

<h2>API설계</h2> 
 [API스웨거](http://15.165.159.211:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/) 



 
 

 <h2>실행화면링크</h2>
http://kbumsoo.s3-website.ap-northeast-2.amazonaws.com/
