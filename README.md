# 💸 우아한 가계부

> **TEAM. `🧑🏻‍💻 동진 && 👩🏻‍💻 그림`**

<p align="center">
<img src="https://user-images.githubusercontent.com/22045163/127591247-b1285eea-8499-40f8-902a-04daf0ed1739.png" alt="preview" width="18%" />
<p>
    
<h3 align="center">
  <a href="http://13.125.71.167:5000">http://13.125.71.167:5000</a>
</h3>

<p align="center">✨&nbsp; 우아한 소비 습관을 만들어주는 우아한 가계부 프로젝트 ✨</p>

## 사용 기술

- **Common** Yarn / ESLint(airbnb-base) / Prettier
- **Front-End** Webpack / Babel / JavaScript / SCSS
- **Back-End** Node.js / Express / Sequelize ORM
- **ETC** AWS EC2 / Github / Slack

## Chart 패키지 배포

### Donut Chart ([doughnut-chart-js](https://www.npmjs.com/package/doughnut-chart-js))

<img src="https://user-images.githubusercontent.com/22045163/127589185-a683f09f-f61d-48b6-960a-5d9ba81ef264.gif" alt="donut-chart" width="30%" />

### Linear Chart ([linear-chart-js](https://www.npmjs.com/package/linear-chart-js))
    
<img src="https://user-images.githubusercontent.com/22045163/127590785-6e2b9bc6-a76e-4d8c-a708-58f23f24cbf8.gif" alt="linear-chart" width="60%" />

## 프로젝트 구조

### Client

```bash
client
├── config              # 웹팩 설정
├── public              # 정적 파일(index.html/favicon/...)
└── src
    |   index.js        # App entry point
    ├── assets          # 필요한 리소스들
    ├── lib             # 핵심 요소들(Component/Router/Observable...)
    ├── store           # Model
    ├── styles          # 공통 스타일
    ├── utils           # 범용 함수들
    └── views           # View
        ├── components
        ├── pages
        └── index.js
```

### Server

```bash
server/src
│   app.js              # App entry point
├── config              # 환경변수 및 설정
├── loaders             # 시작 프로세스 모듈화 (express, sequelize, logger)
├── models              # 데이터베이스 핸들링 (sequelize)
├── services            # 비즈니스 로직
└── api
    ├── routes          # routes & controllers
    ├── middlewares     # middlewares
    └── index.js
```

### 데이터베이스 스키마

![](https://i.imgur.com/Lg7h8Nb.png)

## 설치 및 실행

### 환경 변수 설정

`client`, `server` 각 디렉토리의 `.env.example` 파일을 참고하여 `.env` 파일을 생성해주세요.

### 실행 방법

#### Frontend - Development mode

```bash
cd client
yarn install
yarn run dev
```

#### Backend - Development mode

```bash
cd server
yarn install
yarn run dev
```

#### Production mode

```bash
cd client
yarn build
cd ../server
yarn start
```

## 라이센스

MIT 2021 © [dongqui](https://github.com/dongqui), [Seogeurim](https://github.com/Seogeurim)
