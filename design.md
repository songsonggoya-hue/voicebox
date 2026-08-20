---
name: 별마실공예단
colors:
  surface: "#DCC9A3"
  surface-dim: "#CBB68A"
  surface-bright: "#E8DAB9"
  surface-container-lowest: "#F3EAD4"
  surface-container-low: "#EDE0C2"
  surface-container: "#E4D4AE"
  surface-container-high: "#D8C59B"
  surface-container-highest: "#CCB88C"
  on-surface: "#2E2417"
  on-surface-variant: "#5C4A34"
  inverse-surface: "#2E2417"
  inverse-on-surface: "#F3EAD4"
  outline: "#8A7355"
  outline-variant: "#C4AE84"
  surface-tint: "#3F5372"
  primary: "#3F5372"
  on-primary: "#FFFFFF"
  primary-container: "#C3D0E3"
  on-primary-container: "#16202E"
  inverse-primary: "#A8C0DE"
  secondary: "#A1503A"
  on-secondary: "#FFFFFF"
  secondary-container: "#E8C4B4"
  on-secondary-container: "#4A2013"
  tertiary: "#8C7A3D"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#E4D9A8"
  on-tertiary-container: "#3A3012"
  error: "#B3261E"
  on-error: "#FFFFFF"
  error-container: "#F9DEDC"
  on-error-container: "#410E0B"
  primary-fixed: "#C3D0E3"
  primary-fixed-dim: "#A8C0DE"
  on-primary-fixed: "#16202E"
  on-primary-fixed-variant: "#2C405C"
  secondary-fixed: "#E8C4B4"
  secondary-fixed-dim: "#D9A78F"
  on-secondary-fixed: "#3A160A"
  on-secondary-fixed-variant: "#6B3120"
  tertiary-fixed: "#E4D9A8"
  tertiary-fixed-dim: "#C9B876"
  on-tertiary-fixed: "#2E2610"
  on-tertiary-fixed-variant: "#5C4E22"
  background: "#DCC9A3"
  on-background: "#2E2417"
  surface-variant: "#D8C59B"
typography:
  headline-lg:
    fontFamily: Gowun Batang
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Gowun Batang
    fontSize: 22px
    fontWeight: "700"
    lineHeight: 30px
  title-md:
    fontFamily: Gowun Batang
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 26px
  title-sm:
    fontFamily: Gowun Batang
    fontSize: 16px
    fontWeight: "700"
    lineHeight: 24px
  body-lg:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  body-md:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 20px
  label-meta:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    letterSpacing: 0.01em
  label-button:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Pretendard
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 2px
  DEFAULT: 6px
  md: 10px
  lg: 14px
  full: 9999px
spacing:
  base: 8px
  2xs: 2px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin: 24px
shadow:
  sm: "0 1px 2px rgba(46, 36, 23, 0.12)"
  md: "0 4px 12px rgba(46, 36, 23, 0.16)"
  lg: "0 8px 24px rgba(46, 36, 23, 0.20)"
border:
  hairline: "1px solid {colors.outline-variant}"
  default: "1px solid {colors.outline}"
  emphasis: "2px solid {colors.primary}"
