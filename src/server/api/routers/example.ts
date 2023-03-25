import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/src/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return {
        message: `Hello ${input.name}!`,
      };
    }),
});
