import path from "path";

(async function () {
  const $ = path.resolve(
    __dirname,
    `../../../_emulator/extensions/webflow-events.env.local`
  );

  require("dotenv").config({
    path: path.resolve(
      __dirname,
      `../../../_emulator/extensions/webflow-events.env.local`
    ),
  });
})();