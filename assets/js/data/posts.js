/**
 * Blog posts data
 * Add new posts by pushing to this array.
 * Markdown is supported in the `content` field.
 */
export const posts = [
  {
    slug: 'bideo-project-retrospective',
    title: 'BIDEO 팀 프로젝트 회귀록',
    category: '회귀록',
    tags: ['Spring Boot', 'Java', 'MySQL', '팀 프로젝트'],
    date: '2025-05-15',
    excerpt: 'Java/Spring Boot 국비과정의 두 번째 팀 프로젝트 BIDEO를 마무리하며, 배운 점과 아쉬운 점을 솔직하게 기록합니다.',
    content: `## 프로젝트 개요

BIDEO는 YouTube와 유사한 동영상 스트리밍 서비스입니다.
Java/Spring Boot 국비과정의 두 번째 팀 프로젝트로 진행했습니다.

## 내가 맡은 부분

- 작품 등록 / 상세 페이지 퍼블리싱
- 워크디테일 SPA 화면 설계 및 구현
- Spring WebSocket 기반 실시간 경매 화면

## 배운 점

Spring MVC의 흐름이 머릿속에 제대로 잡혔습니다.

이전 GG# 프로젝트에서는 Controller → Service → Mapper 흐름을 그냥 따라가는 수준이었다면,
이번엔 *왜* 이렇게 나뉘는지 맥락이 보이기 시작했습니다.

특히 \`@Transactional\` 경계와 Mapper XML 결과 매핑이
처음에는 마법처럼 보였는데, 직접 설계하면서 자연스럽게 이해됐습니다.

## 아쉬운 점

시간이 부족해 구현하지 못한 기능들이 있었습니다.
특히 AI 추천 기능(LightFM)은 Python 쪽은 완성했지만 Spring 연동을 마무리하지 못했습니다.

## 다음에는

- 설계 단계에서 API 명세를 먼저 잡기
- Git 브랜치 전략 더 철저히 (feat → dev → main)
- 코드 리뷰 문화 만들기`
  },
  {
    slug: 'gg-first-project',
    title: 'GG# 첫 팀 프로젝트 회귀록',
    category: '회귀록',
    tags: ['Spring Boot', 'Java', 'MySQL', '차량 커뮤니티'],
    date: '2025-03-20',
    excerpt: '첫 팀 프로젝트 GG#을 마치며. 협업의 어려움과 성장의 순간들을 돌아봅니다.',
    content: `## 프로젝트 개요

GG#은 차량 관리 커뮤니티 플랫폼입니다.
국비과정의 첫 번째 팀 프로젝트였습니다.

## 첫 팀 프로젝트라는 것

첫 팀 프로젝트라 모든 게 낯설었습니다.

Git 충돌은 예상했지만 이렇게 자주 날 줄은 몰랐고,
코드 스타일 차이로 머지하면 어디서부터 어디까지가 내 코드인지 헷갈렸습니다.

## 가장 힘들었던 순간

브랜치 전략 없이 모두 \`main\`에 직접 push하다가
배포 직전 서로의 코드가 충돌하면서 하루를 날린 적이 있었습니다.

지금 생각하면 그게 가장 값진 경험이었습니다.

## 의사소통의 중요성

기술보다 더 어려운 게 소통이었습니다.
"이거 됐어?" 한 마디가 해결할 문제를 각자 2~3시간 붙잡고 있었던 날도 있었습니다.

## 얻은 것

Spring MVC 기초, MyBatis 매핑, 팀 작업 흐름.
그리고 다음 프로젝트엔 어떻게 해야 할지에 대한 명확한 그림.`
  }
];
