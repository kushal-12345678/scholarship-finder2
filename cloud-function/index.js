const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors({ origin: true })); // ✅ Enable CORS

const genAI = new GoogleGenerativeAI("AIzaSyCxDOJOTAvKcFAM79NS8HRTFHTNtOdv1dQ"); // 🔁 Replace with your actual key

app.post("/", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `
Suggest 3 scholarships in India for a student with the following profile:
- Degree: ${req.body.degree}
- Year: ${req.body.year}
- GPA: ${req.body.gpa}
- Income: ${req.body.income}
- Category: ${req.body.category}
- Career Goals: ${req.body.goals}
`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    res.status(200).json({ suggestions: text });
  } catch (error) {
    console.error("Error generating suggestions:", error);
    res.status(500).json({ error: "Failed to generate suggestions" });
  }
});

exports.generateScholarshipSuggestions = functions.https.onRequest(app);
