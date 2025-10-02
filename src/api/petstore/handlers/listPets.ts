import { createFactory } from 'hono/factory';

import { ListPetsContext } from '../generated/index.context';
import { getListPetsResponseMock } from '../generated/index.msw';
import { zValidator } from '../generated/index.validator';
import { listPetsQueryParams, listPetsResponse } from '../generated/index.zod';

const factory = createFactory();

export const listPetsHandlers = factory.createHandlers(
  zValidator('query', listPetsQueryParams),
  zValidator('response', listPetsResponse),
  async (c: ListPetsContext) => {
    return c.body(
      Array.from({ length: 3 }).map(() => getListPetsResponseMock()),
    );
  },
);
