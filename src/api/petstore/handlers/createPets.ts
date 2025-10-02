import { createFactory } from 'hono/factory';

import { CreatePetsContext } from '../generated/index.context';

const factory = createFactory();

export const createPetsHandlers = factory.createHandlers(
  async (c: CreatePetsContext) => {},
);
