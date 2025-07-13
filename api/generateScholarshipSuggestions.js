// api/generateScholarshipSuggestions.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const formData = req.body;

  const prompt = `
    Suggest 3 scholarships in India for a student with the following profile:

    - Degree: ${formData.degree}
    - Year: ${formData.year}
    - GPA: ${formData.gpa}
    - Income: ${formData.income}
    - Category: ${formData.category}
    - Career Goals: ${formData.goals}
  `;

  const API_KEY = process.env.GEMINI_API_KEY;

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error response:", errorText);
      return res.status(500).json({ error: "Gemini API failed", details: errorText });
    }

    const result = await response.json();
    const suggestions =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No suggestions found.";

    res.status(200).json({ suggestions });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
