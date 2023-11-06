export const getAnswer = async (prompt, maxTokens) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: `Write the following text in a concise, professional, and impactful manner. Ensure the language is refined and the response is ${maxTokens} words long: "${prompt}"`,
    },
  ];

  const body = {
    model: "gpt-4",
    messages,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const messagesFromAssistant = data.choices[0].message.content.split("\n");
  const assistantResponses = messagesFromAssistant.filter(
    (msg) => msg.trim() !== ""
  );

  return {
    evaluation: assistantResponses[0]
      ? assistantResponses[0].replace("Assistant: ", "")
      : null,
  };
};
