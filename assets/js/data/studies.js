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
    entries: []
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

## 메소드 선언

\`\`\`java
리턴타입 메소드명(자료형 매개변수명, ...) {
    실행할 문장;
    return 리턴값;
}
\`\`\`

## 메소드 선언 순서

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
|------|-----------|----------|
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
      }
    ]
  },
  mysql: {
    title: 'MySQL',
    icon: 'fas fa-database',
    entries: []
  },
  git: {
    title: 'Git',
    icon: 'fab fa-git-alt',
    entries: []
  }
};
