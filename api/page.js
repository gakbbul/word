import { readFileSync } from "node:fs";
import { join } from "node:path";

export default function handler(req, res) {
  let html = readFileSync(join(process.cwd(), "index.html"), "utf8");

  html = html.replace(
    /\n\s*<div className="field">\n\s*<label>Gemini API 키<\/label>\n\s*<input value=\{apiKey\} onChange=\{e => setApiKey\(e\.target\.value\)\} placeholder="Gemini API 키" \/>\n\s*<div className="hint">개인용 단일 파일이라 브라우저 안에서 직접 호출합니다\.<\/div>\n\s*<\/div>/,
    ""
  );

  html = html.replace(
    'const STORAGE_KEY = "personal-classcard-react-v1";',
    'const STORAGE_KEY = "personal-classcard-react-v1";\n    localStorage.removeItem(`${STORAGE_KEY}:geminiApiKey`);'
  );

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).send(html);
}
