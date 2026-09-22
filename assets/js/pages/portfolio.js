import { h } from '../vdom.js';
import { router } from '../router.js';

const projects = [
  {
    slug: 'torahware-2023',
    title: '토라웨어 2023',
    type: '기업 웹사이트 퍼블리싱',
    image: '/assets/images/portfolio/work-torahware-front.png',
    summary: '기업 소개부터 채용·기업문화까지, 사이트 전반의 화면을 퍼블리싱했습니다.',
    role: '메인 및 서브 페이지 마크업, 공통 UI 정리, 화면 검수와 수정',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', '반응형 웹'],
    points: [
      '메인 비주얼과 GNB, 섹션형 콘텐츠를 디자인 시안에 맞춰 구현했습니다.',
      '헤더·푸터·탭·목록처럼 반복되는 UI는 공통 구조로 정리해 페이지별 차이를 줄였습니다.',
      '해상도별 여백과 글자 크기를 확인하고, 검수 내용을 반영해 화면 깨짐을 보정했습니다.'
    ],
    management: 'HTML은 페이지의 큰 영역과 반복 컴포넌트 시작 지점에 주석을 두었습니다. CSS는 공통 레이아웃과 페이지별 스타일을 구분하고, 수정 시 연관된 화면을 함께 확인할 수 있도록 선택자 범위를 관리했습니다.'
  },
  {
    slug: 'marketing-plus-platform',
    title: 'MarketingPlusPlatform',
    type: '마케팅 플랫폼 퍼블리싱',
    image: '/assets/images/portfolio/work-marketing-platform.png',
    summary: '마케팅 목적에 따라 상품과 테마 서비스를 탐색하고 신청하는 플랫폼 화면을 퍼블리싱했습니다.',
    role: '메인·상품·테마·모니터링 화면 마크업, 탭과 슬라이드 UI 구현, 화면 검수',
    skills: ['HTML5', 'SCSS', 'JavaScript', 'jQuery', 'Swiper'],
    points: [
      '상품과 테마 콘텐츠를 구분하고, 사용자가 목적에 맞는 서비스를 탐색할 수 있도록 탭 구조를 구현했습니다.',
      '카드형 콘텐츠와 슬라이드 UI의 반복 구조를 공통 스타일로 관리했습니다.',
      '목록·상세·신청·모니터링 화면 사이의 레이아웃과 버튼 규칙을 일관되게 맞췄습니다.'
    ],
    management: 'SCSS는 기본 설정, 레이아웃, 공통 컴포넌트, 페이지별 스타일로 역할을 나눴습니다. HTML은 상품·테마·슬라이드처럼 화면의 기능 단위로 주석을 구분해 수정 위치를 빠르게 찾을 수 있도록 관리했습니다.'
  },
  {
    slug: 'publishing-guide',
    title: '퍼블리싱 작업 가이드',
    type: '협업·검수 가이드',
    image: '/assets/images/portfolio/work-publishing-guide.png',
    summary: '화면 목록과 작업 상태를 한곳에서 확인할 수 있는 퍼블리싱 가이드를 관리했습니다.',
    role: '화면 목록, Depth, 파일 링크, PC·Mobile 작업 및 검수 상태 관리',
    skills: ['HTML5', 'CSS3', 'UI Guide', 'Naming Rule', '작업 현황 관리'],
    points: [
      '기획 화면 순서에 맞춰 Depth와 파일 링크를 연결해 필요한 화면을 바로 확인할 수 있게 했습니다.',
      'PC·Mobile 작업 여부와 수정·검수 상태를 표시해 협업 중 누락되는 화면을 줄였습니다.',
      '공통 UI와 개별 페이지를 구분해 개발자와 퍼블리셔가 같은 기준으로 확인하도록 구성했습니다.'
    ],
    management: '주석은 영역 설명보다 협업자가 파일 구조를 빠르게 찾는 데 필요한 기준으로 작성했습니다. 파일명과 클래스명은 화면 역할이 드러나도록 맞추고, 공통 수정과 개별 수정 이력을 분리해 확인했습니다.'
  }
];

