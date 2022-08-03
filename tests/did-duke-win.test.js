import { test } from "uvu";
import didDukeWin from "../src/did-duke-win.js";
import * as assert from "uvu/assert";

test("getDukeResult()", async () => {
  const won = await didDukeWin();

  assert.type(won, "string");
  assert.match(won, /YES|NO/);
});

test.run();
