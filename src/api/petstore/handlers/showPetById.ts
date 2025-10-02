import { createFactory } from 'hono/factory';

import { ShowPetByIdContext } from '../generated/index.context';
import { zValidator } from '../generated/index.validator';
import { showPetByIdParams, showPetByIdResponse } from '../generated/index.zod';

const factory = createFactory();

export const showPetByIdHandlers = factory.createHandlers(
  zValidator('param', showPetByIdParams),
  zValidator('response', showPetByIdResponse),
  async (c: ShowPetByIdContext) => {},
);
