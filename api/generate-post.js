import { FIELD_OPTIONS } from "../src/constants/brand.js";

const GEMINI_MODEL = "gemini-3.5-flash-lite";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST 요청만 지원합니다." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "서버에 GEMINI_API_KEY가 설정되어 있지 않습니다." });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const draft = (body?.draft || "").trim();
  if (!draft) {
    res.status(400).json({ error: "변환할 내용을 입력해주세요." });
    return;
  }

  const prompt = `당신은 동네 주민센터의 '우리 동네 목소리함' 민원 게시판에 올라갈 글을 다듬어주는 도우미입니다.
주민이 짧게 남긴 메모를 바탕으로, 정식 민원 게시글의 제목과 본문을 작성하고 아래 카테고리 중 가장 알맞은 것을 하나 고르세요.

카테고리 목록: ${FIELD_OPTIONS.join(", ")}

작성 규칙:
- 제목은 20자 내외로 핵심만 담습니다.
- 본문은 언제/어디서/무엇이 불편한지가 드러나도록 정중한 존댓말로 3~5문장 작성합니다.
- 메모에 없는 내용을 지어내지 않습니다.

주민 메모: "${draft}"`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                title: { type: "STRING" },
                content: { type: "STRING" },
                category: { type: "STRING", enum: FIELD_OPTIONS },
              },
              required: ["title", "content", "category"],
            },
          },
        }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error", response.status, errText);
      res.status(502).json({ error: "AI 작성도우미 호출에 실패했습니다." });
      return;
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      res.status(502).json({ error: "AI 응답을 이해하지 못했습니다." });
      return;
    }

    const result = JSON.parse(text);
    if (!FIELD_OPTIONS.includes(result.category)) {
      result.category = "기타";
    }

    res.status(200).json(result);
  } catch (err) {
    console.error("generate-post failed", err);
    res.status(500).json({ error: "AI 작성도우미 처리 중 오류가 발생했습니다." });
  }
}
