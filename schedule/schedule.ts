export function schedule() {
  Deno.cron("hourly timer", "* * * * *", () => {
    fetch("https://api.pavlok.com/api/v5/stimulus/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("TOKEN")}`,
        accpet: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        stimulus: {
          stimulusType: "vibe",
          stimulusValue: 50,
        },
      }),
    });
  });
}
