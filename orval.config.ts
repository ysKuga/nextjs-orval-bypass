import type { Config } from 'orval'; // いったんエラー有で tsconfig.json を修正せず

const config: Config = {
  petstore: {
    input: {
      target: './openapi/petstore/openapi.yaml',
    },
    output: {
      mode: 'split',
      client: 'hono',
      baseUrl: '/api/petstore',
      target: 'src/api/petstore/generated/index.ts',
      override: {
        hono: {
          handlers: 'src/api/petstore/handlers',
        },
      },
      mock: true,
    },
  },
};

export default config;
