# 커피 뭐 먹을까?

## 목표와 기능

### 목표
- 다양한 커피 종류들 사이 오늘 먹고 싶은 커피 고르기
- 어떠한 맛은 원하지만 커피의 이름을 모를 때
- 매일 똑같은 커피는 싫지만 고르는 시간이 아까울 때

### 기능
- Ghat GPT를 사용한 빠른 커피 추천
- 맛과 향, 온도 등 취향을 고려한 커피 추천
- 추천된 커피에 대한 간단한 설명

## 개발 환경 및 배포 URL
### 개발환경
- HTML
- CSS
- JavaScript
### 배포 URL
- https://neysin.github.io/GPT-website/

## WBS
```mermaid
gantt
    title 커피 뭐 먹을까?
    dateFormat  YYYY-MM-DD
    section 계획
    프로젝트 아이디어 기획       :         des1, 2024-02-13, 1d
    section 설계
    와이어프레임 작성           :         des2, after des1, 1d
    section 개발
    기본 UI 구현(HTML/CSS)      :         dev1, after des2, 1d
    AI API 연동(JS)             :         dev2, after dev1, 1d
    결과 표시 기능 구현         :         dev3, after dev2, 1d
    section 테스트
    테스트                      :         tes1, after dev3, 1d
    section 완료
    프로젝트 완료               :         done,   des3, after tes1, 1d
```

## 와이어 프레임
<table>
    <tr>
        <th>메인 화면</th>
        <th>설명</th>
    </tr>
    <tr>
        <td width="70%">
            <img src="readme_img/메인 화면.jpg">
        </td>
        <td>
            <ul>
                <li>사진과 로고 삽입</li>
                <li>질문들에 따른 대답을 넣을 input 공간 만들기</li>
                <li>온도는 radio 버튼을 통해 둘 중 하나만 선택하게 하기</li>
                <li>추천되는 커피에 대한 설명이 출력되는 공간 만들기</li>
            </ul>
        </td>
    </tr>
</table>
<table>
    <tr>
        <th>내용 입력</th>
        <th>설명</th>
    </tr>
    <tr width="70%">
        <td width="70%">
            <img src="readme_img/내용 입력.jpg">
        </td>
        <td>
            <ul>
                <li>내용 입력 및 radio 버튼을 클릭 후 커피 추천 버튼을 사용</li>
            </ul>
        </td>
    </tr>
</table>
<table>
    <tr>
        <th>내용 출력</th>
        <th>설명</th>
    </tr>
    <tr>
        <td width="70%">
            <img src="readme_img/내용 출력.jpg">
        </td>
        <td>
            <ul>
                <li>버튼 클릭 후 내용 출력 공간에 커피에 대한 추천이 나오는지 확인</li>
            </ul>
        </td>
    </tr>
</table>