const otherExperience = [
  {
    title: 'Samsung Research 운영 퍼블리싱',
    description: '장기 운영 과정에서 메인 비주얼과 콘텐츠를 수정하고, 날짜별 검수·전달본을 관리했습니다.',
    tags: ['운영', '콘텐츠 수정', '검수 대응']
  },
  {
    title: 'NH농협은행 CUNI',
    description: '클라우드 서비스의 사용자·관리자 화면과 화이트·블랙 테마 퍼블리싱에 참여했습니다.',
    tags: ['다페이지 UI', '테마 대응', '관리자 UI']
  },
  {
    title: '화동양행 옥션 리뉴얼',
    description: '옥션 서비스와 관리자 화면의 목록·상세·검색·팝업 UI를 작업했습니다.',
    tags: ['목록·상세', '검색 폼', '팝업']
  },
  {
    title: '골든듀 공식 웹사이트',
    description: '브랜드 웹사이트 리뉴얼 퍼블리싱에 참여하고, 운영 과정에서 발생하는 화면 수정과 유지보수 작업을 진행했습니다.',
    tags: ['사이트 리뉴얼', '운영', '유지보수']
  },
  {
    title: '홈플러스 웹사이트 운영',
    description: '공식 홈페이지, 문화센터, 익스프레스, 통웹진 등 4개 서비스의 유지보수를 담당하고, PC·Mobile 화면의 폰트 변경과 UI 보정 작업을 진행했습니다.',
    tags: ['4개 서비스 운영', 'PC·Mobile', '유지보수']
  },
  {
    title: '이북5도위원회 웹사이트',
    description: 'Internet Explorer를 포함한 브라우저 호환성을 맞추고, 기존 사이트 유지보수와 추가 화면 퍼블리싱을 진행했습니다.',
    tags: ['IE 대응', '크로스브라우징', '유지보수']
  },
  {
    title: 'ISOM 한국본부 웹사이트',
    description: '소개·교수진·커리큘럼·FAQ·교육상담 등 전체 사이트의 다단계 콘텐츠 화면을 퍼블리싱했습니다.',
    tags: ['사이트 구축', '탭 UI', '콘텐츠 페이지']
  }
];

const guideMarkupExample = `<span class="code-comment">&lt;!-- 페이지 전체 영역 --&gt;</span>
<span class="code-tag">&lt;div</span> <span class="code-attr">class</span>=<span class="code-string">&quot;site-shell&quot;</span><span class="code-tag">&gt;</span>
  <span class="code-comment">&lt;!-- 공통 헤더 및 주 메뉴 --&gt;</span>
  <span class="code-tag">&lt;header</span> <span class="code-attr">class</span>=<span class="code-string">&quot;site-header&quot;</span><span class="code-tag">&gt;</span>...<span class="code-tag">&lt;/header&gt;</span>

  <span class="code-comment">&lt;!-- 본문 레이아웃 --&gt;</span>
  <span class="code-tag">&lt;main</span> <span class="code-attr">class</span>=<span class="code-string">&quot;page-layout&quot;</span><span class="code-tag">&gt;</span>
    <span class="code-comment">&lt;!-- 현재 메뉴의 하위 탐색 영역 --&gt;</span>
    <span class="code-tag">&lt;aside</span> <span class="code-attr">class</span>=<span class="code-string">&quot;side-navigation&quot;</span><span class="code-tag">&gt;</span>...<span class="code-tag">&lt;/aside&gt;</span>

    <span class="code-comment">&lt;!-- 페이지별 콘텐츠 영역 --&gt;</span>
    <span class="code-tag">&lt;section</span> <span class="code-attr">class</span>=<span class="code-string">&quot;page-content&quot;</span><span class="code-tag">&gt;</span>
      <span class="code-tag">&lt;header</span> <span class="code-attr">class</span>=<span class="code-string">&quot;content-header&quot;</span><span class="code-tag">&gt;</span>...<span class="code-tag">&lt;/header&gt;</span>
      <span class="code-tag">&lt;div</span> <span class="code-attr">class</span>=<span class="code-string">&quot;content-body&quot;</span><span class="code-tag">&gt;</span>...<span class="code-tag">&lt;/div&gt;</span>
    <span class="code-tag">&lt;/section&gt;</span>
  <span class="code-tag">&lt;/main&gt;</span>

  <span class="code-comment">&lt;!-- 공통 푸터 --&gt;</span>
  <span class="code-tag">&lt;footer</span> <span class="code-attr">class</span>=<span class="code-string">&quot;site-footer&quot;</span><span class="code-tag">&gt;</span>...<span class="code-tag">&lt;/footer&gt;</span>
<span class="code-tag">&lt;/div&gt;</span>`;

const guideScssExample = `<span class="code-comment">// styles/
// ├─ base/       reset, font, variables
// ├─ layout/     header, navigation, content
// ├─ components/ button, table, form, modal
// └─ pages/      화면별 예외 스타일</span>

<span class="code-variable">$color-primary</span>: <span class="code-value">#2f9fd3</span>;

<span class="code-comment">// 한 줄 또는 여러 줄 말줄임을 같은 규칙으로 처리
// $lines 값으로 화면에 표시할 세로 줄 수를 지정</span>
<span class="code-keyword">@mixin</span> line-clamp(<span class="code-variable">$lines</span>: <span class="code-number">1</span>) {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: <span class="code-variable">$lines</span>;
}

<span class="code-comment">// 카드 제목은 최대 두 줄까지만 표시</span>
.card-title {
  <span class="code-keyword">@include</span> line-clamp(<span class="code-number">2</span>);
}`;

function CodeExample(language, title, source) {
  return h('div', { class: 'work-code' },
    h('div', { class: 'work-code-head' },
      h('span', {}, title),
      h('small', {}, language)
    ),
    h('pre', { class: `language-${language}` }, h('code', { html: source }))
  );
}

