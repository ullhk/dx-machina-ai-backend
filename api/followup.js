import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  console.log("🔥 followup.js called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ summary: "[Invalid prompt]" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const summary = completion.choices[0]?.message?.content?.trim() || "[No response]";
    res.status(200).json({ summary });
  } catch (err) {
    console.error("❌ AI error:", err);
    res.status(500).json({ summary: "[AI error]" });
  }
}
