export function schedule() {
  Deno.cron("hourly timer", "* * * * *", async () => {
    console.log("hourly timer start.");
    await fetch("https://api.pavlok.com/api/v5/stimulus/send", {
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
    console.log("hourly timer executed.");
  });
  console.log("hourly timer has been scheduled.");
}