function GuideEvidence() {
  return [
    h('section', { class: 'work-detail-section' },
      h('h2', {}, '실무 가이드 화면'),
      h('p', { class: 'work-detail-note' }, '당시 사용한 가이드 중 작업 구조를 설명하는 화면만 선별했습니다. 원본 소스와 내부 링크는 공개하지 않습니다.'),
      h('div', { class: 'work-guide-gallery' },
        h('figure', {},
          h('img', { src: '/assets/images/portfolio/work-guide-index.png', alt: '퍼블리싱 가이드 시작 화면' }),
          h('figcaption', {}, '작업현황·라이브러리·가이드를 한곳에서 찾도록 구성한 시작 화면')
        ),
        h('figure', {},
          h('img', { src: '/assets/images/portfolio/work-publishing-guide.png', alt: '퍼블리싱 작업현황표 화면' }),
          h('figcaption', {}, 'Depth, PC·Mobile 대응, 검수 상태와 파일 링크를 관리한 작업현황표')
        )
      )
    ),
    h('section', { class: 'work-detail-section' },
      h('h2', {}, '주석 및 SCSS 관리 예시'),
      h('p', { class: 'work-detail-note' }, '실무에서 사용한 원칙을 바탕으로 포트폴리오용 예제를 새로 작성했습니다.'),
      CodeExample('html', '공통 레이아웃과 영역별 주석', guideMarkupExample),
      CodeExample('scss', 'SCSS 구조와 여러 줄 말줄임 처리', guideScssExample)
    )
  ];
}

function ProjectCard(project) {
  return h('article', {
    class: 'work-card',
    tabindex: '0',
    role: 'link',
    '@click': () => router.push(`/portfolio/${project.slug}`),
    '@keydown': e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        router.push(`/portfolio/${project.slug}`);
      }
    }
  },
    h('div', { class: 'work-card-image' },
      h('img', { src: project.image, alt: `${project.title} 화면` })
    ),
    h('div', { class: 'work-card-body' },
      h('p', { class: 'work-card-type' }, project.type),
      h('h2', {}, project.title),
      h('p', {}, project.summary),
      h('span', { class: 'work-card-link' }, '자세히 보기 ', h('i', { class: 'fas fa-arrow-right' }))
    )
  );
}

export function PortfolioList() {
  return h('div', { class: 'spa-page portfolio-page' },
    h('header', { class: 'spa-page-header' },
      h('h1', { class: 'spa-page-title' }, 'Portfolio'),
      h('p', { class: 'spa-page-subtitle' }, '실무에서 제가 맡았던 퍼블리싱 작업을 간단히 정리했습니다.')
    ),
    h('div', { class: 'work-grid' }, ...projects.map(ProjectCard)),
    h('section', { class: 'work-etc' },
      h('header', { class: 'work-etc-header' },
        h('p', {}, 'Other experience'),
        h('h2', {}, '그 밖의 실무 작업')
      ),
      h('div', { class: 'work-etc-list' },
        ...otherExperience.map(item => h('article', { class: 'work-etc-item' },
          h('div', {},
            h('h3', {}, item.title),
            h('p', {}, item.description)
          ),
          h('div', { class: 'spa-chips' }, ...item.tags.map(tag => h('span', { class: 'spa-chip' }, tag)))
        ))
      )
    )
  );
}

export function PortfolioDetail(slug) {
  const project = projects.find(item => item.slug === slug);
  const back = () => router.push('/portfolio');

  if (!project) return h('div', { class: 'spa-page' },
    h('button', { class: 'spa-back-btn', '@click': back }, '← 포트폴리오'),
    h('div', { class: 'spa-empty-state' }, h('p', {}, '프로젝트를 찾을 수 없습니다.'))
  );

  return h('div', { class: 'spa-page portfolio-detail' },
    h('button', { class: 'spa-back-btn', '@click': back }, '← 포트폴리오'),
    h('header', { class: 'work-detail-header' },
      h('p', { class: 'work-card-type' }, project.type),
      h('h1', {}, project.title),
      h('p', {}, project.summary)
    ),
    h('figure', { class: 'work-detail-image' },
      h('img', { src: project.image, alt: `${project.title} 화면` })
    ),
    h('section', { class: 'work-detail-section' },
      h('h2', {}, '담당 범위'),
      h('p', {}, project.role)
    ),
    h('section', { class: 'work-detail-section' },
      h('h2', {}, '사용 기술'),
      h('div', { class: 'spa-chips' }, ...project.skills.map(skill => h('span', { class: 'spa-chip' }, skill)))
    ),
    h('section', { class: 'work-detail-section' },
      h('h2', {}, '작업 내용'),
      h('ul', {}, ...project.points.map(point => h('li', {}, point)))
    ),
    h('section', { class: 'work-detail-section' },
      h('h2', {}, '주석과 파일 관리'),
      h('p', {}, project.management)
    ),
    ...(project.slug === 'publishing-guide' ? GuideEvidence() : [])
  );
}
