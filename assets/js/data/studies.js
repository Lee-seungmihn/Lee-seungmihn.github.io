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
        slug: 'html-basics',
        title: 'HTML 기초 — 웹 개념·요소·속성',
        date: '2025-01-02',
        content: `## 서버와 클라이언트

- **클라이언트**: 서버에게 요청하는 대상
- **서버**: 요청받은 서비스를 응답해주는 대상
- **웹(Web)**: 요청과 응답이 일어나는 장소

## 프로토콜(Protocol)

네트워크 통신에서 통신을 하기 위한 규칙 또는 약속

- **http**: 클라이언트와 서버 간 웹 페이지 등의 자원을 통신하는 규약. 텍스트로 통신하기 때문에 가로채면 누구든 내용을 볼 수 있다.
- **https**: 자원을 암호화해서 통신하는 규약

---

## 웹 표준

| 기술 | 역할 |
|------|------|
| HTML | 화면의 기본 골조를 제작하는 마크업 언어 |
| CSS  | 요소의 스타일을 정하는 규칙. 내용과 스타일 분리 |
| JS   | 화면에서 연산·이벤트·비동기 통신을 담당하는 스크립트 언어 |
| XML  | 임의로 지은 태그로 데이터를 설명하는 데이터 전달 언어 |

---

## HTML 요소 구조

\`\`\`html
<p> You are better </p>
\`\`\`

1. **여는 태그**: \`<p>\`
2. **내용**: 해당 태그에 적용될 텍스트
3. **닫는 태그**: \`</p>\`

## 속성(Attributes)

태그는 속성을 가질 수 있다. 내용에 나타내고 싶지 않지만 추가적인 정보를 담을 때 사용한다.

\`\`\`html
<p class="conversation" id="conv1"> You are much better </p>
\`\`\`

- 속성은 태그 이름 다음에 공백으로 구분
- 여러 속성은 속성 사이에도 공백
- 속성값은 따옴표 안에 작성

---

## HTML 요소의 종류

### 블록 요소
\`p, h, ul, ol, form, div\` 등

- 웹 페이지에 블록(영역)을 만드는 태그
- 뒤에 오는 요소가 아래 줄로 내려감
- \`width, height, margin, padding\` 모두 적용 가능

### 인라인 요소
\`span, a, img, strong, em\` 등

- 새로운 영역을 만들지 않고 단락 내에 나타남
- 내용만큼만 영역 차지
- \`width, height\` 임의 부여 불가
- \`margin-top, margin-bottom\` 적용 안 됨

### 인라인-블록 요소
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
        content: `## 입력 클래스

