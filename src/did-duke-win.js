import { request } from "undici";
import { load } from "cheerio";

const url = "https://diddukewin.com";

// Returns a string of the form "W/L XX-XX"
// Where XX represents final scores
async function didDukeWin() {
  const response = await request(url);

  const document = await response.body.text();

  const $ = load(document);

  const result = $("#middle > p").text();

  return result;
}

export default didDukeWin;
