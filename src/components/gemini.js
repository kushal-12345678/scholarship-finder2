export async function getScholarshipSuggestions(formData) {
    const response = await fetch("/api/generateScholarshipSuggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const result = await response.json();
    return result.suggestions || "No suggestions found.";
  }
  