components:
  page-header:
    backgroundColor: "{colors.surface-container-lowest}"
    borderBottom: "{border.hairline}"
    padding: "14px 24px"
    iconSize: "32px"
    iconRounded: "8px"
    orgNameTypography: "{typography.title-sm}"
  hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-container-lowest}"
    padding: "40px 24px"
    eyebrowTypography: "13px / 700 / letter-spacing .04em"
    eyebrowColor: "{colors.primary-container}"
    titleFontFamily: Gowun Batang
    titleFontSize: "30px (모바일 24px)"
    titleFontWeight: "700"
    titleLineHeight: "1.3"
    titleMaxWidth: "640px"
    bodyFontSize: "14px"
    bodyColor: "{colors.primary-container}"
    bodyMaxWidth: "560px"
  hero-cta:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.primary}"
    fontSize: "15px"
    fontWeight: "700"
    rounded: "{rounded.DEFAULT}"
    padding: "13px 26px"
  page-footer:
    padding: "28px 24px 40px"
    borderTop: "{border.hairline}"
    marginTop: "{spacing.sm}"
    textAlign: center
    orgTypography: "{typography.title-sm}"
    bodyTypography: "{typography.label-meta}"
    textColor: "{colors.on-surface-variant}"
  post-card:
    backgroundColor: "{colors.surface-container-lowest}"
    border: "{border.hairline}"
    rounded: "{rounded.md}"
    shadow: "{shadow.sm}"
    photoAspectRatio: "4 / 3"
    photoEmptyBackground: "{colors.surface-container-high}"
    padding: "{spacing.md}"
    titleTypography: "{typography.title-sm}"
    excerptTypography: "{typography.body-sm}"
    excerptLineClamp: 2
    metaTypography: "{typography.label-sm}"
    badgeRowGap: "{spacing.xs}"
    gridColumnsDesktop: 4
    gridColumnsTablet: 2
    gridColumnsMobile: 1
    gridGap: "{spacing.sm}"
  post-card-hover:
    border: "{border.default}"
    shadow: "{shadow.md}"
  badge-status:
    typography: "{typography.label-sm}"
    padding: "{spacing.2xs} {spacing.sm}"
    rounded: "{rounded.full}"
  badge-status-접수:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  badge-status-처리중:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
  badge-status-완료:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  chip-field:
    typography: "{typography.label-sm}"
    padding: "{spacing.xs} {spacing.sm}"
    rounded: "{rounded.full}"
    backgroundColor: transparent
    textColor: "{colors.on-surface-variant}"
    border: "{border.hairline}"
  chip-field-selected:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    border: "1px solid {colors.tertiary}"
  chip-field-removable:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    border: "1px solid {colors.tertiary}"
    trailingIconSize: "12px"
  tab-item:
    typography: "{typography.label-button}"
    textColor: "{colors.on-surface-variant}"
    padding: "{spacing.sm} {spacing.md}"
    trackBorderBottom: "{border.hairline}"
  tab-item-active:
    textColor: "{colors.primary}"
    borderBottom: "{border.emphasis}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.on-primary-fixed-variant}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
    border: "{border.default}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-container-high}"
    border: "{border.emphasis}"
  button-google:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    border: "{border.hairline}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
    iconSize: "18px"
    iconGap: "{spacing.xs}"
  segmented-option:
    typography: "{typography.label-button}"
    padding: "{spacing.sm} 0"
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface-variant}"
    divider: "1px solid {colors.outline-variant}"
    trackBorder: "{border.hairline}"
    trackRounded: "{rounded.DEFAULT}"
  segmented-option-접수:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  segmented-option-처리중:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
  segmented-option-완료:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  input-text:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
    border: "{border.hairline}"
  input-text-focus:
    border: "{border.emphasis}"
  input-textarea:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
    border: "{border.hairline}"
    minHeight: "160px"
    resize: vertical
  input-select:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.lg} {spacing.sm} {spacing.md}"
    border: "{border.hairline}"
  photo-upload-tile:
    aspectRatio: "1 / 1"
    backgroundColor: "{colors.surface-container-low}"
    border: "1px dashed {colors.outline}"
    rounded: "{rounded.md}"
    labelTypography: "{typography.label-button}"
  photo-upload-tile-remove:
    size: "22px"
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.full}"
    border: "{border.hairline}"
---

## Brand & Style

별마실공예단은 "손끝으로 만나는, 우리 동네의 소소한 하루"를 표방하는 동네 공예 모임입니다. 이 단체가 운영하는 서비스 **우리 동네 목소리함**은 "동네의 작은 불편, 그냥 지나치지 마세요."를 한 줄 설명으로 삼습니다. 디자인은 화려한 트렌드를 좇지 않고, **크라프트 페이퍼(갈색 재생지) 질감의 빈티지 수공예 감성**을 그대로 옮겨온 느낌을 목표로 합니다.

선택한 스타일은 **아날로그 크라프트(Analog Craft)**입니다. 매끈한 그라데이션이나 반짝이는 하이라이트 대신, 종이·나무·실 같은 손에 잡히는 질감을 색과 그림자로 흉내 냅니다. 화면은 항상 크라프트지 톤 위에서 시작하고, 그 위에 손글씨 같은 세리프 제목과 정갈한 본문이 얹힙니다.

