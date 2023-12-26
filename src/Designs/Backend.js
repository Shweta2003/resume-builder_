export const getAnswer = async (prompt, maxTokens) => {
  const url = "https://api.openai.com/v1/chat/completions";
<<<<<<< HEAD
  // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const apiKey = "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";
=======
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
>>>>>>> 0c77909abf8e5e54d9cd46695ca2594dd9706609
  const messages = [
    {
      role: "system",
      content: `Write the following text in a concise, professional, and impactful manner. Ensure the language is refined and the response is ${maxTokens} words long: "${prompt}"`,
    },
  ];
<<<<<<< HEAD

=======
>>>>>>> 0c77909abf8e5e54d9cd46695ca2594dd9706609
  const body = {
    model: "gpt-3.5-turbo",
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
<<<<<<< HEAD
  console.log(data)
=======
>>>>>>> 0c77909abf8e5e54d9cd46695ca2594dd9706609
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

<<<<<<< HEAD

export const getAnswerForTailered = async (prompt, already, maxTokens, section) => {
  const url = "https://api.openai.com/v1/chat/completions";
  // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const apiKey = "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";
  const messages = [
    {
      role: "system",

      content: `Give the response in professional language. I want to apply for the ${prompt} position. Give brief and consice response, to modify the ${section} section in my resume. The destails provided are ${already}. Help me enhance it according to the job description. Give me brief description about this JD in not more than ${maxTokens}.`,
=======
export const getAnswerForExperience = async (prompt, maxTokens) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: `Here is my detail ${prompt} and I want to enhance my details and I want three bullet points to write in my resume job experience section.`,
    },
  ];

  const body = {
    model: "gpt-3.5-turbo",
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
  console.log(data);
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

export const getAnswerForTailered = async (prompt, maxTokens, section) => {
  const url = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const messages = [
    {
      role: "system",
      content: `Give the response in professional language. Give breif and consice response, Here is my Job Description ${prompt} and I want to write ${section} section in my resume. Give me brief description about this JD in not more than ${maxTokens}.`,
>>>>>>> 0c77909abf8e5e54d9cd46695ca2594dd9706609
    },
  ];

  const body = {
    model: "gpt-3.5-turbo",
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
  console.log(data);
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
