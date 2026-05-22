/**
 * Study materials data
 * Each entry: { slug, title, date, content (markdown) }
 */
export const studies = {
  html: {
    title: 'HTML',
    icon: 'fab fa-html5',
    entries: [
      {
        slug: 'html-web-basics',
        title: '웹 기초 개념',
        date: '2025-01-02',
        content: `## 서버와 클라이언트

- **클라이언트**: 서버에게 요청하는 대상
- **서버**: 요청받은 서비스를 응답해주는 대상
- **웹(Web)**: 요청과 응답이 일어나는 장소

## 웹 브라우저(Web Browser)

사용자의 요청에 맞는 주소로 찾아가서 인터넷 콘텐츠를 검색 및 열람하여 응답하기 위한 응용 프로그램의 총칭.

## 프로토콜(Protocol)

네트워크 통신에서 통신을 하기 위한 규칙 또는 약속.

- **http**: 클라이언트와 서버 간 웹 페이지 등의 자원을 통신하는 규약. 텍스트로 통신하기 때문에 가로채면 누구든 내용을 볼 수 있다.
- **https**: 자원을 암호화해서 통신하는 규약.

## IP · DNS · WWW · W3C

| 용어 | 설명 |
|------|------|
| IP (Internet Protocol) | 네트워크 상에서 컴퓨터를 구별하는 고유 번호 |
| DNS (Domain Naming Service) | IP 주소에 이름을 부여하는 서비스 |
| WWW (World Wide Web) | 인터넷을 통해 정보를 공유하는 정보 공간 |
| W3C | WWW 표준을 제정·관리하는 중립적인 기관 |`
      },
      {
        slug: 'html-web-standard',
        title: '웹 표준',
        date: '2025-01-03',
        content: `## 웹 표준(Web Standard)

| 기술 | 역할 |
|------|------|
| HTML | 화면의 기본 골조를 제작하는 마크업 언어 |
| CSS | 요소의 스타일을 정하는 규칙. 내용과 스타일 분리 |
| JS | 화면에서 연산·이벤트·비동기 통신을 담당하는 스크립트 언어 |
| XML | 임의로 지은 태그로 데이터를 설명하는 데이터 전달 언어 |

## XML

태그를 임의로 지어 데이터를 감싸는 방식. 추가 데이터는 태그 추가로 확장 가능. **데이터 전달**에 목적이 있다.

<pre><code>&lt;?xml version="1.0"&gt;
&lt;user&gt;
  &lt;user-id&gt;hds1234&lt;/user-id&gt;
  &lt;name&gt;홍길동&lt;/name&gt;
&lt;/user&gt;</code></pre>`
      },
      {
        slug: 'html-elements',
        title: 'HTML 요소 구조와 속성',
        date: '2025-01-04',
        content: `## HTML 요소 구조

<pre><code>&lt;p&gt; You are better &lt;/p&gt;</code></pre>

1. **여는 태그**: \`&lt;p&gt;\` — 태그 이름과 꺽쇠 괄호로 구성
2. **내용**: 해당 태그에 적용될 텍스트
3. **닫는 태그**: \`&lt;/p&gt;\` — 이름 앞에 슬래시(/) 포함

## 속성(Attributes)

태그는 속성을 가질 수 있다. 내용에 나타내고 싶지 않지만 추가적인 정보를 담을 때 사용.

<pre><code>&lt;p class="conversation" id="conv1"&gt; You are much better &lt;/p&gt;</code></pre>

- 속성은 태그 이름 다음에 공백으로 구분
- 여러 속성은 속성 사이에도 공백
- 속성값은 따옴표 안에 작성`
      },
      {
        slug: 'html-element-types',
        title: 'HTML 요소 종류',
        date: '2025-01-05',
        content: `## 블록 요소

\`p, h, ul, ol, form, div\` 등

- 웹 페이지에 블록(영역)을 만드는 태그
- 뒤에 오는 요소가 아래 줄로 내려감
- \`width, height, margin, padding\` 모두 적용 가능

<pre><code>&lt;p&gt;apple&lt;/p&gt;&lt;p&gt;banana&lt;/p&gt;
[화면] apple / banana (줄바꿈)</code></pre>

## 인라인 요소

\`span, a, img, strong, em\` 등

- 새로운 영역을 만들지 않고 단락 내에 나타남
- 내용만큼만 영역 차지
- \`width, height\` 임의 부여 불가
- \`margin-top, margin-bottom\` 적용 안 됨

<pre><code>&lt;span&gt;apple&lt;/span&gt;&lt;strong&gt;banana&lt;/strong&gt;
[화면] applebanana (줄바꿈 없음)</code></pre>

## 인라인-블록 요소

\`button, input, select\` 등

- 인라인처럼 내용만큼 영역을 가지지만 본인만의 영역을 정확히 가짐
- \`width, height, margin, padding\` 모두 적용 가능`
      },
      {
        slug: 'html-list',
        title: '리스트 태그',
        date: '2025-01-06',
        content: `## 리스트 태그

### 1. 순서 없는 리스트 — \`ul\`

**ul**: unordered list / **li**: list item

<pre><code>&lt;ul&gt;
    &lt;li&gt;내용1&lt;/li&gt;
    &lt;li&gt;내용2&lt;/li&gt;
    &lt;li&gt;내용3&lt;/li&gt;
&lt;/ul&gt;</code></pre>

### 2. 순서 있는 리스트 — \`ol\`

**ol**: ordered list

<pre><code>&lt;ol type="" start=""&gt;
    &lt;li value=""&gt;내용1&lt;/li&gt;
    &lt;li&gt;내용2&lt;/li&gt;
    &lt;li&gt;내용3&lt;/li&gt;
&lt;/ol&gt;</code></pre>

| \`type\` 값 | 표시 방식 |
|------------|---------|
| \`1\` | 숫자 (1, 2, 3, ...) |
| \`A\` | 알파벳 대문자 순 |
| \`a\` | 알파벳 소문자 순 |
| \`I\` | 로마 숫자 대문자 (I, II, III, ...) |
| \`i\` | 로마 숫자 소문자 (i, ii, iii, ...) |

- \`start\`: 시작 번호 지정
- \`value\`: 특정 항목에 번호를 직접 지정

---

## 실습 예시 — 중첩 리스트

<pre><code>&lt;h3&gt;제9조(서비스 이용시간)&lt;/h3&gt;
&lt;ul&gt;
    &lt;li&gt;서비스 이용시간은 연중무휴, 1일 24시간을 원칙으로 합니다.&lt;/li&gt;
    &lt;li&gt;정기점검 등의 필요로 인하여 예외로 합니다.&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
    &lt;li&gt;
        정부24 회원정보
        &lt;ul&gt;
            &lt;li&gt;수집근거 : 정보주체의 동의&lt;/li&gt;
            &lt;li&gt;보유기간 : 탈퇴 후 5일까지&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li value="3"&gt;
        전자민원 신청이력
        &lt;ul&gt;
            &lt;li&gt;수집근거 : 정보주체의 동의&lt;/li&gt;
            &lt;li&gt;보유기간 : 3년&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ol&gt;</code></pre>

\`li\`의 \`value\` 속성으로 번호를 건너뛸 수 있다 (위 예시: 1번 다음 3번).

## 실습 예시 — type·start·value 조합

<pre><code>&lt;ol type="I" start="2"&gt;
    &lt;li&gt;회원은 영리행위를 할 수 없습니다.&lt;/li&gt;
    &lt;li value="4"&gt;
        다음 행위를 하여서는 안됩니다.
        &lt;ol type="a"&gt;
            &lt;li&gt;다른 회원의 ID를 부정 사용하는 행위&lt;/li&gt;
            &lt;li&gt;범죄행위와 관련된 행위&lt;/li&gt;
        &lt;/ol&gt;
    &lt;/li&gt;
&lt;/ol&gt;</code></pre>

결과: II, IV(a, b) — 로마 숫자 대문자로 시작, 4번 항목은 소문자 알파벳 중첩 리스트`
      },
      {
        slug: 'html-link',
        title: '링크·앵커 태그',
        date: '2025-01-07',
        content: `## 링크 태그 — \`<a>\`

현재 페이지에서 다른 페이지로 이동할 때 하이퍼링크를 사용한다.

<pre><code>&lt;a href="" target=""&gt;링크 텍스트&lt;/a&gt;</code></pre>

| 속성 | 설명 |
|------|------|
| \`href\` | 이동할 페이지 경로 또는 URL |
| \`target\` | \`_blank\` (새 탭), \`_self\` (현재 탭, 기본값) |

### 외부 링크

<pre><code>&lt;a href="https://www.naver.com" target="_blank"&gt;네이버로 이동&lt;/a&gt;
&lt;a href="https://www.google.com"&gt;구글로 이동&lt;/a&gt;</code></pre>

### 내부 상대 경로 링크

<pre><code>&lt;a href="./link.html"&gt;같은 폴더의 link.html로 이동&lt;/a&gt;
&lt;a href="../b-list/list-task.html"&gt;상위 폴더 이동&lt;/a&gt;</code></pre>

---

## 앵커(책갈피) — 페이지 내 이동

같은 페이지 안에서 특정 위치로 이동할 때 \`id\` 속성과 \`href="#id"\`를 조합한다.

<pre><code>&lt;!-- 이동 목표 지점에 id 부여 --&gt;
&lt;h1 id="top"&gt;페이지 상단&lt;/h1&gt;
&lt;h2 id="book1"&gt;북마크 1&lt;/h2&gt;

&lt;!-- 해당 위치로 이동하는 링크 --&gt;
&lt;a href="#book1"&gt;북마크1로 이동&lt;/a&gt;
&lt;a href="#top"&gt;맨 위로&lt;/a&gt;</code></pre>

jQuery를 이용한 부드러운 스크롤:

<pre><code>&lt;script src="https://code.jquery.com/jquery-3.7.1.js"&gt;&lt;/script&gt;
&lt;script&gt;
    $("#up").click((e) =&gt; {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1000);
    });
&lt;/script&gt;</code></pre>`
      },
      {
        slug: 'html-img',
        title: '이미지 태그',
        date: '2025-01-08',
        content: `## 이미지 태그 — \`<img>\`

이미지를 삽입하는 빈 태그(닫는 태그 없음).

<pre><code>&lt;img src="경로" alt="대체 텍스트" width="200px"&gt;</code></pre>

| 속성 | 설명 |
|------|------|
| \`src\` | 이미지 파일 경로 (상대/절대 경로, URL) |
| \`alt\` | 이미지 로딩 실패 시 표시되는 대체 텍스트 |
| \`width\` / \`height\` | 이미지 크기 지정 |

---

## 경로 종류

### 절대 경로

보안상 브라우저에서 로컬 절대 경로 접근을 막는 경우가 많다.

<pre><code>&lt;!-- 보안상 브라우저에서 로컬 절대 경로 접근 불가 --&gt;
&lt;img src="D:\images\icon1.png" alt="경로 문제"&gt;</code></pre>

### 상대 경로

현재 파일 위치를 기준으로 경로를 지정한다.

<pre><code>&lt;!-- 현재 폴더 기준 하위 폴더 이동 --&gt;
&lt;img src="./a/b/icon2.png" width="200px"&gt;
&lt;img src="./a/icon3.png" width="150px"&gt;

&lt;!-- 현재 폴더와 같은 위치 --&gt;
&lt;img src="icon4.png" width="300px"&gt;

&lt;!-- 이미지에 링크 걸기 --&gt;
&lt;a href="https://www.google.com"&gt;
    &lt;img src="c/icon5.png" width="220px"&gt;
&lt;/a&gt;</code></pre>

- \`./\` : 현재 폴더
- \`../\` : 상위 폴더`
      },
      {
        slug: 'html-table',
        title: '테이블 태그',
        date: '2025-01-09',
        content: `## 테이블(table)

행(row)과 열(column)로 데이터를 정리하는 표.

<pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;헤더1&lt;/th&gt;
        &lt;th&gt;헤더2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;데이터1&lt;/td&gt;
        &lt;td&gt;데이터2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>

| 태그 | 역할 |
|------|------|
| \`<table>\` | 표 전체 컨테이너 |
| \`<tr>\` | 행 (table row) |
| \`<th>\` | 헤더 셀 — 굵게·가운데 정렬 |
| \`<td>\` | 일반 데이터 셀 |

기본 스타일 예시:

<pre><code>&lt;style&gt;
    table, tr, td, th {
        text-align: center;
        border: 1px solid black;
        width: 450px;
        margin: 0 auto;
        border-collapse: collapse;
    }
&lt;/style&gt;</code></pre>

---

## 셀 병합

### colspan — 열 병합

좌에서 우로 합쳐지며 현재 행에만 적용된다.

<pre><code>&lt;td colspan="2"&gt;1&lt;/td&gt;</code></pre>

### rowspan — 행 병합

현재 행과 아래 행이 합쳐진다.

<pre><code>&lt;td rowspan="2"&gt;6&lt;/td&gt;</code></pre>

### 병합 실습

<pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td colspan="2"&gt;1&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;4&lt;/td&gt;
        &lt;td&gt;5&lt;/td&gt;
        &lt;td rowspan="2"&gt;6&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;7&lt;/td&gt;
        &lt;td&gt;8&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>

복합 병합 실습:

<pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td colspan="2"&gt;1&lt;/td&gt;
        &lt;td rowspan="2"&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;5&lt;/td&gt;
        &lt;td&gt;6&lt;/td&gt;
        &lt;td&gt;8&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;9&lt;/td&gt;
        &lt;td colspan="3"&gt;10&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>`
      },
      {
        slug: 'html-display',
        title: '디스플레이 속성',
        date: '2025-01-10',
        content: `## block · inline · inline-block 비교

| 속성 | 대표 태그 | 너비 | 높이 | margin/padding | 줄바꿈 |
|------|----------|------|------|----------------|--------|
| \`block\` | \`div, p, h1~h6\` | 부모 전체 | 자유 | 상하좌우 모두 | 있음 |
| \`inline\` | \`span, strong, a\` | 콘텐츠 크기 | 콘텐츠 크기 | 좌우만, 상하 margin 무시 | 없음 |
| \`inline-block\` | \`button, input, select\` | 자유 | 자유 | 상하좌우 모두 | 없음 |

---

## block 요소

줄 전체를 차지하며 다음 요소는 아래로 내려간다.

<pre><code>&lt;h1 style="background-color: yellow;"&gt;블록 요소&lt;/h1&gt;
&lt;div style="background-color: orange; width: 50%; margin-top: 50px;"&gt;DIV1&lt;/div&gt;
&lt;div style="background-color: pink; width: 100px; height: 100px; margin-top: 60px;"&gt;DIV2&lt;/div&gt;</code></pre>

\`div\`에 \`width: 50%\`를 줘도 다음 요소는 여전히 아래로 내려간다.

---

## inline 요소

콘텐츠 크기만큼만 영역을 차지하고 같은 줄에 이어진다.
**\`width\`, \`height\` 임의 부여 불가 / \`margin-top\`, \`margin-bottom\` 적용 안 됨.**

<pre><code>&lt;strong style="background-color: yellow; width: 500px; height: 500px;"&gt;인라인 요소&lt;/strong&gt;
&lt;span style="margin-top: 500px;"&gt;SPAN1&lt;/span&gt;   &lt;!-- margin-top 무시됨 --&gt;
&lt;span style="padding-top: 100px;"&gt;SPAN2&lt;/span&gt;</code></pre>

---

## inline-block 요소

inline처럼 콘텐츠 옆에 이어지지만 \`width\`, \`height\`, \`margin\`, \`padding\`을 자유롭게 지정할 수 있다.

<pre><code>&lt;button style="width: 150px;"&gt;BUTTON1&lt;/button&gt;
&lt;button style="height: 150px;"&gt;BUTTON2&lt;/button&gt;
&lt;button style="width: 350px; margin-top:50px; padding-bottom: 50px;"&gt;BUTTON3&lt;/button&gt;

&lt;!-- inline 요소에 display: inline-block 명시 --&gt;
&lt;strong style="display: inline-block; background-color: yellow; width: 500px; height: 500px;"&gt;
    인라인 요소
&lt;/strong&gt;</code></pre>

\`display: inline-block\`을 명시하면 원래 inline 요소에도 \`width\`·\`height\`가 적용된다.

---

## div·span 레이아웃 구조

<pre><code>&lt;!-- 상단 nav 영역 --&gt;
&lt;div&gt;
    &lt;span&gt;홈&lt;/span&gt;
    &lt;span&gt;고객센터&lt;/span&gt;
&lt;/div&gt;
&lt;!-- 로고 영역 --&gt;
&lt;div&gt;
    &lt;img src="logo.png" alt="로고"&gt;
&lt;/div&gt;
&lt;!-- 콘텐츠 영역 --&gt;
&lt;div&gt;
    &lt;div&gt;개인회원&lt;/div&gt;
    &lt;div&gt;기업회원&lt;/div&gt;
&lt;/div&gt;</code></pre>

block 요소인 \`div\`로 레이아웃 구역을 구분하고, inline 요소인 \`span\`으로 줄 내 텍스트를 마크업하는 구조가 일반적이다.`
      }
    ]
  },
  css: {
    title: 'CSS',
    icon: 'fab fa-css3-alt',
    entries: []
  },
  js: {
    title: 'JavaScript',
    icon: 'fab fa-js',
    entries: [
      {
        slug: 'js-basics',
        title: 'JavaScript 기초',
        date: '2025-12-30',
        content: `## 인터프리터와 JavaScript

**인터프리터**: 사람의 언어를 컴퓨터 언어로 번역해주는 번역기. 번역 파일은 제공되지 않고 번역 즉시 실행한다.

**인터프리터 언어(스크립트 언어)**: 한 줄씩 번역한다. 기존의 코드를 재실행할 필요 없을 경우 효과적이다.

**JavaScript**: 컴파일 과정 없이 브라우저 내부의 자바스크립트 처리기(인터프리터)에 의해 바로 실행된다.

## 웹 페이지에서 자바스크립트의 역할

- **사용자의 입력 및 연산**: 키, 마우스 등의 입력과 연산은 오직 JS로만 처리 가능
- **웹 페이지 동적 제어**: HTML 태그 속성, 콘텐츠, CSS 속성 값을 변경
- **브라우저 제어**: 윈도우 크기/모양 변경, 새 탭 열기, 히스토리 제어
- **웹 서버와의 통신**: 웹 서버와 데이터를 주고받을 때 활용
- **웹 애플리케이션 작성**: 다양한 API를 활용해 웹 앱 개발 가능

## 자바스크립트를 작성할 수 있는 위치

1. **HTML 태그의 이벤트 리스너 속성**에 작성
2. **\`<script>\` 태그 안** — head, body 어디든 가능, 여러 번 작성 가능
3. **.js 파일**로 분리하여 \`<script src="경로">\`로 가져옴 (태그 안에 코드 작성 금지)
4. **URL 부분** — \`<a href="javascript:코드">\` (반드시 javascript: 키워드 필요)

## ES(ECMAScript)

자바스크립트의 표준 스펙 이름.

- **ES5(2009)**: 기본 JS 문법 사용 가능
- **ES6(2015)**: 모던 자바스크립트 — 매년 업데이트 진행`
      },
      {
        slug: 'js-variables',
        title: '변수와 데이터 타입',
        date: '2025-12-30',
        content: `## 변수의 선언

- **var**: 함수의 영역(중괄호)만 영역으로 판단
- **let**: 모든 영역(중괄호)을 영역으로 판단
- **const**: 항상 그대로인 상수 — 절대 변경 불가

## 데이터 타입(자료형)

JavaScript는 값에 따라 저장공간의 종류가 자동으로 바뀌는 **동적 바인딩** 방식이다.

| 타입 | 예시 |
|------|------|
| 숫자(number) | 42, 3.14 |
| 논리(boolean) | true, false |
| 문자열(string) | "안녕", \`A\` |
| 객체(object) | Object, Array, Math |
| undefined | 타입이 정해지지 않은 것 |
| null | 값이 정해지지 않은 것 |

## 식별자(이름) 규칙

- 첫 번째 문자: 알파벳, 언더바, \`$\`만 사용 가능
- 대소문자 구분 (data ≠ dAta)
- 키워드(예약어)는 사용 불가

## 전역 변수와 지역 변수

- **전역 변수**: 영역 밖에 선언된 변수 → \`globalThis\`에 선언 권장
- **지역 변수**: 영역 안에 선언된 변수

## 변수를 사용하는 이유

1. 반복되는 값을 쉽게 관리하기 위해서
2. 의미 없는 값을 하나의 정보로 만들기 위해서(자료구조)`
      },
      {
        slug: 'js-control',
        title: '연산자와 제어문',
        date: '2025-12-30',
        content: `## 연산자 우선순위

최우선 연산자 → 단항 → 산술 → 쉬프트 → 관계 → 논리 → 삼항 → 대입

**조건식에서 사용되는 연산자**

- 관계: \`==\`, \`===\`, \`!=\`, \`!==\`, \`>\`, \`<\`, \`>=\`, \`<=\`
- 논리: \`&&\` AND, \`||\` OR, \`!\` NOT
- 삼항: \`조건식 ? 참 : 거짓\`

## 조건문

**if문** — 다양한 비교나 여러 조건식을 연결할 때 적합

\`\`\`js
if (조건식) {
  실행할 문장;
} else if (조건식) {
  실행할 문장;
} else {
  실행할 문장;
}
\`\`\`

**switch문** — 하나의 변수에 여러 값을 비교할 때 적합

\`\`\`js
switch (값) {
  case 값1: 실행할 문장; break;
  default:  실행할 문장; break;
}
\`\`\`

## 반복문

**for문**

\`\`\`js
for (초기식; 조건식; 증감식) {
  실행할 문장;
}
\`\`\`

**while / do~while**

\`\`\`js
while (조건식) { 실행할 문장; }

do { 실행할 문장; } while (조건식);
\`\`\`

**증감 연산자**: 전위형(++data) — 해당 라인부터 즉시 적용, 후위형(data++) — 다음 라인부터 적용

**기타 제어문**

- \`break\`: 만나는 즉시 해당 중괄호 영역을 탈출
- \`continue\`: 만나는 즉시 다음 반복으로 넘어감`
      },
      {
        slug: 'js-functions',
        title: '함수(Function)',
        date: '2025-12-30',
        content: `## 함수란?

이름 뒤에 소괄호. 함수는 저장공간이다. 리턴값이 있으면 값으로 본다.

## 함수 선언

\`\`\`js
function 함수명(매개변수1, 매개변수2, ...) {
  실행할 문장;
  return 리턴값;
}
\`\`\`

1. **함수명**: 동사로 작성 (예: add, getName)
2. **매개변수**: 외부에서 전달받을 값이 있다면 순서에 맞게 선언 (생략 가능)
3. **실행할 문장**: 기능 구현 로직 (생략 가능)
4. **return**: 리턴값이 있다면 작성 (생략 가능) — 리턴값이 있으면 사용한 부분 통째로 리턴값으로 본다

## 함수 선언 순서 예시

두 정수의 덧셈을 구해주는 함수:

\`\`\`js
function add(number1, number2) {
  let result = number1 + number2;
  return result;
}
\`\`\`

## 함수를 사용하는 이유

1. **재사용의 목적** — 단, 특정성을 부여해서는 안 된다
2. **소스코드 간결화의 목적**

## 함수의 선언 vs 사용

중괄호가 있으면 선언, 중괄호가 없으면 사용.

\`\`\`js
add(3, 5);          // 매개변수 있을 때
printHello();       // 매개변수 없을 때
\`\`\``
      }
    ]
  },
  java: {
    title: 'Java',
    icon: 'fab fa-java',
    entries: [
      {
        slug: 'java-intro',
        title: 'Java 소개 및 환경 설정',
        date: '2025-01-06',
        content: `## Java란?

프로그래밍 언어는 개발자와 운영체제가 소통하기 위한 언어다.

- **소스코드**: 개발자와 운영체제가 소통할 것을 글로 작성해 놓은 것
- **소스파일(.java)**: 소스코드를 작성해 놓은 파일
- **컴파일**: 사람의 언어를 컴퓨터 언어로 바꿔주는 작업
- **컴파일러**: 컴파일 해주는 프로그램. 위에서 아래로, 좌에서 우로 해석함

## 일반 프로그램 vs Java 프로그램

\`\`\`
일반 프로그램: 프로그램 → OS → 하드웨어
Java 프로그램: Java 프로그램 → JVM → OS → 하드웨어
\`\`\`

JVM이 중간에서 OS에 맞게 실행시켜주기 때문에 **이식성이 좋다**.

---

## JVM / JRE / JDK

| 용어 | 역할 |
|------|------|
| JVM (Java Virtual Machine) | Java 프로그램을 실행 |
| JRE (Java Runtime Environment) | JVM을 생성하며, 실행에 필요한 라이브러리 제공 |
| JDK (Java Development Kit) | 컴파일·실행 명령어 + 개발에 필요한 도구 포함 |

---

## 기본 구조

\`\`\`
프로젝트
  └ 패키지 (소문자로 시작)
      └ 클래스 (대문자로 시작)
          └ 메소드
              └ 소스코드
\`\`\``
      },
      {
        slug: 'java-print',
        title: '출력 메소드',
        date: '2025-01-07',
        content: `## 출력 메소드

\`\`\`java
System.out.print("text");    // 줄바꿈 없음
System.out.println("text");  // 자동 줄바꿈
\`\`\`

## 출력을 사용하는 이유

오류를 구체화하기 위해 개발자가 사용하는 디버깅 도구다.

\`\`\`java
A 코드
System.out.println("A");
B 코드
System.out.println("B");
C 코드
System.out.println("C");
D 코드
System.out.println("D");
\`\`\`

"C"까지 콘솔에 출력되었다면, 컴파일러는 위에서 아래로 번역되기 때문에 **D 코드에 문제가 발생**한 것으로 판단된다.`
      },
      {
        slug: 'java-variable',
        title: '변수와 자료형',
        date: '2025-01-08',
        content: `## 변수

변수는 저장공간이다.

\`\`\`
x  =  10
↑     ↑
저장공간의 이름 (대입 연산자로) 값(상수) 저장
\`\`\`

## 자료형(type)

| 분류 | 자료형 | byte | 예시 |
|------|--------|------|------|
| 정수형 | byte | 1 | -120, 100 |
| | short | 2 | 123, 9 |
| | int | 4 | -2147483648 ~ 2147483647 |
| | long | 8 | 30L, 8L |
| 실수형 | float | 4 | 3.12F, 2.59F |
| | double | 8 | 3.12, 2.59 |
| 문자형 | char | 2 | 'A', '0' |
| 문자열 | String | ? | "ABC", "안녕" |
| 논리형 | boolean | 1 | true, false |

## 변수 선언

\`\`\`java
자료형 변수명 = 초기값;  // 선언과 초기화 동시에
자료형 변수명;           // 선언만
변수명 = 초기값;         // 별도 초기화
\`\`\`

## 변수명 주의사항

1. 문자로 시작해야 한다
2. 특수문자 사용 불가 (단, \`_\` 허용)
3. 소문자로 시작한다
4. 공백 사용 불가 → \`goodBoy\` (카멜 표기법) 권장
5. 뜻이 있는 단어를 사용한다 (\`a, b, c\` 사용 지양)

## 변수를 사용하는 이유

1. 반복되는 값을 쉽게 관리하기 위해서
2. 의미 없는 값을 하나의 정보로 만들기 위해서 (자료구조)`
      },
      {
        slug: 'java-casting-basic',
        title: '형변환',
        date: '2025-01-09',
        content: `## 자동 형변환

\`\`\`
정수 + 정수 = 정수
정수 + 실수 = 실수
문자 + 정수 = 정수
\`\`\`

## 강제 형변환(Casting)

\`\`\`java
(자료형)값

(double)3  // == 3.0
\`\`\`

## 문자열 형변환

**다른 자료형 → 문자열**: 문자열과 다른 자료형을 연결하면 결과가 문자열이 된다.

**문자열 → 다른 자료형**: 일반 자료형의 클래스 타입 도움 필요

\`\`\`java
Integer.parseInt("123")     // → int 123
Double.parseDouble("3.14")  // → double 3.14
\`\`\``
      },
      {
        slug: 'java-constant',
        title: '상수',
        date: '2025-01-10',
        content: `## 상수

항상 그대로인 수. 값을 변경할 수 없다.

\`\`\`java
final 자료형 상수명 = 값;

final int MAX_COUNT = 100;
\`\`\`

## 상수를 사용하는 이유

값에 **의미 부여**를 하기 위해서.

숫자 100만 보면 무엇을 의미하는지 알 수 없지만,
\`MAX_COUNT\`라는 상수명으로 선언하면 의도를 명확히 전달할 수 있다.`
      },
      {
        slug: 'java-input',
        title: '입력 (Scanner)',
        date: '2025-01-13',
        content: `## 입력

커서가 깜빡이고 있는 상태를 입력 상태라고 한다.
입력하기 전에 출력을 통해 어떤 값을 입력해야 할지 사용자에게 알려주어야 한다.

## 입력 클래스

\`\`\`java
Scanner sc = new Scanner(System.in);
//자료형  변수명        값
\`\`\`

## 입력 메소드

\`\`\`java
sc.next()      // 공백 또는 줄바꿈(엔터)을 구분점으로 문자열 분리
sc.nextLine()  // 공백도 값으로 취급하여 한 줄 전체 입력받음
\`\`\`

- \`next()\`: 첫 번째 호출에 첫 번째 문자열, 두 번째 호출에 두 번째 문자열이 담김
- \`nextLine()\`: 엔터 전까지 입력한 전체 문자열을 그대로 반환`
      },
      {
        slug: 'java-operator',
        title: '연산자',
        date: '2025-01-14',
        content: `## 연산자 우선순위

기능이 있는 특수문자. 우선순위는 아래 순으로 낮아진다.

1. 최우선 연산자 \`()\`
2. 단항 연산자
3. 산술 연산자
4. 쉬프트 연산자
5. 관계 연산자
6. 논리 연산자
7. 삼항 연산자
8. 대입 연산자

---

## 조건식 — 관계 연산자

\`\`\`
==   같다
!=   같지 않다
>, < 초과, 미만
>=, <= 이상, 이하
\`\`\`

## 조건식 — 논리 연산자

\`\`\`
&&  AND: 두 조건식 모두 참이면 참
||  OR:  둘 중 하나라도 참이면 참
!   NOT: 참 ↔ 거짓 반전
\`\`\`

## 삼항 연산자

\`\`\`java
조건식 ? 참 : 거짓

int result = (10 > 11 ? 10 : 11) + 4;  // → 15
\`\`\`

## 대입 연산자 (복합 대입)

\`\`\`java
money -= 1000;  // money = money - 1000
data++;         // data = data + 1 (후위형, 다음 라인부터 적용)
++data;         // 전위형, 해당 라인부터 즉시 적용
\`\`\`

> 둘 다 사용 가능한 상황에서는 **후위형**을 쓰도록 한다.`
      },
      {
        slug: 'java-control',
        title: '제어문 (조건문·반복문)',
        date: '2025-01-15',
        content: `## 제어문

컴파일러의 흐름을 제어할 수 있는 문법.

---

## 조건문

### if문

\`\`\`java
if (조건식) {
    실행할 문장;
} else if (조건식) {
    실행할 문장;
} else {
    실행할 문장;
}
\`\`\`

### switch문

\`\`\`java
switch(값) {
    case 값1:
        실행할 문장;
        break;
    case 값2:
        실행할 문장;
        break;
    default:
        실행할 문장;
        break;
}
\`\`\`

> **삼항 vs if vs switch**: 조건식 1개 → 삼항, 비교 연산자·복합 조건 → if, 하나의 변수의 여러 값 비교 → switch

---

## 반복문

### for문

\`\`\`java
for (초기식; 조건식; 증감식) {
    실행할 문장;
}
\`\`\`

실행 순서: 초기식 → (조건식 true → 문장 → 증감식) 반복 → 조건식 false → 종료

### while문

\`\`\`java
while (조건식) {
    실행할 문장;
}
\`\`\`

### do ~ while문

\`\`\`java
do {
    실행할 문장;
} while (조건식);
\`\`\`

---

## 기타 제어문

- \`break\`: 즉시 해당 중괄호 영역 탈출
- \`continue\`: 즉시 다음 반복으로 넘어감`
      },
      {
        slug: 'java-array',
        title: '배열',
        date: '2025-01-16',
        content: `## 배열이란?

저장공간이 나열된 것.

1. 여러 변수를 선언하면 이름도 여러 개 생겨 관리가 불편 → 배열 한 번 선언으로 n개 저장공간 생성
2. 규칙성이 없는 값에 규칙성 부여

## 배열 선언

\`\`\`java
자료형[] 배열명 = {값1, 값2, ...};      // 값을 알 때
자료형[] 배열명 = new 자료형[칸수];     // 칸수는 알지만 값은 모를 때
자료형[] 배열명 = null;                 // 둘 다 모를 때
\`\`\`

- \`new\`: Heap 메모리에 할당, 초기값으로 자동 초기화
- \`null\`: 주소의 초기값

## 배열 사용

\`\`\`java
int[] arData = {3, 5, 1, 2, 8};
arData[0]  // → 3 (인덱스는 0부터 시작)
arData[2]  // → 1
arData.length  // → 5
\`\`\`

## 2차원 배열

\`\`\`java
자료형[][] 배열명 = {{값1, 값2}, {값3, 값4}};
자료형[][] 배열명 = new 자료형[행][열];

int[][] arr = new int[2][3];
arr.length     // 행의 길이 (2)
arr[0].length  // 열의 길이 (3)
arr[1][2]      // 1행 2열 값
\`\`\`

> 2차원 배열부터는 메모리 낭비가 심하므로 선호하지 않는다.`
      },
      {
        slug: 'java-method',
        title: '메소드와 다형성',
        date: '2025-01-17',
        content: `## 메소드

이름 뒤에 소괄호가 있는 형태. (단, 키워드 뒤 소괄호는 메소드가 아님)

\`\`\`
f(x) = 2x + 1
↑  ↑      ↑
메소드명 매개변수 리턴값
\`\`\`

## 메소드 선언

\`\`\`java
리턴타입 메소드명(자료형 매개변수명, ...) {
    실행할 문장;
    return 리턴값;
}
\`\`\`

## 메소드 선언 순서

덧셈 메소드 예시:

\`\`\`java
// 1. 이름 → 2. 매개변수 → 3. 실행할 문장 → 4. 리턴값 → 5. 리턴타입
int add(int number1, int number2) {
    int result = number1 + number2;
    return result;
}
\`\`\`

## 메소드를 사용하는 이유

1. **재사용** (특정성을 부여해서는 안 됨)
2. **소스코드 간결화**

---

## 다형성(Polymorphism)

### 오버로딩(Overloading)

매개변수의 개수 또는 자료형이 다르면 동일한 이름의 메소드로 선언 가능

\`\`\`java
int add(int a, int b) { ... }
double add(double a, double b) { ... }  // 오버로딩
\`\`\`

### 오버라이딩(Overriding)

부모 클래스의 메소드를 자식 클래스에서 재정의.
자식 객체로 접근하면 **가까운 곳(자식 필드)** 에서 찾기 때문에 재정의된 메소드가 사용됨.
부모 기능을 그대로 사용하고 싶다면 \`super\`로 접근.`
      },
      {
        slug: 'java-class',
        title: '클래스와 생성자',
        date: '2025-01-20',
        content: `## 클래스

공통 요소를 한 번만 선언해 놓고 가져다 사용만 하도록 설계.

1. **타입이다** — 클래스 안에 선언된 변수와 메소드를 사용하려면 해당 클래스 타입으로 변수를 선언
2. **주어이다** — \`Monkey.eat("바나나")\` → "원숭이가 바나나를 먹는다"

\`\`\`java
class 클래스명 {
    필드 (변수, 메소드)
}
\`\`\`

## 클래스 필드 사용

### 객체화(instance)

\`\`\`java
클래스명 객체명 = new 클래스명();
// .(점 연산자)로 멤버변수에 접근
\`\`\`

### static

모든 객체가 공유해야 하는 필드. 클래스 하나당 한 개만 생기므로 클래스로 접근.

---

## 생성자

클래스 이름 뒤에 소괄호 → 메소드와 기능은 같지만 리턴이 없어서 메소드라고 부르지 않음.

1. 해당 클래스의 필드를 메모리에 할당 후 주소값 반환
2. 초기화

## this

필드에 접근한 객체의 주소값이 자동으로 담기는 변수. 객체마다 1개씩 생성.

## 변수의 종류

| 종류 | 선언 위치 | 생명주기 |
|------|-----------|---------|
| 전역 변수 | 메소드 밖 (클래스 필드) | 객체가 살아있는 동안 |
| 지역 변수 | 메소드 내부 또는 {} 내부 | 해당 영역이 종료될 때까지 |
| 정적 변수(static) | static 키워드 사용 | 프로그램 실행부터 종료까지 |`
      },
      {
        slug: 'java-inheritance',
        title: '상속과 접근제어자',
        date: '2025-01-21',
        content: `## 상속(inheritance)

기존에 선언된 클래스의 필드를 새 클래스에서 사용하고자 할 때.
공통 필드를 묶어 부모 클래스를 선언하고, 자식 클래스에게 상속.

\`\`\`java
class A {
    // A 필드
}

class B extends A {
    // A, B 필드 모두 사용 가능
}
\`\`\`

- A: 부모 클래스, 상위 클래스, 슈퍼 클래스
- B: 자식 클래스, 하위 클래스, 서브 클래스

## super()

자식 생성자 호출 시 부모 생성자도 자동으로 호출됨.
직접 작성하지 않아도 컴파일러가 자동으로 추가. 반드시 코드 맨 첫 줄에 작성.

---

## 접근 권한 제어자

| 접근자 | 설명 |
|--------|------|
| default | 같은 패키지 내에서만 접근 가능 |
| public | 모든 곳에서 접근 가능 |
| protected | 같은 패키지 + 자식 클래스에서 접근 가능 |
| private | 해당 클래스 내에서만 접근 가능 |

> \`private\`을 주로 사용하고, 외부에서 접근할 수 있도록 \`public\` getter/setter를 선언하는 것이 모델링 컨벤션이다.`
      },
      {
        slug: 'java-casting-oop',
        title: '객체 형변환 (Casting)',
        date: '2025-01-22',
        content: `## 핵심 개념

> **모든 자식은 부모타입이다.**

## Casting 종류

### Up Casting
자식 값을 부모 타입으로 형변환

\`\`\`java
부모타입 변수 = 자식객체;  // 자동으로 가능
\`\`\`

### Down Casting
Up casting된 객체를 다시 자식 타입에 담기

\`\`\`java
자식타입 변수 = (자식타입)부모타입변수;
\`\`\`

> ⚠️ 부모 값을 자식 타입으로 직접 형변환하면 빌드 오류 발생

## Casting 활용 전략

1. 여러 자식을 하나의 부모 타입으로 묶어서 받음 (up casting)
2. instanceof로 실제 타입 검사
3. 해당 타입으로 down casting 후 사용

\`\`\`java
if (객체명 instanceof 자식클래스명) {
    자식클래스명 obj = (자식클래스명) 객체명;
}
\`\`\``
      },
      {
        slug: 'java-abstract',
        title: '추상 클래스',
        date: '2025-01-23',
        content: `## 추상 클래스

구현이 안 된 메소드(추상 메소드)가 선언되어 있는 클래스.
반드시 재정의(구현)를 통해 메모리에 할당되기 때문에 **강제성**을 위해 사용.

## 선언

\`\`\`java
abstract class 클래스명 {

    // 추상 메소드 — 구현 없음
    abstract 리턴타입 메소드명(매개변수, ...);

    // 일반 메소드도 선언 가능
    리턴타입 메소드명(매개변수, ...) {
        // 구현
    }
}
\`\`\`

> 추상 클래스는 직접 객체화(new)할 수 없고, 반드시 자식 클래스에서 추상 메소드를 구현한 뒤 객체화해야 한다.`
      },
      {
        slug: 'java-interface',
        title: '인터페이스',
        date: '2025-01-24',
        content: `## 인터페이스

추상 클래스를 고도화한 문법. 상수와 추상 메소드만 존재.
구현은 지정한 클래스에서 진행하며, \`implements\` 키워드로 지정.

\`\`\`java
interface Animal {
    void sound();  // 추상 메소드
}

class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("멍멍");
    }
}
\`\`\`

## 인터페이스와 추상 클래스의 관계

- 인터페이스 직접 지정 → 모든 메소드에 강제성 → 전부 구현해야 함
- 일부만 선택적으로 구현하고 싶다면 → 인터페이스를 추상 클래스(\`Adapter\`)에 지정 → 강제성 소멸 → 자식 클래스에서 필요한 것만 재정의

## 인터페이스 특징

1. 자료형(타입)이다 — 구현체는 모두 인터페이스 타입
2. 인터페이스끼리 필드를 주고받을 때 \`extends\` 사용
3. 여러 개의 인터페이스를 동시에 구현 가능 (다중 구현)
4. \`default\` 메소드로 인터페이스 내부에서 일반 메소드 선언 가능 (JDK 8+)`
      },
      {
        slug: 'java-anonymous',
        title: '내부 클래스 · 익명 클래스',
        date: '2025-01-27',
        content: `## 내부 클래스(Inner Class)

어떤 영역 안에 클래스가 선언되면 내부 클래스라고 한다.

## 익명 클래스(Anonymous Inner Class)

이름이 없는 클래스.
구현되지 않은 필드를 구현하기 위해 **일회성**으로 생성되는 클래스.

\`\`\`java
// 인터페이스 또는 추상 클래스를 익명 클래스로 구현
Animal dog = new Animal() {
    @Override
    public void sound() {
        System.out.println("멍멍");
    }
};
\`\`\`

> 익명 클래스는 한 번만 사용할 구현체가 필요할 때 유용하다. 이름이 없으므로 재사용 불가.`
      },
      {
        slug: 'java-lambda',
        title: '함수형 인터페이스와 람다식',
        date: '2025-01-28',
        content: `## 함수형 인터페이스(Functional Interface)

추상 메소드를 **하나만** 가지고 있는 인터페이스.
\`@FunctionalInterface\` 어노테이션으로 단 하나의 추상 메소드만 선언하도록 제한.

## 람다식(Lambda Expression)

함수형 인터페이스에서 메소드 이름 없이 구현하는 **이름 없는 메소드**.
값처럼 사용 가능하고, 매개변수로도 전달 가능 → **익명 메소드(Anonymous Method)**

## 람다식 문법

\`\`\`java
// 1. 매개변수와 리턴값이 있는 경우
(int a, int b) -> a + b;

// 2. 실행 문장이 여러 줄일 때
(int a, int b) -> {
    int result = a + b;
    return result;
};

// 3. 매개변수가 1개면 소괄호 생략 가능
a -> a * 2;
\`\`\`

## 참조형 (::)

\`\`\`java
// 생성자 참조
클래스명::new

// static 메소드 참조
클래스명::메소드명

// 인스턴스 메소드 참조
객체명::메소드명
\`\`\``
      },
      {
        slug: 'java-exception',
        title: '예외 처리',
        date: '2025-01-29',
        content: `## 오류의 종류

1. **컴파일 오류**: 빨간줄, 문법 오류
2. **빌드 오류**: 실행하자마자 오류, 설정 오류
3. **런타임 오류**: 잘 실행되다가 갑자기 오류 (사용자 입력·외부 요인)

런타임 오류는 제어문으로 막을 수 없는 경우가 있다 → **예외 처리 문법**으로 해결.

## try-catch-finally

\`\`\`java
try {
    오류가 발생할 수 있는 문장;
} catch (예외타입 e) {
    오류 발생 시 실행할 문장;
} catch (예외타입 e) {
    오류 발생 시 실행할 문장;
} finally {
    // catch에서 잡히지 않은 오류가 있어도 무조건 실행
}
\`\`\`

## 예외 발생 (throw)

\`\`\`java
throw new BadWordException();
\`\`\`

## 사용자 정의 예외

\`\`\`java
// Exception: 예외 처리 강제 (컴파일 오류 발생)
class MyException extends Exception { ... }

// RuntimeException: 예외 처리 선택적 (컴파일 오류 없음)
class MyException extends RuntimeException { ... }
\`\`\`

## throws

메소드 내에서 예외를 처리하지 않고, 호출한 곳에서 처리하게 할 때.

\`\`\`java
void method() throws MyException {
    // 예외 처리를 호출자에게 위임
}
\`\`\``
      },
      {
        slug: 'java-api',
        title: 'API',
        date: '2025-01-30',
        content: `## API(Application Programming Interface)

개발에 필요한 라이브러리들의 집합. 선배 개발자들이 만들어 놓은 소스코드의 집합.

## 종류

- **내부 API**: JDK 설치 시 제공하는 기본 API (예: \`java.lang\`, \`java.util\`)
- **외부 API**: 사설 업체가 개발한 패키지 및 클래스. 보통 JAR 파일로 배포

## JAR 파일을 프로젝트에 추가하기 (Eclipse)

1. 배포된 JAR 파일 다운로드
2. 프로젝트 우클릭 → Build Path → Configure Build Path
3. Libraries 탭 → ClassPath 클릭 → Add External JARs
4. .jar 파일 더블 클릭으로 추가 → Apply and Close`
      },
      {
        slug: 'java-object',
        title: 'Object 클래스',
        date: '2025-01-31',
        content: `## Object 클래스

최상위 부모 클래스. 모든 클래스는 자동으로 \`Object\`를 상속받는다.
Java에서 **모든 객체는 Object 자료형**이다.

## 주요 메소드

### toString()

객체명을 출력할 때 자동으로 호출됨.
기본 구현은 소속 필드의 주소를 문자열로 반환 → 실무에서는 **재정의**해서 필드 정보를 보여주도록 사용.

\`\`\`java
@Override
public String toString() {
    return "name=" + name + ", age=" + age;
}
\`\`\`

### equals()

주소값을 비교하는 메소드 (\`==\`와 동일).
String 클래스는 \`equals()\`를 **값 비교**로 재정의했기 때문에 문자열 비교는 반드시 \`equals()\` 사용.

### hashCode()

JVM에서 관리하는 고유 값 (실제 메모리 주소와 다름).
해시 기반 컬렉션에서 올바르게 동작하려면 \`equals()\`와 함께 **반드시 재정의** 필요.`
      },
      {
        slug: 'java-collection',
        title: '컬렉션 프레임워크',
        date: '2025-02-03',
        content: `## 컬렉션 프레임워크(Collection Framework)

많은 데이터를 쉽고 효과적으로 관리할 수 있는 자료구조 클래스들의 집합.

---

## List (인터페이스)

인덱스로 데이터 관리. **순서 있음, 중복 허용**.

| 구현체 | 특징 |
|--------|------|
| ArrayList | 인덱스 기반. 실무에서 가장 많이 사용 |
| LinkedList | FILO. 삽입은 빠르지만 특정 위치 조회가 느림 |
| Vector | 보안성 강화, 처리량 감소 |

\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("apple");
list.get(0);      // "apple"
list.remove(0);
list.size();
\`\`\`

> 배열 vs ArrayList: 길이에 제한이 있으면 배열, 개수를 모르면 ArrayList

---

## Set — HashSet (인터페이스)

**순서 없음, 중복 허용 안 함**. 값의 유무 검사에 특화.

\`\`\`java
HashSet<String> set = new HashSet<>();
set.add("a");
set.contains("a");  // true
\`\`\`

### Iterator

순서가 없는 객체에 순서를 부여할 때 사용.

\`\`\`java
Iterator<String> it = set.iterator();
while (it.hasNext()) {
    String val = it.next();
}
\`\`\`

---

## Map — HashMap

**Key-Value 쌍**으로 저장. 검색 목적. Key 중복 불가, Value 중복 허용.

\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 1000);
map.get("apple");   // 1000
map.containsKey("apple");  // true
\`\`\``
      },
      {
        slug: 'java-thread',
        title: '쓰레드',
        date: '2025-02-04',
        content: `## 개념

- **프로그램**: 실행이 안 된 상태
- **프로세스**: 실행 중인 프로그램
- **쓰레드**: 프로세스 내의 작업 처리 경로

## 싱글 쓰레드 vs 멀티 쓰레드

| | 싱글 쓰레드 | 멀티 쓰레드 |
|-|-------------|-------------|
| 처리 방식 | 직렬적 (한 번에 하나) | 매우 짧은 단위로 분할하여 동시처럼 처리 |
| 안정성 | 높음 | 한 쓰레드 오류 시 전체 문제 |
| 설계 | 쉬움 | 복잡 |
| 효율성 | 낮음 | 높음 |

## 멀티 쓰레드 구현

핵심: \`run()\` 메소드 재정의

\`\`\`java
// 방법 1: Thread 클래스 상속
class MyThread extends Thread {
    @Override
    public void run() { ... }
}
new MyThread().start();

// 방법 2: Runnable 인터페이스 구현 (권장)
Thread t = new Thread(new Runnable() {
    public void run() { ... }
});
t.start();

// 람다로 간결하게
Thread t = new Thread(() -> { ... });
t.start();
\`\`\`

> \`extends\`는 단 한 번만 사용할 수 있기 때문에 보통 **Runnable**을 구현한다.

## 동기화(Synchronized)

하나의 쓰레드가 자원 접근 중일 때 다른 쓰레드의 동시 접근을 막는 기술.

\`\`\`java
// 동기화 블록
synchronized(mutex) {
    // 공유 자원 처리
}

// 동기화 메소드
public synchronized void method() { ... }
\`\`\``
      },
      {
        slug: 'java-string',
        title: 'String · StringBuilder · StringBuffer',
        date: '2025-02-05',
        content: `## String

새로운 문자열 상수를 대입할 때마다 Constant Pool에 객체가 생성됨.
\`+\` 연산으로 반복 연결 시 그만큼 객체가 생성 → **메모리 비용 증가**.

\`\`\`java
String s = "hello";
s = s + " world";  // 새 객체 생성
\`\`\`

## StringBuilder

하나의 객체만으로 문자열을 연결. \`append()\`로 추가.
**단일 쓰레드 환경**에서 권장.

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("hello");
sb.append(" world");
String result = sb.toString();
\`\`\`

## StringBuffer

StringBuilder와 동일하지만 내부에 동기화 코드 포함.
단일 쓰레드에서는 오히려 속도 저하 → **멀티 쓰레드 환경**에서 사용.

| | String | StringBuilder | StringBuffer |
|--|--------|---------------|--------------|
| 수정 가능 | ✕ (불변) | ✓ | ✓ |
| 동기화 | - | ✕ | ✓ |
| 권장 환경 | 변경 없는 경우 | 단일 쓰레드 | 멀티 쓰레드 |`
      },
      {
        slug: 'java-file',
        title: '파일 입출력',
        date: '2025-02-06',
        content: `## 파일 입출력 개요

Stream이라는 연결통로를 통해 원본 데이터가 알맞은 인코딩 방식으로 전송됨.
byte 단위로 입출력. **Buffer** 사용 시 일괄처리 가능.

---

## Writer (출력)

\`\`\`java
// FileWriter: 경로의 파일을 출력 목적으로 열기 (없으면 새로 생성)
// BufferedWriter: 버퍼를 사용하는 출력 클래스

BufferedWriter bw = new BufferedWriter(new FileWriter("파일경로"));
bw.write("내용");
bw.newLine();
bw.close();
\`\`\`

## Reader (입력)

\`\`\`java
// FileReader: 경로의 파일을 입력 목적으로 열기 (없으면 FileNotFoundException)
// BufferedReader: 버퍼를 사용하는 입력 클래스

BufferedReader br = new BufferedReader(new FileReader("파일경로"));
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
br.close();
\`\`\`

## File 클래스

전달한 경로에 있는 파일의 정보를 담는 타입.
디렉터리 생성, 파일 목록 조회, 파일 삭제 등 파일 시스템 작업 수행.`
      },
      {
        slug: 'java-jdbc',
        title: 'JDBC와 MVC 패턴',
        date: '2025-02-07',
        content: `## JDBC(Java Database Connectivity)

Java와 RDB 간의 연결을 위한 기술.

---

## MVC 패턴

### M (Model)
테이블에서 조회된 결과 값을 담기 위한 변수들이 선언된 클래스.

- **VO(Value Object)**: 테이블을 보고 그대로 만든 객체, 단일 테이블 조회
- **DTO(Data Transfer Object)**: 화면에 결과를 묶어 전달할 객체, 여러 테이블 조회

### V (View)
사용자에게 보여질 화면 구성.

### C (Controller)
비지니스 로직 처리. DB 연산 코드는 **DAO**로 분리.

- **DAO(Data Access Object)**: CRUD 기능(메소드)만 모아놓은 객체. 조회 결과는 VO 또는 DTO에 담아 반환.

---

## 구조 예시

\`\`\`
사용자 요청
    ↓
Controller (비지니스 로직)
    ↓
DAO (DB 쿼리 실행)
    ↓
DB
    ↓
VO/DTO (결과 담기)
    ↓
View (화면 출력)
\`\`\``
      },
      {
        slug: 'java-class-examples',
        title: '클래스 실습 코드 예시',
        date: '2025-01-29',
        content: `## 전역 변수 vs 지역 변수 실습

\`\`\`java
class A {
    // 전역 변수 — 프로그램 종료 시 메모리 해제, 자동 초기화
    int data;

    void printData() {
        // 지역 변수 — 블록이 끝나면 메모리 해제, 직접 초기화 필요
        int data = 10;

        System.out.println(data);       // 지역 변수: 10
        System.out.println(this.data);  // 전역 변수: 객체에 할당된 값
        System.out.println(this);       // 객체 참조값(주소) 출력
    }
}

public class ClassTest01 {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new A();

        a1.data = 100;
        a1.printData();  // 10, 100, 참조값

        a2.data = 20;
        a2.printData();  // 10, 20, 참조값
    }
}
\`\`\`

- \`this.data\`는 현재 객체의 전역 변수를 가리킨다.
- \`this\`는 현재 객체 자신의 참조값(메모리 주소)이다.
- \`a1\`과 \`a2\`는 서로 다른 객체이므로 \`data\` 값이 독립적이다.

---

## 생성자 오버로딩 실습

\`\`\`java
class Car {
    String brand;
    int price;
    String color;

    public Car() {}

    public Car(String brand, int price, String color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    public Car(String brand, int price) {
        this.brand = brand;
        this.price = price;
    }

    public Car(String brand) {
        this.brand = brand;
    }

    void printInfo() {
        System.out.println(brand + ", " + price + ", " + color);
    }
}

public class ClassTest02 {
    public static void main(String[] args) {
        Car mom   = new Car("Benz", 10000, "Black");
        Car daddy = new Car("BMW");
        Car myCar = new Car("Morning", 2000);

        mom.printInfo();    // Benz, 10000, Black
        daddy.printInfo();  // BMW, 0, null
        myCar.printInfo();  // Morning, 2000, null
    }
}
\`\`\`

- 생성자를 여러 개 정의하면 매개변수 개수·타입에 따라 자동 선택된다.
- 초기화하지 않은 전역 변수는 기본값(\`int → 0\`, \`String → null\`)이 자동 할당된다.`
      }
    ]
  },
  jsp: {
    title: 'JSP',
    icon: 'fas fa-server',
    entries: [
      {
        slug: 'jsp-basics',
        title: 'JSP 기초 — 서버·서블릿·MVC',
        date: '2025-02-10',
        content: `## JSP(Java Server Page)

HTML을 중심으로 Java와 연동하여 사용하는 웹 언어.
HTML 코드 안에 Java 코드를 작성할 수 있다.

---

## 웹 서버 구조

\`\`\`
클라이언트(요청) → 웹 서버(Apache) → 웹 컨테이너(Tomcat) → DB
                                    ← 동적 데이터 처리 ←
클라이언트(응답) ← 웹 서버 ←
\`\`\`

- **웹 서버(Apache)**: 정적 vs 동적 판단. 동적이면 웹 컨테이너로 전달
- **웹 컨테이너**: JSP/서블릿으로 연산, DB 접근. 정제된 데이터를 웹 서버로 반환
- **WAS(Tomcat)**: 서블릿을 메모리에 할당, Thread 생성, 요청/응답 객체 전달

---

## 서블릿(Servlet)

Java 코드 안에 HTML 코드를 작성할 수 있는 Java 프로그램.
Thread에 의해 \`service()\` 메소드가 호출됨 → 전송 방식에 따라 \`doGet()\` 또는 \`doPost()\` 호출.

---

## 요청 방식

| | GET | POST |
|-|-----|------|
| 데이터 위치 | URL 쿼리스트링 | Header에 첨부 |
| 보안성 | 낮음 (주소에 노출) | 높음 |
| 속도 | 빠름 | 느림 |
| 데이터 길이 | 제한 있음 | 제한 없음 |

---

## 응답 방식

### forward
- 요청한 경로가 그대로 유지됨
- \`.jsp\`로 이동할 때 확장자가 표시되지 않게 하기 위해 사용
- 단순 페이지 이동 또는 데이터를 전달할 때

### redirect
- 요청한 경로는 초기화, 응답한 경로가 표시됨
- 다른 서블릿으로 요청할 때 이전 경로가 표시되면 안 되는 경우
- DB 연산 완료 후 페이지를 이동할 때

---

## MVC 패턴 발전

### 순수 JSP
\`\`\`
a.jsp → b.jsp → c.jsp
\`\`\`
규모가 작은 프로젝트에 적합. 코드가 커질수록 가독성·유지보수 저하.

### Model 1
\`\`\`
a.jsp → b.jsp → c.jsp
              ↓
           DAO.java
\`\`\`
Controller와 View가 섞임. 설계는 쉽지만 확장될수록 유지보수 불리.

### Model 2 (Front Controller 패턴)
\`\`\`
a.jsp → web.xml → Front-Controller → Controller → DAO → DB
                                   ↓
                                 View(.jsp)
\`\`\`
비지니스 로직을 완벽하게 분리. \`web.xml\`에서 URL 패턴(\`*.me\`)을 Front-Controller로 라우팅.
요청별 Controller를 인터페이스로 선언하여 구현.

---

## DBCP · JNDI · MyBatis

- **DBCP**: 미리 Connection 객체를 만들어 두고 필요 시 꺼내 쓰는 커넥션 풀 기법. 요청마다 새 연결을 맺는 비용 절감.
- **JNDI**: 디렉터리 서비스에서 외부 객체를 가져오기 위한 Java API
- **MyBatis**: SQL문을 XML 파일에 분리하여 관리. 코드가 줄어들고 SQL 수정이 편해짐.`
      },
      {
        slug: 'jsp-servlet-mvc-code',
        title: 'JSP/서블릿 요청·응답 코드 예시',
        date: '2025-02-11',
        content: `## 기본 요청·응답 흐름 실습

### 1. 입력 폼 (ex01.jsp)

<pre><code>&lt;%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;form action="ex01" method="post"&gt;
        &lt;input type="text" name="memberName"&gt;
        &lt;button&gt;전송&lt;/button&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

### 2. 서블릿 (Ex01.java)

\`\`\`java
public class Ex01 extends HttpServlet {

    // GET: 폼 페이지로 forward
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.getRequestDispatcher("/ex01.jsp").forward(req, resp);
    }

    // POST: 데이터 가공 후 redirect
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String memberName = req.getParameter("memberName");
        memberName = memberName + "님";

        resp.sendRedirect(req.getContextPath()
            + "/ex01-result?memberName="
            + URLEncoder.encode(memberName, "UTF-8"));
    }
}
\`\`\`

- **GET**: \`forward\`로 폼 JSP를 응답 → 경로 유지
- **POST**: 데이터 가공 후 \`sendRedirect\` → 결과 페이지로 이동, 경로 변경

### 3. 결과 페이지 (ex01-result.jsp)

<pre><code>&lt;%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%&gt;
&lt;body&gt;
    &lt;h1&gt;&lt;%=request.getParameter("memberName")%&gt;&lt;/h1&gt;
&lt;/body&gt;</code></pre>

- \`<%= %>\`: JSP 표현식(Expression) — 값을 HTML에 출력할 때 사용

---

## Front Controller 패턴 코드 예시

\`\`\`java
public class MemberFrontController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String uri = req.getRequestURI();
        String target = uri.substring(0, uri.lastIndexOf("."))
                           .replace(req.getContextPath(), "");
        Result result = null;

        if (target.equals("/join")) {
            result = new JoinController().execute(req, resp);
        } else if (target.equals("/join-ok")) {
            result = new JoinOkController().execute(req, resp);
        } else if (target.equals("/login")) {
            result = new LoginController().execute(req, resp);
        } else if (target.equals("/login-ok")) {
            result = new LoginOkController().execute(req, resp);
        }

        if (result != null) {
            if (result.isRedirect()) {
                resp.sendRedirect(result.getPath());
            } else {
                req.getRequestDispatcher(result.getPath()).forward(req, resp);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        doGet(req, resp);
    }
}
\`\`\`

### 동작 원리

1. \`web.xml\`의 URL 패턴(\`*.me\`)이 모든 요청을 \`MemberFrontController\`로 라우팅
2. URI에서 확장자를 제거하고 \`target\` 문자열 추출
3. \`target\`에 따라 기능별 \`Controller\`의 \`execute()\` 실행
4. 반환된 \`Result\`의 \`isRedirect()\` 값에 따라 \`forward\` 또는 \`redirect\`로 응답
5. \`doPost()\`는 \`doGet()\`을 재호출하여 GET/POST 동일 처리`
      }
    ]
  },
  mysql: {
    title: 'MySQL',
    icon: 'fas fa-database',
    entries: [
      {
        slug: 'mysql-basics',
        title: 'MySQL 기초와 RDBMS',
        date: '2026-01-06',
        content: `## MySQL

웹 사이트와 다양한 애플리케이션에서 사용되고, 간결성, 빠른 속도, 쉬운 관리가 핵심인 DBMS이다.

| 규모 | 선택 |
|------|------|
| 웹(소규모~중규모) | MySQL |
| 웹(중규모~대규모) + AI | PostgreSQL |
| 웹(초대규모, 고가) | Oracle |

## RDBMS(관계형 데이터베이스 시스템)

데이터를 행(Row)과 열(Column)로 구성된 **Table** 구조로 관리한다.

- **Column(열, 속성, 필드)**: 공통된 값들의 주제
- **Row(행, 튜플, 레코드)**: 하나의 정보

**제약 조건**

| 제약 조건 | 설명 |
|-----------|------|
| Primary Key (PK) | 고유한 값, 중복 없음, NULL 불허 |
| Foreign Key (FK) | 다른 테이블의 PK, 중복·NULL 가능 |
| Unique Key (UK) | NULL 허용, 중복 불허 |

## SQL 자료형

| 종류 | 타입 |
|------|------|
| 정수 | tinyint, smallint, int, bigint |
| 실수 | decimal(m, d) |
| 날짜 | date, time, datetime |
| 문자 | char(m) 고정, varchar(m) 가변 |

## DDL(Data Definition Language) — 데이터 정의어

\`\`\`sql
-- 테이블 생성
create table [테이블명]([컬럼명] [자료형] [제약조건], ...);

-- 테이블 삭제
drop table [테이블명];

-- 컬럼 추가/삭제/수정
alter table [테이블명] add [컬럼명] [자료형] [제약조건];
alter table [테이블명] drop [컬럼명];
alter table [테이블명] modify [컬럼명] [변경할타입];

-- 행 전체 삭제
truncate table [테이블명];
\`\`\`

## 무결성

데이터의 정확성, 일관성, 유효성이 유지되는 것.

1. **개체 무결성**: 모든 테이블은 PK를 가져야 한다
2. **참조 무결성**: 두 테이블의 데이터가 항상 일관된 값을 유지
3. **도메인 무결성**: 컬럼의 타입, NULL 허용 여부 등 올바른 데이터 검증

## 모델링

추상적인 주제를 RDB에 맞게 설계하는 작업.

1. 요구사항 분석
2. 개념적 설계(개념 모델링)
3. 논리적 설계(논리 모델링) — PK, FK, UK, NOT NULL 정의
4. 물리적 설계(물리 모델링) — 실제 자료형과 제약 조건 작성
5. 구현`
      },
      {
        slug: 'mysql-dml',
        title: '정규화, DML, Join, TCL',
        date: '2026-01-08',
        content: `## 정규화

삽입/수정/삭제 이상 현상을 제거하기 위한 작업. 데이터 중복 최소화가 목적.

**이상현상의 종류**

- **삽입 이상**: 불필요한 데이터를 함께 삽입해야 하는 문제
- **갱신 이상**: 일부만 변경하여 데이터가 불일치하는 문제
- **삭제 이상**: 행 삭제 시 꼭 필요한 데이터까지 함께 삭제되는 문제

**1차 정규화**: 같은 내용의 컬럼이 연속적으로 나타날 경우 → 행으로 분리

**2차 정규화**: 조합키의 일부에만 종속되는 속성 제거(부분 종속 제거)

**3차 정규화**: PK가 아닌 컬럼이 다른 컬럼을 결정하는 경우 제거(이행 종속 제거)

## DML(Data Manipulation Language) — 데이터 조작어

\`\`\`sql
-- 조회
select [컬럼명1], [컬럼명2] from [테이블명] where [조건식];

-- 추가
insert into [테이블명] ([컬럼명1], ...) values ([값1], ...);

-- 수정
update [테이블명] set [컬럼명1] = [값1] where [조건식];

-- 삭제
delete from [테이블명] where [조건식];
\`\`\`

**조건식 연산자**: \`>\`, \`<\`, \`>=\`, \`<=\`, \`=\`, \`<>\`, \`and\`, \`or\`

## Join

여러 테이블에서 필요한 정보만 가져와 가상의 테이블로 만드는 문법.

\`\`\`sql
-- 내부 조인 (등가 조인)
[선행 테이블] inner join [후행 테이블] on [조건식]

-- 외부 조인 (선행 테이블 전체 조회)
[선행 테이블] left outer join [후행 테이블] on [조건식]
\`\`\`

## TCL(Transaction Control Language) — 트랜잭션 제어어

**트랜잭션**: 하나의 서비스를 위한 DML의 묶음 또는 작업 단위.

예) "상품 구매 시 포인트 적립" 서비스 → INSERT(구매) + UPDATE(포인트) 2개의 DML이 하나의 트랜잭션. INSERT는 성공해도 UPDATE에서 문제 발생 시 INSERT를 복구해야 한다.`
      }
    ]
  },
  git: {
    title: 'Git',
    icon: 'fab fa-git-alt',
    entries: []
  },
  spring: {
    title: 'Spring Boot',
    icon: 'fas fa-leaf',
    entries: [
      {
        slug: 'spring-framework-di',
        title: 'Spring Framework와 DI',
        date: '2026-01-13',
        content: `## Framework

라이브러리 → API → 프레임워크 순서로 규모가 커진다.

**Framework 장점**: 개발에 필요한 구조가 이미 코드로 만들어져 있어, 반쯤 완성된 상태에서 조립하는 형태로 개발 가능.

## Spring Framework의 특징

- POJO 기반의 구성 (일반적인 자바 객체 방식 그대로 사용 가능)
- AOP 지원 (관점 지향 프로그래밍 — 횡단 관심사를 분리해 핵심 로직에 집중)
- Transaction 관리 (어노테이션으로 트랜잭션 영역 구성)
- 편리한 MVC 구조
- WAS에 종속적이지 않은 개발 환경
- **DI를 통한 객체간의 관계 구성**

## DI(Dependency Injection) — 의존성 주입

**의존성**: A 객체가 B 객체 없이 동작 불가능한 상황 = "A가 B에 의존적이다"

A 필드에 B 객체를 직접 생성하면 결합성이 단단해져 유연성이 떨어진다. 대신 외부에서 B 객체를 주입받으면 유연성이 높아진다.

Spring에서는 \`ApplicationContext\`가 Bean을 생성하고 주입하는 역할을 한다. ApplicationContext가 관리하는 객체를 **Bean** 이라 하며, Spring Container에 저장된다.

## Spring Boot

Spring Framework의 복잡한 초기 설정과 라이브러리 버전 관리를 자동화해주는 도구.

**프로젝트 기본 경로**

| 경로 | 역할 |
|------|------|
| src/main/java | 서버단 JAVA 파일 |
| src/main/resources | 설정 파일 및 뷰단 |
| src/main/resources/static | css, js, image 등 정적 파일 |
| src/main/resources/templates | html 파일 |
| build.gradle | 라이브러리 관리 |
| application.yml | Spring의 모든 설정 |

## Spring MVC (Front-Controller Pattern)

\`\`\`
REQUEST ↔ DispatcherServlet ↔ HandlerAdapter ↔ Controller
          ↕                  ↕
         View          ViewResolver
\`\`\`

**특징**
- HttpServletRequest/Response 직접 사용 지양
- 다양한 타입의 파라미터, 리턴 타입 사용 가능
- GET/POST 등 전송 방식을 어노테이션으로 처리
- 상속/인터페이스 대신 어노테이션으로만 설정 가능`
      },
      {
        slug: 'spring-rest-3tier',
        title: 'Qualifier, REST, 3-tier',
        date: '2026-02-03',
        content: `## Qualifier

\`@Autowired\`로 객체 주입 시 같은 타입의 객체가 여러 개 있을 때 \`@Qualifier\`로 식별자를 설정해 원하는 객체를 주입받는다.

## REST (Representational State Transfer)

URI만으로도 데이터 또는 행위(CRUD) 상태를 이해할 수 있도록 설계하는 규칙.

1. 소문자로 작성
2. 언더바 대신 하이픈 사용
3. URI 마지막에 슬래시 작성 금지
4. 계층 관계 표현 시 슬래시로 구분
5. 파일 확장자 포함 금지 (Header의 Content-Type 사용)
6. 행위(동사)는 URI가 아닌 HTTP Method로 표현
7. URI의 영어 단어는 복수형 사용 (데이터의 집합)

## HTTP Method

| Method | 역할 |
|--------|------|
| GET | 조회 (Read) |
| POST | 생성 (Create) |
| PUT | 전체 수정 (Update) |
| PATCH | 일부 수정 (Update) |
| DELETE | 삭제 (Delete) |

## 3-tier 아키텍처

스프링 프로젝트는 3-tier 방식으로 설계된다.

| Tier | 역할 | 클래스 |
|------|------|--------|
| Presentation | 화면 계층 | Controller |
| Business | 비지니스 로직 | Service |
| Persistence | 데이터 보관/사용 | Repository / Mapper |

**목적**: 각 영역을 독립적으로 설계해 특정 기술이 변하더라도 부품처럼 쉽게 교환할 수 있게 한다.

\`\`\`
Presentation ↔ Business ↔ Persistence ↔ DBMS
Controller     Service    Repository    Mapper
\`\`\``
      },
      {
        slug: 'spring-crud-design',
        title: '프로젝트 CRUD 설계',
        date: '2026-02-17',
        content: `## 비동기와 동기

- **비동기**: 이벤트 발생 시 보이는 데이터 (사용자 액션 이후)
- **동기**: 페이지 도착 시 바로 보여야 하는 데이터

## CRUD 설계 패턴

### 작성 (INSERT)

- VO 기본 사용
- INSERT된 행의 정보(id)가 필요할 때에는 DTO 사용

### 조회 (SELECT)

- \`Optional\` 객체로 래핑
- \`orElseThrow(Object::new)\`로 예외 처리
- \`ExceptionHandler\` 활용

### 목록 (SELECT)

**페이징 처리** — Criteria 활용

\`\`\`
page, rowCount, pageCount, startPage, endPage, offset
\`\`\`

**검색**: type, keyword (통합 검색 시 keyword만 사용)

**필터 (동적쿼리)**

- 일부 포함: \`<foreach>\` 태그로 배열 처리
- 전부 포함: \`group by\` + \`having count = 전달받은 개수\`

### 수정 (UPDATE)

1:N 관계에서 N을 수정하는 경우: **삭제 목록 + 추가 목록** 으로 처리

파일인 경우 반드시 실제 경로도 삭제 (삭제 전 경로 조회 필수)

### 삭제

- **Soft Delete**: UPDATE (deleted_at 등 플래그)
- **Hard Delete**: DELETE (반드시 자식 테이블부터 삭제)`
      },
      {
        slug: 'spring-security-jwt',
        title: 'Spring Security, JWT, PostgreSQL, Redis',
        date: '2026-03-10',
        content: `## Spring Security

Spring 기반 애플리케이션의 인증(Authentication)과 인가(Authorization)를 처리하는 프레임워크.

**구성 요소**

| 클래스 | 역할 |
|--------|------|
| Provider | JWT 생성, 서명, 검증 구현 |
| Filter | 인증 성공 시 JWT 생성 후 클라이언트 전달 |
| UserDetailService | 사용자 정보 조회 및 인증 처리 |
| SecurityConfig | 보안 설정 (필터 체인, 접근 제한, 권한 설정) |

## JWT (JSON Web Token)

JSON 형태의 토큰으로 서버-클라이언트 간 인증 정보를 안전하게 주고받는다.

**특징**
1. 자체적으로 인증 정보를 포함 (stateless)
2. 서명(Signature)으로 위변조를 방지

**구조**: Header + Payload + Signature

- **Signature**: Header + Payload를 시크릿키로 암호화 — 서버는 동일한 방식으로 서명을 재생성하여 일치 여부로 위변조 판단

**인증 흐름**

1. 사용자가 ID/PW로 로그인 요청
2. 인증 성공 시 JWT 생성 후 클라이언트 전달
3. 클라이언트는 이후 요청 헤더에 JWT 포함
4. 서버가 JWT 유효성 검증 후 인증 처리
5. 권한 확인 후 접근 허용

## PostgreSQL

MySQL과 달리 복잡한 쿼리 처리와 확장 기능에 강한 DBMS. pgVector로 벡터 임베딩 저장이 가능해 AI 연동에 적합하다.

**MySQL vs PostgreSQL**

| | MySQL | PostgreSQL |
|---|---|---|
| 특징 | 속도 중심, 단순 구조 | 기능 중심, 복잡한 연산 |
| 확장 | 표준 자료형 충실 | 사용자 정의 타입 가능 |
| 적합 | 블로그, 게시판 | AI, 대용량 데이터 |

## Redis (Remote Dictionary Server)

빠른 속도의 메모리 기반 키-값 저장소. 캐시, 세션 저장, 토큰 관리에 활용.

**특징**
- 매우 빠른 읽기/쓰기 (메모리 기반)
- 데이터 만료 기능(TTL) 지원
- 여러 데이터 타입 지원 (문자열, 리스트, 해시, 집합 등)

**주요 활용**
1. 분산 시스템 환경에서의 세션 공유
2. 로그아웃 시 토큰 무효화
3. 캐싱 — DB 조회 결과, 외부 API 호출 결과 등`
      }
    ]
  },
  python: {
    title: 'Python',
    icon: 'fab fa-python',
    entries: [
      {
        slug: 'python-intro',
        title: 'Python 기초와 아나콘다',
        date: '2026-03-17',
        content: `## Python

GUI 개발, 웹 개발, 데이터 분석, AI 등에 사용하는 인기 있는 언어.

**일반 프로그램**: 프로그램 → OS → 하드웨어 (이식성이 좋지 않다)

**Python 프로그램**: 프로그램 → PVM(Python Virtual Machine) → OS → 하드웨어 (이식성이 좋다)

## 아나콘다(Anaconda)

데이터 사이언스, 머신러닝, AI 분야에서 가장 인기 있는 파이썬 통합 배포판.

- 개발에 필요한 수많은 도구(라이브러리)와 환경 관리 시스템을 하나로 묶어놓음
- **가상환경** 지원 — 프로젝트마다 독립된 환경으로 패키지 간 충돌 방지

## 변수와 자료형

변수는 값을 담는 저장공간. **동적 바인딩** — 값에 따라 자료형이 자동으로 결정된다.

| 자료형 | 예시 |
|--------|------|
| 정수(int) | 0, 10, -187 |
| 실수(float) | 0.0, 10.58 |
| 문자열(str) | 'Python', "안녕" |
| 리스트(list) | [1, 2, 3] |
| 튜플(tuple) | (1, 2), 1, 2, 3 |
| 딕셔너리(dict) | {key: value} |
| 집합(set) | {1, 2, 3} |
| 불린(bool) | True, False |

## 표기법

| 표기법 | 용도 | 예시 |
|--------|------|------|
| 파스칼(PascalCase) | 클래스명, 오류명 | MyClass |
| 스네이크(snake_case) | 변수, 함수 | my_variable |
| 카멜(camelCase) | Java 등 | myVariable |
| 케밥(kebab-case) | HTML, CSS | my-element |`
      },
      {
        slug: 'python-control',
        title: '연산자, 제어문, 컬렉션',
        date: '2026-03-18',
        content: `## 연산자

| 종류 | 예시 |
|------|------|
| 산술 | +, -, *, /, **, //(몫), %(나머지) |
| 대입 | =, +=, -=, *=, /=, **=, //= |
| 비교 | ==, !=, >, <, >=, <= |
| 논리 | and, or, not |
| 멤버 | \`in\`, \`not in\` (좌항이 우항에 포함 여부) |
| 식별 | \`is\`, \`is not\` (같은 주소 여부) |

## 제어문

**조건문 (if)**

\`\`\`python
if 조건식:
    실행할 문장
elif 조건식:
    실행할 문장
else:
    실행할 문장
\`\`\`

**반복문**

\`\`\`python
# for문
for 변수명 in range(start, end, step):
    실행할 문장

# while문
while 조건식:
    실행할 문장
\`\`\`

## list (리스트)

여러 개의 저장공간이 나열되어 있는 것.

\`\`\`python
data_list = [1, 2, 3]
len(data_list)             # 길이

data_list.append(4)        # 추가
data_list.insert(1, 1.5)   # 삽입 (인덱스, 값)
data_list.remove(2)        # 값으로 삭제
del data_list[0]           # 인덱스로 삭제
data_list.clear()          # 전체 삭제
data_list.index(3)         # 값의 인덱스 반환
data_list[0] = 99          # 값 수정
\`\`\`

## dict (딕셔너리)

키-값(key: value) 쌍으로 저장. 키는 중복 불가, 값은 중복 가능.

\`\`\`python
data_dict = {'name': '홍길동', 'age': 25}

data_dict['email'] = 'test@test.com'  # 추가
data_dict.update({'age': 30})          # 수정 (없으면 추가)
del data_dict['age']                   # 삭제
'name' in data_dict                    # 키 존재 확인 (True)
\`\`\``
      },
      {
        slug: 'python-class-module',
        title: '함수, 클래스, 모듈',
        date: '2026-03-19',
        content: `## 함수(Function)

\`\`\`python
def 함수명(매개변수, ...):
    실행할 문장
    return 리턴값
\`\`\`

함수를 사용하는 목적:
1. 재사용 (단, 특정성 부여 금지)
2. 소스코드 간결화

## 클래스(Class)

공통 요소를 한 번만 선언하는 방식. 클래스는 **타입**이자 **주어**이다.

\`\`\`python
class Animal:
    def __init__(self, name):   # 생성자
        self.name = name        # self: 접근한 객체의 주소

    def speak(self):
        return f"{self.name} speaks"

cat = Animal("Cat")   # 객체화(인스턴스)
cat.speak()
\`\`\`

**매직 메소드** (클래스에 정의하는 스페셜 메소드)

| 메소드 | 용도 |
|--------|------|
| \`__init__\` | 생성자 |
| \`__str__\` | 문자열 표현 |
| \`__len__\` | len() 연산 |
| \`__add__\` | + 연산자 |
| \`__eq__\` | == 연산자 |

## 모듈(Module)

변수와 함수, 클래스 등을 모아놓은 파이썬 파일.

\`\`\`python
import 모듈명                  # 모듈 전체 import
import 모듈명 as 별칭           # 별칭 지정
from 모듈명 import 함수명       # 특정 함수만 import
from 모듈명 import *           # 모든 함수 import
\`\`\`

**패키지**: 폴더를 생성하여 .py 파일을 관리. Python 3.3부터는 \`__init__.py\` 없이도 자동 패키지 인식.`
      }
    ]
  },
  fastapi: {
    title: 'FastAPI',
    icon: 'fas fa-bolt',
    entries: [
      {
        slug: 'fastapi-basics',
        title: 'FastAPI 기초',
        date: '2026-04-07',
        content: `## FastAPI

파이썬 기반 웹 애플리케이션 서버 프레임워크.

- \`/docs\`로 요청하면 Swagger UI(API 명세서)가 자동 생성됨
- 비동기 프로그래밍 지원 — 동시에 많은 요청도 효율적으로 처리
- 단순한 웹 서비스나 AI 컨텐츠 API 제작에 적합
- Java Spring에 비해 코드 양이 적어 생산성이 높음

## Uvicorn (ASGI)

FastAPI 소스코드를 웹에서 동작하게 만드는 실행 엔진.

**ASGI** (Asynchronous Server Gateway Interface): 비동기 방식 통신 약속.

\`\`\`bash
uvicorn main:app --reload   # --reload: 코드 수정 시 자동 재시작
\`\`\`

동기 코드는 파이썬 인터프리터가 즉시 실행, 비동기 코드는 uvloop(이벤트 루프)에 등록되어 대기 작업으로 별도 관리 후 완료되면 다시 실행.

## 소프트웨어 디자인 패턴

MVC와 유사한 패턴을 직접 구현하여 사용.

| 폴더/파일 | 역할 |
|-----------|------|
| domain | 실제 DB 테이블과 연결되는 클래스 |
| schema | 화면에서 사용할 필드 모음(DTO) |
| repository | DB 직접 접근, CRUD 처리 |
| router | URL 정의, service 연결 |
| service | 비지니스 로직 작성 |
| sql | 데이터베이스 스크립트 파일 |
| .env | 보안 정보, 환경 설정값 |
| requirements.txt | 필요한 라이브러리 목록 |

\`\`\`
클라이언트 ↔ router ↔ service ↔ repository ↔ domain
\`\`\``
      }
    ]
  },
  aws: {
    title: 'AWS',
    icon: 'fab fa-aws',
    entries: [
      {
        slug: 'aws-server-setup',
        title: 'Ubuntu 서버 설정 및 Spring 배포',
        date: '2026-02-27',
        content: `## Ubuntu 초기 설정

\`\`\`bash
sudo passwd        # 비밀번호 설정 (1234)
sudo apt update && sudo apt upgrade -y
sudo apt install -y tzdata
sudo dpkg-reconfigure tzdata    # 시간대: Asia/Seoul
\`\`\`

## Java 설치

\`\`\`bash
sudo apt-get install openjdk-17-jdk

# ~/.bashrc 최하단에 추가
export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))
export PATH=$PATH:$JAVA_HOME/bin

source ~/.bashrc
echo $JAVA_HOME
\`\`\`

## Swap 메모리 설정

\`\`\`bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
free -h
\`\`\`

## Spring 프로젝트 배포

\`\`\`bash
git clone [repo-url]
chmod +x ./gradlew
./gradlew build
java -jar build/libs/app.jar
\`\`\`

## 포트 포워딩 (80 → 10000)

\`\`\`bash
sudo apt install iptables-persistent
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 10000
sudo chmod 777 /etc/iptables/rules.v4
sudo iptables-save > /etc/iptables/rules.v4
\`\`\`

## MySQL on AWS

\`\`\`bash
sudo apt install mysql-server
sudo ufw allow mysql
sudo systemctl start mysql
sudo systemctl enable mysql

# mysqld.cnf 에서 bind-address = 127.0.0.1 주석 처리 또는 삭제
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
sudo /etc/init.d/mysql restart

sudo /usr/bin/mysql -u root -p   # 비밀번호: 1234
\`\`\``
      }
    ]
  },
  llm: {
    title: 'LLM',
    icon: 'fas fa-robot',
    entries: []
  },
  ml: {
    title: 'Machine Learning',
    icon: 'fas fa-brain',
    entries: []
  },
  dataanalysis: {
    title: 'Data Analysis',
    icon: 'fas fa-chart-bar',
    entries: []
  }
};