## Colors

팔레트는 CLAUDE.md에 정의된 4색(주색·보조색·배경·글자색)을 뿌리로 하고, 여기서 파생된 컨테이너·아웃라인 톤으로 확장했습니다.

- **주색 Primary (`#3F5372`, 무디 네이비):** 헤더, 히어로 배경, 주요 버튼, 활성 탭, 처리상태 "접수"에 사용합니다.
- **보조색 Secondary (`#A1503A`, 테라코타):** 포인트 텍스트, 처리상태 "완료"에만 사용합니다. 버튼 배경이나 큰 섹션 배경으로는 쓰지 않습니다.
- **3차색 Tertiary (`#8C7A3D`, 황동/머스터드):** 분야 칩(선택됨), 처리상태 "처리중"에 사용합니다.
- **배경 Background (`#DCC9A3`, 크라프트지):** 페이지의 기본 바탕색. 카드는 이보다 밝은 `surface-container-*` 톤을 써서 종이 위에 종이를 겹친 듯한 층을 만듭니다.
- **글자색 On-surface (`#2E2417`, 짙은 먹갈색):** 모든 본문 텍스트의 기본색. 무채색 회색·검정 텍스트는 쓰지 않습니다.
- **테두리 Outline (`#8A7355` 진한 선 / `#C4AE84` 옅은 선):** 카드·인풋의 구분선은 그림자보다 먼저 얇은 테두리로 표현해 "종이 오려낸" 느낌을 줍니다.
- **그림자 색:** 회색·검정 대신 글자색(`#2E2417`)을 베이스로 한 반투명 갈색만 사용합니다 (`shadow.sm/md/lg` 참고).

**처리상태 3색 고정 매핑** — 상태 배지와 관리자 화면의 처리상태 버튼은 항상 이 매핑을 그대로 씁니다. 다른 색으로 바꾸지 않습니다.

| 상태 | 배경 | 글자 |
|---|---|---|
| 접수 | `primary` 계열 | 네이비 |
| 처리중 | `tertiary` 계열 | 황동 |
| 완료 | `secondary` 계열 | 테라코타 |

## Typography

제목은 **Gowun Batang**(고운바탕, 세리프)으로, 손글씨 문패 같은 온기를 줍니다. 본문·메타·버튼은 **Pretendard**(가변 굵기 산세리프)로 가독성을 확보합니다. 두 서체 모두 웹폰트 사용 시 `serif` / `sans-serif`를 폴백으로 지정하세요.

| 단계 | 용도 | 서체 | 크기 / 굵기 |
|---|---|---|---|
| `headline-lg` | 페이지 대제목 | Gowun Batang | 28px / 700 |
| `headline-md` | 섹션 제목 | Gowun Batang | 22px / 700 |
| `title-md` | 일반 제목 (탭 콘텐츠 제목 등) | Gowun Batang | 18px / 600 |
| `title-sm` | 헤더 단체명, 게시글 카드 제목, 푸터 단체명 | Gowun Batang | 16px / 700 |
| `body-lg` | 본문 강조 (인트로 문단) | Pretendard | 16px / 400 |
| `body-md` | 본문 기본, 입력 필드 | Pretendard | 15px / 400 |
| `body-sm` | 게시글 카드 요약문(2줄 말줄임) | Pretendard | 13px / 400 |
| `label-meta` | 푸터 소개문 등 메타 문장 | Pretendard | 13px / 500 |
| `label-button` | 버튼, 탭, 필터, 칩 라벨 | Pretendard | 15px / 600 |
| `label-sm` | 상태 배지, 분야 칩, 카드 작성자·날짜 | Pretendard | 12px / 500 |

- 굵기는 세 단계(400 / 600 / 700)만 씁니다. 500은 메타·라벨 텍스트 전용, 300 이하 굵기는 사용하지 않습니다(가독성 저하).
- 제목은 절대 산세리프로, 본문은 절대 세리프로 바꾸지 않습니다 — 위계가 무너집니다.

