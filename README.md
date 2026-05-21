# Lee-seungmihn | Portfolio & Blog

이승민의 개인 포트폴리오 + 블로그 + 스터디 노트 사이트입니다.  
**배포:** https://lee-seungmihn.github.io

---

## Tech Stack

| 분류 | 사용 기술 |
|------|----------|
| Markup | HTML5 |
| Style | CSS3, SCSS |
| Script | Vanilla JS (ES Modules, 빌드 없음) |
| Markdown | [marked.js](https://marked.js.org/) (CDN) |
| Font | Pretendard, JetBrains Mono |
| Deploy | GitHub Pages |

---

## SPA 구조

프레임워크 없이 직접 구현한 가상 DOM + History API 라우터 기반 SPA입니다.

```
assets/js/
  vdom.js          ← 가상 DOM (h, render, mount, patch)
  router.js        ← History API 라우터 (싱글톤)
  app.js           ← 라우트 정의 & 진입점
  pages/
    blog.js        ← BlogList, BlogPost 뷰
    study.js       ← StudyHome, StudyCat 뷰
  data/
    posts.js       ← 블로그 포스트 데이터
    studies.js     ← 스터디 카테고리 & 항목 데이터
```

### 라우트

| 경로 | 화면 |
|------|------|
| `/` | 포트폴리오 (Hero / About / Resume / Contact) |
| `/blog` | 회귀록 목록 |
| `/blog/:slug` | 글 상세 |
| `/study` | 스터디 카테고리 홈 |
| `/study/:cat` | 카테고리별 스터디 노트 |

---

## 파일 구조

```
/
├── index.html              ← 포트폴리오 + SPA shell
├── 404.html                ← GitHub Pages SPA redirect
└── assets/
    ├── css/
    │   ├── reset.css
    │   ├── font.css
    │   ├── common.css
    │   ├── util.css
    │   └── spa.css         ← 블로그·스터디 전용 스타일
    ├── js/
    │   ├── layout.js
    │   ├── service.js
    │   ├── event.js
    │   ├── vdom.js
    │   ├── router.js
    │   ├── app.js
    │   ├── pages/
    │   │   ├── blog.js
    │   │   └── study.js
    │   └── data/
    │       ├── posts.js
    │       └── studies.js
    └── images/
```

---

## 스터디 카테고리

| 카테고리 | 경로 | 현황 |
|---------|------|------|
| HTML | `/study/html` | 학습 중 |
| CSS | `/study/css` | 학습 중 |
| JavaScript | `/study/js` | 학습 중 |
| Java | `/study/java` | 학습 중 |
| JSP | `/study/jsp` | 학습 중 |
| MySQL | `/study/mysql` | 학습 중 |
| Git | `/study/git` | 학습 중 |

---

## 개발 규칙

- 빌드 스텝 없이 ES Modules 직접 사용
- HTML 코드 예제는 `<pre><code>` + HTML 엔티티 인코딩
- Java 코드 예제는 마크다운 트리플 백틱 코드 블록
- 절대 경로(`/assets/...`) 사용으로 GitHub Pages 서브디렉터리 라우팅 대응
- 모바일 퍼스트, 웹 표준 준수
