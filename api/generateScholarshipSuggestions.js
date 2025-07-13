// api/generateScholarshipSuggestions.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const formData = req.body;

  const prompt = `Suggest 3 scholarships...`; // Prompt string ✅
  const API_KEY = process.env.GEMINI_API_KEY; // Env var ✅

  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/...`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    const suggestions = result.candidates?.[0]?.content?.parts?.[0]?.text || "No suggestions found.";

    res.status(200).json({ suggestions }); // ✅ JSON response
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