## Layout & Spacing

간격은 8px 기준 스케일 8개(`2xs 2 / xs 4 / sm 8 / md 16 / lg 24 / xl 40`, 그리드 전용 `gutter 20 / margin 24`)로 고정합니다. 이 목록 밖의 임의 px(예: 10px, 18px, 30px)는 쓰지 않습니다. 단, 확정된 헤더·히어로·푸터 규격(`components.page-header/hero/page-footer`)은 시안에서 그대로 가져온 고정값이라 이 스케일 밖의 수치(14px, 28px, 13px/26px 등)를 예외적으로 그대로 씁니다 — 이 세 구역에 한해서만 유효한 예외입니다. 상태 배지·분야 칩·드롭다운처럼 새로 정의한 컴포넌트는 예외 없이 이 스케일 값만 조합해서 씁니다(`2xs`는 배지처럼 아주 좁은 세로 여백 전용).

**반응형 그리드**

| 콘텐츠 | PC (`≥1024px`) | 태블릿 (`768–1023px`) | 모바일 (`<768px`) |
|---|---|---|---|
| 일반 카드 콘텐츠 | 3열 | 2열 | 1열 |
| 게시글 카드 목록 | **4열** (고밀도) | 2열 | 1열 |

- 게시글 카드 목록은 확정된 안 1(실용형)의 밀도를 따르기 위한 예외로, 4열을 씁니다. 다른 콘텐츠(공지 등)는 기본 3열 규칙을 따릅니다.
- 모바일에서는 사이드바·보조 컬럼을 본문 아래로 내리며, 별도 컬럼으로 유지하지 않습니다.

## Elevation & Depth (그림자)

그림자는 **3단계(`sm / md / lg`)로만 고정**하고, 색은 항상 글자색 기반 반투명 갈색을 씁니다. 순수 회색/검정 그림자는 쓰지 않습니다.

- `shadow.sm` — 게시글 카드 기본 상태
- `shadow.md` — 게시글 카드 호버 상태
- `shadow.lg` — 모달, 팝오버 등 최상위 레이어(사진 업로드 미리보기 확대 등)

테두리(`border.hairline / default / emphasis`)는 그림자보다 먼저 오는 1차 구분 수단입니다. 카드 기본 상태는 얇은 테두리(`hairline`) + `shadow.sm`을 함께 쓰고, 그림자만으로 구분하지 않습니다.

## Shapes (모서리)

모서리는 **5단계(`2 / 6 / 10 / 14 / 9999px`)로 고정**합니다. 앱스러운 큰 라운드(20px+)는 쓰지 않습니다.

- 인풋, 버튼: `DEFAULT (6px)`
- 게시글 카드, 사진 업로드 타일: `md (10px)`
- 큰 패널, 모달: `lg (14px)`
- 상태 배지, 분야 칩, 사진 삭제 버튼: `full`
- 헤더 아이콘: `8px` (헤더 규격의 고정 예외값)

## Components

오늘 함께 만드는 공통 기능 네 가지 — **글 저장하기 / 사진 올리기 / 로그인·회원가입 / 처리상태·관리자 화면** — 에 필요한 규격입니다. 페이지 골격(헤더·히어로·푸터)은 확정된 시안(안 1·실용형) 그대로입니다.

### 페이지 골격 — 헤더 · 히어로 · 푸터

- **헤더**: `surface-container-lowest` 배경, 아래 `hairline` 테두리, 좌우 24px·상하 14px 패딩. 아이콘 32×32px(모서리 8px) + 단체명(`title-sm`)을 나란히 배치합니다.
- **히어로**: `primary` 배경(진한 네이비) 위에 크림색(`surface-container-lowest`) 텍스트. 상하좌우 40px/24px 패딩. eyebrow(13px/700/자간 .04em, `primary-container` 색) → 제목(Gowun Batang 700 30px, 모바일 24px, 최대너비 640px) → 설명(14px, `primary-container` 색, 최대너비 560px) → CTA 버튼(`hero-cta`: 크림 배경 + 네이비 글자, 13px/26px 패딩) 순서를 유지합니다.
- **푸터**: 상단 `hairline` 테두리, 28px/24px/40px 패딩, 가운데 정렬. 단체명(`title-sm`, 굵게) 한 줄 + 소개 문장(`label-meta`) 한 줄.

