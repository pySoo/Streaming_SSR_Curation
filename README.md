# Streaming SSR - Weather Curation

🚀 [이전 SSR 방식의 프로젝트](https://github.com/pySoo/WeatherCuration-Frontend)를 **`Next.js 13 버전`** 과 **`Streaming SSR 렌더링`** 방식을 이용하여 개선하였습니다.

- 날씨 상태에 따라 **상품을 추천해주는 큐레이션 서비스**입니다.
- 현재 **시간과 기상 상태**(눈, 비, 구름)에 따라 **`애니메이션`** 이 나타납니다.

<br>

## 🌐 URL

[Streaming SSR - Weather Curation](https://streaming-ssr-weather-curation.vercel.app/)

[이전 SSR 프로젝트 - Weather Curation](https://weather-curation.vercel.app/)

<br>

## 🏠 프로젝트 소개

### Next.js 13 버전 선택 이유

- **서버 컴포넌트 사용**으로 클라이언트의 번들 사이즈가 줄어들어 **`초기 로딩 속도를 개선`** 할 수 있습니다.
- **내장 fetch 기능**을 통해 데이터를 캐싱하고 서버 컴포넌트의 통신은 서버에서 처리하여 **`네트워크 시간을 개선`** 할 수 있습니다.
- **API Routes**의 Serverless Function을 이용하여 공용 API의 **`token 노출 문제를 해결`** 할 수 있습니다.

### Streaming SSR 선택 이유

- renderToString으로 인해 **`동기적으로 렌더링하는 SSR`의 단점**으로 **TTI가 늦춰지는 현상을 개선**할 수 있습니다.
- Streaming SSR의 **`점진적 렌더링`** 으로 **초기 로딩 속도 및 TTI 시간을 단축**할 수 있습니다.

<br>

## 📈 성능 개선

#### React-query Refetch 방지

- 서버에서 query를 **prefetch**하고 해당 query에 대한 cache를 **dehydrate**하여 HTML에 삽입합니다.
- **hydrate** 과정을 거쳐 **캐싱된 데이터를 클라이언트에서 사용**합니다.
- 현재 날씨와 날씨 리스트 API는 **페이지 진입 시 `refetch를 하지 않도록 개선`** 하였습니다.

#### LCP 2.7초 개선 및 Layout Shift 현상 방지

- 이전 프로젝트 대비 **`LCP를 2.7초 개선`** 하였습니다.
- 압축률이 높은 **avif, webp 포맷**을 사용하여 **`이미지 용량이 40% 이상 감소`** 하였습니다.
- 뷰포트에 보이는 이미지들은 **priority** 설정을 하여 가장 먼저 로드할 수 있도록 개선하였습니다.
- next config 설정을 통해 **srcset에 저장되는 이미지 개수를 제한**하여 **이미지 로드 시간을 개선**하였습니다.
- placeholder의 blur 설정과 사이즈 지정을 통해 **`layout shift 현상을 방지`** 하였습니다.

#### 검색 페이지 무한 스크롤 reflow 개선

- **scroll event**는 스크롤마다 이벤트가 발생 하기 때문에 throttle 같은 **최적화 작업이 필요**합니다.
- 또한, 특정 지점 관찰을 위해 getBoundingClientRect 계산을 할 때마다 **reflow가 발생**합니다.
- 따라서 **브라우저 엔진 내부에서 최적화**가 되어 있으며 **`reflow를 발생시키지 않는`** **`IntersectionObserver API`** 를 선택하여 구현하였습니다.

<br>

## 🚗 비동기 처리

### AsyncBoundary를 이용한 선언적 비동기 처리

- Suspense와 ErrorBoundary를 하나의 파일에서 관리합니다.
- AsyncBoundary 내부의 컴포넌트는 **하나의 API만 호출하도록 설계하여** **`Waterfall 문제를 해결`** 합니다.
- 컴포넌트 내부에서는 **`비동기 성공 상태와 비즈니스 로직에만 집중하여 개발`** 할 수 있습니다.
- SuspenseFallback, ErrorFallback을 props로 주입할 수 있도록 설계하여 **컴포넌트마다 다른 Skeleton**을 보여줄 수 있습니다.
- 컴포넌트 에러로 인해 **`전체 앱이 멈추는 현상을 방지`** 할 수 있습니다.

<br>

## 🏛️ 컴포넌트 설계

### 요구사항 변경에 쉽게 대응할 수 있는 IoC 패턴

- ReactElement 타입의 **`right`** props를 통해 상품 카드 우측 상단에 LikeButton, Checkbox 등의 **컴포넌트를 주입**합니다.
- 요구사항이 변경된다면 right에 **`주입할 컴포넌트를 교체하는 구조`로 변화에 쉽게 대응**할 수 있습니다

<br>

### 공통 컴포넌트 설계

공통 컴포넌트들은 재사용성을 높이기 위해 **비즈니스 로직을 포함하지 않으며** **`components/Shared`** 폴더에 모아 관리합니다.

#### 확장성과 일관된 스타일

- **`Text 컴포넌트`** 의 경우 as 속성을 통해 p tag, span tag 등 **`HTML 태그를 선택`** 할 수 있는 확장성을 제공합니다.
- **`Button 컴포넌트`** 와 같이 **일관된 스타일 적용**이 필요한 경우 **`variant`** ('title' | 'subtitle' | 'body') 속성을 활용하여 스타일을 지정합니다.

#### 재사용을 위한 합성 컴포넌트

- 상품 리스트 스켈레톤과 같이 **조립되는 형태로 재사용되는 스켈레톤 컴포넌트**는 합성 컴포넌트로 설계하였습니다.
- **label을 공통으로 사용**하는 Input, Textarea 컴포넌트를 합성 컴포넌트로 설계하여 코드를 재사용합니다.

<br>

## 📦 폴더 구조

```
📦 src
├── 📂 app
|   ├── 📂 api
|   |   ├── 📂 getCurrentWeather
|   |   ├── 📂 getShoppingList
|   |   └── 📂 getWeatherList
|   ├── 📂 like
|   ├── 📂 search
|   ├── layout.tsx
|   └── page.tsx
|── 📂 components
|   ├── 📂 Curation
|   ├── 📂 Shared
|   ├── 📂 Shopping
|   └── 📂 Weather
|── 📂 constants
├── 📂 hooks
├── 📂 store
└── 📂 utils
```

<br>

## 🛠️ Tech Stack

|        Category        |                                                                                                                                                             Technologies                                                                                                                                                             |
| :--------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **프레임워크 및 언어** | <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> |
|   **서버 상태 관리**   |                                                                                                         <img src="https://img.shields.io/badge/React_query-FF4154.svg?style=for-the-badge&logo=react-query&logoColor=white">                                                                                                         |
|   **전역 상태 관리**   |                                                                                                             <img src="https://img.shields.io/badge/Zustand-0C0C0C.svg?style=for-the-badge&logo=zustand&logoColor=white">                                                                                                             |
|      **스타일링**      |                                                                                                          <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?&style=for-the-badge&logo=TailwindCSS&logoColor=white">                                                                                                           |
|     **코드 관리**      |      <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white">       |
|    **배포 플랫폼**     |                                                                                                              <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">                                                                                                              |