\`\`\`java
Scanner sc = new Scanner(System.in);
\`\`\`

## 입력 메소드

\`\`\`java
sc.next()      // 공백 또는 줄바꿈을 구분점으로 문자열 분리
sc.nextLine()  // 공백도 값으로 취급, 한 줄 전체 입력
\`\`\`

- \`next()\`: 첫 번째 호출에 첫 번째 문자열, 두 번째 호출에 두 번째 문자열
- \`nextLine()\`: 엔터 전까지 입력한 전체 문자열 반환`
      },
      {
        slug: 'java-operator',
        title: '연산자',
        date: '2025-01-14',
        content: `## 연산자 우선순위

1. 최우선 연산자 \`()\`
2. 단항 연산자
3. 산술 연산자
4. 쉬프트 연산자
5. 관계 연산자
6. 논리 연산자
7. 삼항 연산자
8. 대입 연산자

---

## 관계 연산자

\`\`\`
==     같다
!=     같지 않다
>, <   초과, 미만
>=, <= 이상, 이하
\`\`\`

## 논리 연산자

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

## 증감 연산자

\`\`\`java
data++;  // 후위형: 다음 라인부터 적용 (권장)
++data;  // 전위형: 해당 라인부터 즉시 적용
\`\`\``
      },
      {
        slug: 'java-control',
        title: '제어문 (조건문·반복문)',
        date: '2025-01-15',
        content: `## 조건문

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
    default:
        실행할 문장;
        break;
}
\`\`\`

> **삼항 vs if vs switch**: 조건식 1개 → 삼항, 비교·복합 조건 → if, 하나의 변수의 여러 값 비교 → switch

---

## 반복문

\`\`\`java
// for문
for (초기식; 조건식; 증감식) { 실행할 문장; }

// while문
while (조건식) { 실행할 문장; }

// do~while문
do { 실행할 문장; } while (조건식);
\`\`\`

## 기타

- \`break\`: 즉시 해당 중괄호 영역 탈출
- \`continue\`: 즉시 다음 반복으로 넘어감`
      },
      {
        slug: 'java-array',
        title: '배열',
        date: '2025-01-16',
        content: `## 배열 선언

\`\`\`java
자료형[] 배열명 = {값1, 값2, ...};   // 값을 알 때
자료형[] 배열명 = new 자료형[칸수]; // 칸수는 알지만 값은 모를 때
자료형[] 배열명 = null;              // 둘 다 모를 때
\`\`\`

## 배열 사용

\`\`\`java
int[] arData = {3, 5, 1, 2, 8};
arData[0]      // → 3 (인덱스는 0부터 시작)
arData[2]      // → 1
arData.length  // → 5
\`\`\`

## 2차원 배열

\`\`\`java
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
        content: `## 메소드 선언

\`\`\`java
리턴타입 메소드명(자료형 매개변수명, ...) {
    실행할 문장;
    return 리턴값;
}
\`\`\`

선언 순서: 이름 → 매개변수 → 실행할 문장 → 리턴값 → 리턴타입

\`\`\`java
int add(int number1, int number2) {
    return number1 + number2;
}
\`\`\`

**사용 이유**: 재사용, 소스코드 간결화

---

## 다형성(Polymorphism)

### 오버로딩(Overloading)
매개변수의 개수 또는 자료형이 다르면 동일한 이름의 메소드 선언 가능

### 오버라이딩(Overriding)
부모 클래스의 메소드를 자식 클래스에서 재정의.
자식 객체로 접근하면 가까운 곳(자식 필드)에서 찾기 때문에 재정의된 메소드 사용.
부모 기능을 그대로 쓰려면 \`super\`로 접근.`
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

// 객체화
클래스명 객체명 = new 클래스명();
\`\`\`

- **static**: 모든 객체가 공유하는 필드. 클래스로 접근.

## 생성자

클래스 이름 뒤에 소괄호. 리턴이 없어서 메소드라고 부르지 않음.
1. 필드를 메모리에 할당 후 주소값 반환
2. 초기화

## this

필드에 접근한 객체의 주소값이 자동으로 담기는 변수. 객체마다 1개씩 생성.

## 변수의 종류

| 종류 | 선언 위치 | 생명주기 |
|------|-----------|----------|
| 전역 변수 | 메소드 밖 (클래스 필드) | 객체가 살아있는 동안 |
| 지역 변수 | 메소드 내부 또는 {} 내부 | 해당 영역 종료 시 |
| 정적 변수(static) | static 키워드 사용 | 프로그램 실행부터 종료까지 |`
      },
      {
        slug: 'java-inheritance',
        title: '상속과 접근제어자',
        date: '2025-01-21',
        content: `## 상속(inheritance)

\`\`\`java
class A { /* A 필드 */ }

class B extends A { /* A, B 필드 모두 사용 가능 */ }
\`\`\`

**super()**: 자식 생성자 호출 시 부모 생성자 자동 호출. 반드시 코드 맨 첫 줄에 작성.

## 접근 권한 제어자

| 접근자 | 설명 |
|--------|------|
| default | 같은 패키지 내에서만 접근 |
| public | 모든 곳에서 접근 |
| protected | 같은 패키지 + 자식 클래스 접근 |
| private | 해당 클래스 내에서만 접근 |

> \`private\`으로 선언하고 외부에서 접근할 수 있도록 \`public\` getter/setter를 선언하는 것이 컨벤션이다.`
      },
      {
        slug: 'java-casting-oop',
        title: '객체 형변환 (Casting)',
        date: '2025-01-22',
        content: `## 핵심

> **모든 자식은 부모타입이다.**

## Up Casting / Down Casting

\`\`\`java
// Up casting: 자동
부모타입 변수 = 자식객체;

// Down casting: 명시적 형변환 필요
자식타입 변수 = (자식타입) 부모타입변수;
\`\`\`

> ⚠️ 부모 값을 자식 타입으로 직접 형변환하면 빌드 오류

## instanceof

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

구현이 안 된 추상 메소드가 선언되어 있는 클래스.
반드시 재정의를 통해 구현해야 메모리에 할당 → **강제성**을 위해 사용.

\`\`\`java
abstract class 클래스명 {

    abstract 리턴타입 메소드명(매개변수, ...);  // 추상 메소드

    리턴타입 메소드명(매개변수, ...) {           // 일반 메소드도 선언 가능
        // 구현
    }
}
\`\`\`

> 추상 클래스는 직접 \`new\`로 객체화할 수 없다.`
      },
      {
        slug: 'java-interface',
        title: '인터페이스',
        date: '2025-01-24',
        content: `## 인터페이스

추상 클래스를 고도화한 문법. 상수와 추상 메소드만 존재.
\`implements\` 키워드로 클래스에 지정.

\`\`\`java
interface Animal { void sound(); }

class Dog implements Animal {
    public void sound() { System.out.println("멍멍"); }
}
\`\`\`

## 특징

1. 자료형(타입)이다 — 구현체는 모두 인터페이스 타입
2. 인터페이스끼리 \`extends\` 사용
3. 여러 개 동시 구현 가능 (다중 구현)
4. JDK 8+: \`default\` 메소드로 내부에서 일반 메소드 선언 가능

## 추상 클래스와의 관계

일부만 선택적으로 구현하고 싶을 때 → 인터페이스를 추상 클래스(Adapter)에 지정 → 강제성 소멸 → 자식 클래스에서 필요한 것만 재정의`
      },
      {
        slug: 'java-anonymous',
        title: '내부 클래스 · 익명 클래스',
        date: '2025-01-27',
        content: `## 익명 클래스(Anonymous Inner Class)

이름이 없는 클래스. 구현되지 않은 필드를 구현하기 위해 **일회성**으로 생성.

\`\`\`java
Animal dog = new Animal() {
    @Override
    public void sound() {
        System.out.println("멍멍");
    }
};
\`\`\`

> 이름이 없으므로 재사용 불가. 한 번만 사용할 구현체가 필요할 때 유용.`
      },
      {
        slug: 'java-lambda',
        title: '함수형 인터페이스와 람다식',
        date: '2025-01-28',
        content: `## 함수형 인터페이스

추상 메소드를 **하나만** 가진 인터페이스.
\`@FunctionalInterface\` 어노테이션으로 제한.

## 람다식(Lambda Expression)

이름 없는 메소드. 값처럼 사용 가능 → **익명 메소드**

\`\`\`java
// 기본
(int a, int b) -> a + b;

// 여러 줄
(int a, int b) -> {
    int result = a + b;
    return result;
};

// 매개변수 1개면 소괄호 생략
a -> a * 2;
\`\`\`

## 참조형 (::)

\`\`\`java
클래스명::new          // 생성자 참조
클래스명::메소드명      // static 메소드 참조
객체명::메소드명        // 인스턴스 메소드 참조
\`\`\``
      },
      {
        slug: 'java-exception',
        title: '예외 처리',
        date: '2025-01-29',
        content: `## 오류의 종류

1. **컴파일 오류**: 빨간줄, 문법 오류
2. **빌드 오류**: 실행하자마자 오류
3. **런타임 오류**: 실행 중 갑자기 오류 (사용자 입력·외부 요인)

## try-catch-finally

\`\`\`java
try {
    오류가 발생할 수 있는 문장;
} catch (예외타입 e) {
    오류 발생 시 실행할 문장;
} finally {
    // 오류 여부와 무관하게 무조건 실행
}
\`\`\`

## throw / throws

\`\`\`java
// 예외 직접 발생
throw new BadWordException();

// 예외 처리를 호출자에게 위임
void method() throws MyException { ... }
\`\`\`

## 사용자 정의 예외

\`\`\`java
// 처리 강제
class MyException extends Exception { ... }

// 처리 선택
class MyException extends RuntimeException { ... }
\`\`\``
      },
      {
        slug: 'java-api',
        title: 'API',
        date: '2025-01-30',
        content: `## API(Application Programming Interface)

개발에 필요한 라이브러리들의 집합.

- **내부 API**: JDK 설치 시 제공 (\`java.lang\`, \`java.util\` 등)
- **외부 API**: 사설 업체 개발 패키지. JAR 파일로 배포

## JAR 파일 추가 (Eclipse)

1. 프로젝트 우클릭 → Build Path → Configure Build Path
2. Libraries 탭 → ClassPath → Add External JARs
3. .jar 파일 추가 → Apply and Close`
      },
      {
        slug: 'java-object',
        title: 'Object 클래스',
        date: '2025-01-31',
        content: `## Object 클래스

최상위 부모 클래스. 모든 클래스는 자동으로 \`Object\`를 상속받는다.

## 주요 메소드

### toString()
객체명 출력 시 자동 호출. 기본은 주소 반환 → 실무에서 **재정의**해서 필드 정보 출력.

\`\`\`java
@Override
public String toString() {
    return "name=" + name + ", age=" + age;
}
\`\`\`

### equals()
주소값 비교 (\`==\`와 동일). String은 **값 비교**로 재정의 → 문자열 비교는 반드시 \`equals()\` 사용.

### hashCode()
JVM에서 관리하는 고유 값. 해시 기반 컬렉션 사용 시 \`equals()\`와 함께 **반드시 재정의** 필요.`
      },
      {
        slug: 'java-collection',
        title: '컬렉션 프레임워크',
        date: '2025-02-03',
        content: `## List (순서 있음, 중복 허용)

| 구현체 | 특징 |
|--------|------|
| ArrayList | 인덱스 기반. 실무에서 가장 많이 사용 |
| LinkedList | FILO. 삽입은 빠르지만 특정 위치 조회 느림 |
| Vector | 보안성 강화, 처리량 감소 |

\`\`\`java
ArrayList<String> list = new ArrayList<>();
list.add("apple");
list.get(0);   // "apple"
list.size();
\`\`\`

> 배열: 길이 제한 있을 때 / ArrayList: 개수를 모를 때

---

## Set — HashSet (순서 없음, 중복 불가)

\`\`\`java
HashSet<String> set = new HashSet<>();
set.add("a");
set.contains("a");  // true

// Iterator로 순회
Iterator<String> it = set.iterator();
while (it.hasNext()) { String val = it.next(); }
\`\`\`

---

## Map — HashMap (Key-Value 쌍)

\`\`\`java
HashMap<String, Integer> map = new HashMap<>();
map.put("apple", 1000);
map.get("apple");          // 1000
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

| | 싱글 쓰레드 | 멀티 쓰레드 |
|-|-------------|-------------|
| 처리 | 직렬 (한 번에 하나) | 분할하여 동시처럼 처리 |
| 안정성 | 높음 | 오류 시 전체 영향 |
| 효율 | 낮음 | 높음 |

## 멀티 쓰레드 구현

\`\`\`java
// Runnable 구현 (권장 — extends는 1번만 가능)
Thread t = new Thread(() -> {
    // 실행할 코드
});
t.start();
\`\`\`

## 동기화(Synchronized)

\`\`\`java
// 동기화 블록
synchronized(mutex) { /* 공유 자원 처리 */ }

// 동기화 메소드
public synchronized void method() { ... }
\`\`\``
      },
      {
        slug: 'java-string',
        title: 'String · StringBuilder · StringBuffer',
        date: '2025-02-05',
        content: `## String (불변)

\`+\` 연산으로 반복 연결 시 매번 새 객체 생성 → **메모리 비용 증가**.

## StringBuilder (단일 쓰레드 권장)

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("hello").append(" world");
String result = sb.toString();
\`\`\`

## StringBuffer (멀티 쓰레드)

내부에 동기화 코드 포함. 단일 쓰레드에서는 오히려 속도 저하.

| | String | StringBuilder | StringBuffer |
|--|--------|---------------|--------------|
| 수정 가능 | ✕ | ✓ | ✓ |
| 동기화 | - | ✕ | ✓ |
| 권장 환경 | 변경 없는 경우 | 단일 쓰레드 | 멀티 쓰레드 |`
      },
      {
        slug: 'java-file',
        title: '파일 입출력',
        date: '2025-02-06',
        content: `## 개요

Stream 연결통로를 통해 byte 단위로 입출력.
Buffer 사용 시 일괄처리 가능 → 성능 향상.

## Writer (출력)

\`\`\`java
BufferedWriter bw = new BufferedWriter(new FileWriter("경로"));
bw.write("내용");
bw.newLine();
bw.close();
\`\`\`

- **FileWriter**: 경로의 파일을 출력으로 열기 (없으면 새로 생성)

## Reader (입력)

\`\`\`java
BufferedReader br = new BufferedReader(new FileReader("경로"));
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
br.close();
\`\`\`

- **FileReader**: 경로의 파일을 입력으로 열기 (없으면 FileNotFoundException)`
      },
      {
        slug: 'java-jdbc',
        title: 'JDBC와 MVC 패턴',
        date: '2025-02-07',
        content: `## JDBC(Java Database Connectivity)

Java와 RDB 간의 연결을 위한 기술.

## MVC 패턴

### M (Model)
- **VO**: 테이블을 보고 그대로 만든 객체, 단일 테이블 조회
- **DTO**: 화면에 결과를 묶어 전달할 객체, 여러 테이블 조회

### V (View)
사용자에게 보여질 화면 구성.

### C (Controller)
비지니스 로직 처리. DB 연산 코드는 **DAO**로 분리.
- **DAO**: CRUD 기능(메소드)만 모아놓은 객체.

\`\`\`
사용자 요청
    ↓
Controller (비지니스 로직)
    ↓
DAO (DB 쿼리)
    ↓
DB → VO/DTO → View
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

HTML 코드 안에 Java 코드를 작성할 수 있는 웹 언어.

## 웹 서버 구조

\`\`\`
클라이언트 → 웹 서버(Apache) → 웹 컨테이너(Tomcat) → DB
         ←                  ← 동적 데이터 처리 ←
\`\`\`

- **웹 서버(Apache)**: 정적 vs 동적 판단. 동적이면 웹 컨테이너로 전달
- **WAS(Tomcat)**: 서블릿 메모리 할당, Thread 생성, 요청/응답 객체 전달

## 서블릿(Servlet)

Java 코드 안에 HTML을 작성할 수 있는 Java 프로그램.
Thread에 의해 \`service()\` 호출 → 전송 방식에 따라 \`doGet()\` / \`doPost()\` 호출.

---

## 요청 방식

| | GET | POST |
|-|-----|------|
| 데이터 위치 | URL 쿼리스트링 | Header 첨부 |
| 보안성 | 낮음 | 높음 |
| 속도 | 빠름 | 느림 |
| 데이터 길이 | 제한 있음 | 제한 없음 |

---

## 응답 방식

### forward
- 요청 경로가 그대로 유지됨
- .jsp로 이동 시 확장자 숨길 때 사용

### redirect
- 요청 경로 초기화, 응답 경로가 표시됨
- DB 연산 후 다른 서블릿으로 이동할 때

---

## MVC 패턴 발전

### 순수 JSP
\`\`\`
a.jsp → b.jsp → c.jsp
\`\`\`
규모가 작을 때 적합. 확장될수록 유지보수 저하.

### Model 1
\`\`\`
a.jsp → b.jsp(+DAO) → c.jsp
\`\`\`
Controller와 View가 섞임.

### Model 2 (Front Controller)
\`\`\`
a.jsp → web.xml → FrontController → Controller → DAO → DB
                                  ↓
                                View(.jsp)
\`\`\`
비지니스 로직 완벽 분리. URL 패턴(\`*.me\`)을 FrontController로 라우팅.

---

## DBCP · JNDI · MyBatis

- **DBCP**: Connection 객체를 미리 만들어 두고 재사용 → 연결 비용 절감
- **JNDI**: 외부 객체를 가져오기 위한 Java API
- **MyBatis**: SQL문을 XML 파일에 분리 → 코드 감소, 유지보수 편리`
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