### 게시글 카드 (글 저장하기 · 사진 올리기)

글의 제목·내용 앞부분·사진·상태·분야·작성자·작성시간을 한 장에 담는 카드입니다.

- 배경 `surface-container-lowest`, 테두리 `hairline`(호버 시 `default`), 모서리 `md(10px)`, 그림자 `sm`(호버 시 `md`).
- 사진 영역: 카드 상단, 비율 4:3 고정. 사진이 없는 글은 같은 비율의 `surface-container-high` 빈 배경으로 대체합니다(레이아웃이 흔들리지 않도록).
- 본문 패딩 `spacing.md(16px)`. 순서: 상태 배지 + 분야 칩(가로, 간격 `spacing.xs`) → 제목(`title-sm`) → 요약문(`body-sm`, 2줄에서 말줄임) → 작성자 · 작성시간(`label-sm`).
- 그리드: PC 4열 · 태블릿 2열 · 모바일 1열, 간격 `spacing.sm(8px)`.

### 상태 배지

접수 · 처리중 · 완료, **딱 3가지만** 존재합니다. `label-sm` 타이포, 상하 2px·좌우 8px 패딩, 모서리 `full`. 읽기 전용이며 카드·관리자 화면 어디서든 색 매핑(위 표)을 그대로 씁니다. 4번째 상태를 새로 만들지 않습니다.

### 분야 칩

단체마다 개수가 다르고 늘어날 수 있어 두 가지 쓰임으로 나눕니다.

- **목록 상단 필터**: 공간이 좁은 한 줄이므로 드롭다운(`input-select`)을 씁니다. 개수가 아무리 늘어도 레이아웃이 깨지지 않습니다.
- **글쓰기 폼 · 관리자 「분야 관리」탭**: 세로 공간이 있으므로 칩을 `flex-wrap`으로 배치합니다. 기본 칩(`chip-field`, 테두리만)과 선택된 칩(`chip-field-selected`, 황동 컨테이너)을 구분합니다. 관리자 「분야 관리」에서는 칩 오른쪽에 12px × 아이콘을 붙인 `chip-field-removable`로 삭제할 수 있게 합니다.
- 칩 타이포는 `label-sm`, 패딩 4px/8px, 모서리 `full`.

### 탭

마이페이지(`내가 쓴 글` / `내 정보`)와 관리자 화면(`의견 관리` / `분야 관리`)에서 씁니다. **항상 2개 고정**이라 줄바꿈·스크롤을 고려할 필요 없이 균등폭으로 배치합니다.

- 탭 묶음 아래 `hairline` 테두리(트랙). 각 탭 패딩 `spacing.sm spacing.md`, 타이포 `label-button`.
- 비활성 탭: `on-surface-variant` 글자, 테두리 없음.
- 활성 탭: `primary` 글자 + 하단 `emphasis`(2px) 테두리.

### 버튼

- **`button-primary`**: 저장하기 · 등록하기 · 의견 남기기 등 주요 액션. `primary` 배경, `label-button` 타이포, 모서리 `DEFAULT`, 패딩 `sm md`. (히어로의 CTA만 `hero-cta` 규격을 따로 씁니다.)
- **`button-secondary`**: 취소 등 보조 액션. 배경 없이 `default` 테두리 + `primary` 글자.
- **`button-google`**: 구글 인증 전용. 흰 계열(`surface-container-lowest`) 배경 + `hairline` 테두리 + `on-surface` 글자, 18px 구글 아이콘. **브랜드 색으로 다시 칠하지 않습니다** — 구글 로그인 버튼은 항상 이 중립 스타일을 유지합니다.
- **`segmented-option`**: 관리자 화면에서 처리상태를 바꾸는 3버튼 세그먼트 컨트롤. 트랙 전체에 `hairline` 테두리 + 모서리 `DEFAULT`, 버튼 사이 1px 구분선. 비활성은 중립(`surface-container-lowest` 배경), 선택된 버튼은 `badge-status`와 **완전히 같은 컨테이너 색 쌍**(`primary-container`/`tertiary-container`/`secondary-container`)으로 채웁니다. 진한 원색을 그대로 쓰지 않는 이유는 보조색을 버튼 배경에 쓰지 않는 규칙(하지 말 것 7) 때문이며, 그 덕분에 카드의 상태 배지와 색이 정확히 일치합니다.

