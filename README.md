# GPT-website
커피 추천을 위한 AI활용

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