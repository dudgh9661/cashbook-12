# πΈ μ°μν κ°κ³λΆ

> **TEAM. `π§π»βπ» λμ§ && π©π»βπ» κ·Έλ¦Ό`**

<p align="center">
<img src="./README_image/user-big.png" alt="preview" />
<p>
    
<h3 align="center">
  <a href="http://13.125.71.167:5000">http://13.125.71.167:5000</a>
</h3>

<p align="center">β¨&nbsp; μ°μν μλΉ μ΅κ΄μ λ§λ€μ΄μ£Όλ μ°μν κ°κ³λΆ νλ‘μ νΈ β¨</p>

## μ¬μ© κΈ°μ 

- **Common** Yarn / ESLint(airbnb-base) / Prettier
- **Front-End** Webpack / Babel / JavaScript / SCSS
- **Back-End** Node.js / Express / Sequelize ORM
- **ETC** AWS EC2 / Github / Slack

### Chart ν¨ν€μ§ λ°°ν¬

- Donut Chart ([donut-chart-js](https://www.npmjs.com/package/donut-chart-js))
- Linear Chart ([linear-chart-js](https://www.npmjs.com/package/linear-chart-js))

## νλ‘μ νΈ κ΅¬μ‘°

### Client

```bash
client
βββ config              # μΉν© μ€μ 
βββ public              # μ μ  νμΌ(index.html/favicon/...)
βββ src
    |   index.js        # App entry point
    βββ assets          # νμν λ¦¬μμ€λ€
    βββ lib             # ν΅μ¬ μμλ€(Component/Router/Observable...)
    βββ store           # Model
    βββ styles          # κ³΅ν΅ μ€νμΌ
    βββ utils           # λ²μ© ν¨μλ€
    βββ views           # View
        βββ components
        βββ pages
        βββ index.js
```

### Server

```bash
server/src
β   app.js              # App entry point
βββ config              # νκ²½λ³μ λ° μ€μ 
βββ loaders             # μμ νλ‘μΈμ€ λͺ¨λν (express, sequelize, logger)
βββ models              # λ°μ΄ν°λ² μ΄μ€ νΈλ€λ§ (sequelize)
βββ services            # λΉμ¦λμ€ λ‘μ§
βββ api
    βββ routes          # routes & controllers
    βββ middlewares     # middlewares
    βββ index.js
```

### λ°μ΄ν°λ² μ΄μ€ μ€ν€λ§

![erd](./README_image/database-erd.png)

## μ€μΉ λ° μ€ν

### νκ²½ λ³μ μ€μ 

`client`, `server` κ° λλ ν λ¦¬μ `.env.example` νμΌμ μ°Έκ³ νμ¬ `.env` νμΌμ μμ±ν΄μ£ΌμΈμ.

### μ€ν λ°©λ²

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

## μ€ν κ²°κ³Ό

<img src="./README_image/login-big.png" alt="login" width="76%" /> <img src="./README_image/login-small.png" alt="login" width="23%" />

<img src="./README_image/user-big.png" alt="user" width="76%" /> <img src="./README_image/user-small.png" alt="user" width="23%" />

<img src="./README_image/main-big.png" alt="main" width="62%" /> <img src="./README_image/main-small.png" alt="main" width="18%" /> <img src="./README_image/main-small2.png" alt="main" width="18%" />

<img src="./README_image/calendar-big.png" alt="calendar" width="76%" /> <img src="./README_image/calendar-small.png" alt="calendar" width="23%" />

<img src="./README_image/chart-big.png" alt="chart" width="76%" /> <img src="./README_image/chart-small.png" alt="chart" width="23%" />
<img src="./README_image/chart-big2.png" alt="chart" width="76%" /> <img src="./README_image/chart-small2.png" alt="chart" width="23%" />

## λΌμ΄μΌμ€

MIT 2021 Β© [dongqui](https://github.com/dongqui), [Seogeurim](https://github.com/Seogeurim)