### 입력 폼 (글쓰기 폼)

글 저장하기에 필요한 필드는 제목 · 내용 · 사진뿐입니다(작성자 · 작성시간은 로그인 정보와 현재 시각으로 자동 채워지므로 입력 필드가 없습니다).

- **제목 (`input-text`)**: 한 줄 텍스트, `surface-container-low` 배경, 모서리 `DEFAULT`, 패딩 `sm`, `hairline` 테두리(포커스 시 `emphasis`).
- **내용 (`input-textarea`)**: `input-text`와 동일한 배경·테두리에 최소 높이 160px, 패딩 `md`, 세로로만 크기 조절. 포커스 테두리(`emphasis`)는 제목·내용·분야 선택 세 입력 요소 모두 동일하게 적용합니다.
- **분야 선택 (`input-select`)**: 글쓰기 폼에서는 값을 비워둘 수 없습니다(플레이스홀더 "분야 선택" — 필터바의 "분야 전체"와 구분).
- **사진 올리기 (`photo-upload-tile`)**: 정사각형, `surface-container-low` 배경에 1px 점선(`outline` 색) 테두리, 모서리 `md`. 가운데 "+" 아이콘과 "사진 추가"(`label-button`) 라벨. 사진을 올리면 같은 타일 크기로 미리보기가 채워지고, 우상단에 22px 원형 삭제 버튼(`photo-upload-tile-remove`)이 뜹니다. 여러 장을 올릴 때는 타일을 가로로 나열하고 마지막에 빈 "+" 타일을 유지합니다.

## 하지 말 것

1. **순수 검정/흰색 배경 금지** — 배경은 항상 `surface` 계열(크라프트 톤)에서 시작한다. `#000000` 풀블랙, `#FFFFFF` 풀화이트 배경은 쓰지 않는다.
2. **회색/검정 그림자 금지** — 그림자는 항상 `#2E2417` 기반 반투명 갈색만 쓴다. `rgba(0,0,0,...)` 금지.
3. **정의된 5단계 밖의 모서리 반경 금지** — `2 / 6 / 10 / 14 / 9999px` 외의 임의 radius(예: 8px, 20px)를 쓰지 않는다. (헤더 아이콘 8px, 히어로/푸터 고정값은 명시된 예외.)
4. **정의된 스케일 밖의 간격 금지** — `2 / 4 / 8 / 16 / 20 / 24 / 40px` 외의 임의 padding·margin을 쓰지 않는다. (헤더·히어로·푸터의 확정 시안 값은 명시된 예외.)
5. **비비드 원색 추가 금지** — 네온·형광·순채도 원색을 포인트 색으로 새로 들이지 않는다. 확장은 항상 주색·보조색·3차색의 톤 안에서만 한다.
6. **제목/본문 서체 교차 금지** — 제목에 Pretendard(산세리프), 본문에 Gowun Batang(세리프)을 쓰지 않는다.
7. **보조색을 큰 배경 면에 금지** — 보조색(`#A1503A`)은 버튼 배경이나 큰 섹션 배경으로 쓰지 않는다. "완료" 배지·칩 등 좁은 면적에만 쓴다.
8. **PC 게시글 그리드를 4열보다 늘리지 않는다** — 카드가 더 좁아지면 사진·텍스트가 뭉개진다.
9. **처리상태 3색 매핑을 임의로 바꾸지 않는다** — 접수=주색, 처리중=3차색, 완료=보조색 조합을 배지·세그먼트 버튼 어디서든 그대로 쓴다. 4번째 상태를 새로 만들지 않는다.
10. **구글 로그인 버튼에 브랜드 색을 입히지 않는다** — 항상 흰 배경 + 아웃라인 스타일을 유지한다.
