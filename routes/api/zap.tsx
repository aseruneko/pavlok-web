import { define } from "../../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    let level = undefined;
    try {
      const request = (await ctx.req.json()) as { value: number };
      level = request.value;
    } catch {
      /* do nothing */
    }
    const response = await fetch(
      "https://api.pavlok.com/api/v5/stimulus/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Deno.env.get("TOKEN")}`,
          accpet: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          stimulus: {
            stimulusType: "zap",
            stimulusValue: level ?? 50,
          },
        }),
      }
    );
    return response.status === 200 ? Response.json({}) : Response.error();
  },
});
