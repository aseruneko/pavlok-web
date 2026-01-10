import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head lang="ja">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>pavlok-web</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
