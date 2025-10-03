# Next.js で Orval を使用した API Routes + 外部 API のバイパスの試行

## [#3 API Routes + Orval + Hono](issues/3)

API Routes で Orval により生成された Hono の実装を使用する。

```sh
npx orval --config ./orval.config.ts
```

<details>
<summary>Next.js App Application</summary>

## Next.js App Application

### Get Started

Prerequisites:

- Node 20+
- Yarn 1.22+

To set up the app execute the following commands.

```bash
git clone https://github.com/alan2207/bulletproof-react.git
cd bulletproof-react
cd apps/nextjs-app
cp .env.example .env
yarn install
```

##### `yarn run-mock-server`

Make sure to start the mock server before running the app.
The mock server runs on [http://localhost:8080/api](http://localhost:8080/api).

###### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

</details>

## 参考など

- Next.js
  - <https://github.com/alan2207/bulletproof-react>
- OpenAPI
  - <https://github.com/dgarcia360/openapi-boilerplate.git>
- Orval
  - <https://orval.dev/guides/hono>
- [Next.js Route Handlers + HonoでバックエンドAPIを構築 & OpenAPIドキュメントを生成する](https://blog.mmmcorp.co.jp/2025/05/29/next-js-route-handlers-hono-openapi/)
  - API Routes での Hono の使用について
- [TypeScriptとHonoで作る最小構成のAPIサーバー](https://zenn.dev/yuzunosk55/articles/09275c72cf051b)
  - `/api/petstore` の basePath 指定方法について
  - <https://hono.dev/docs/api/routing#grouping-ordering>
