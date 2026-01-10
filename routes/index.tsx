import { Head } from "fresh/runtime";
import Pavlok from "../islands/Pavlok.tsx";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>aserunekoのpavlok</title>
      </Head>
      <Pavlok></Pavlok>
    </div>
  );
});
